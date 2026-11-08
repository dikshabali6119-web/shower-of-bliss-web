/**
 * Web Audio API synthesizer for ambient meditation sounds and singing bowl chimes.
 * Requires no external audio assets; runs 100% locally and reliably in modern browsers.
 */

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying = false;
  private ambientOscillators: OscillatorNode[] = [];
  private noiseNode: AudioNode | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a harmonic Tibetan Singing Bowl bell chime at 432Hz with soft overtones
  public playSingingBowl(baseFreq = 432) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const harmonics = [
        { mult: 1.0, gainVal: 0.35, decay: 4.5 },
        { mult: 2.76, gainVal: 0.15, decay: 3.2 },
        { mult: 5.4, gainVal: 0.08, decay: 2.1 },
        { mult: 8.9, gainVal: 0.04, decay: 1.4 },
      ];

      const masterGain = this.ctx.createGain();
      masterGain.connect(this.ctx.destination);
      masterGain.gain.setValueAtTime(0.8, now);

      harmonics.forEach(({ mult, gainVal, decay }) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * mult, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(gainVal, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + decay + 0.1);
      });
    } catch {
      // Audio might be blocked until user interaction
    }
  }

  // Toggle peaceful ambient drone (warm 432Hz harmonic tanpura/drone + gentle river warmth)
  public toggleAmbient(onStateChange?: (isPlaying: boolean) => void): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.isAmbientPlaying) {
        this.stopAmbient();
        if (onStateChange) onStateChange(false);
        return false;
      } else {
        this.startAmbient();
        if (onStateChange) onStateChange(true);
        return true;
      }
    } catch {
      return false;
    }
  }

  private startAmbient() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.18, now + 2.5); // smooth fade-in
    masterGain.connect(this.ctx.destination);
    this.ambientGain = masterGain;

    // Harmonic frequencies around 432Hz and deep 108Hz root
    const droneFreqs = [108, 216, 324, 432];
    this.ambientOscillators = droneFreqs.map((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const oscGain = this.ctx!.createGain();
      
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle slow frequency vibrato for living acoustic warmth
      const lfo = this.ctx!.createOscillator();
      const lfoGain = this.ctx!.createGain();
      lfo.frequency.setValueAtTime(0.1 + idx * 0.05, now);
      lfoGain.gain.setValueAtTime(0.6, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      oscGain.gain.setValueAtTime(idx === 0 ? 0.35 : 0.15 / (idx + 1), now);
      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(now);
      return osc;
    });

    this.isAmbientPlaying = true;
  }

  private stopAmbient() {
    if (!this.ctx || !this.ambientGain) return;
    const now = this.ctx.currentTime;
    this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, now);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    setTimeout(() => {
      this.ambientOscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // already stopped
        }
      });
      this.ambientOscillators = [];
      if (this.ambientGain) {
        this.ambientGain.disconnect();
        this.ambientGain = null;
      }
      this.isAmbientPlaying = false;
    }, 1300);
  }

  public isPlaying(): boolean {
    return this.isAmbientPlaying;
  }
}

export const soundSynth = new SoundSynthesizer();
