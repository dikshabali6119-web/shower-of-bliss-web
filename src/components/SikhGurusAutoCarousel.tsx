'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Shield, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Heart,
  Award
} from 'lucide-react';
import { GuruBioData } from '@/components/GuruBioModal';

export const SIKH_GURU_CARDS: GuruBioData[] = [
  {
    id: 'guru-nanak-dev-ji',
    name: 'श्री गुरु नानक देव जी',
    gurmukhiName: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ',
    title: 'प्रथम पातशाह • सिख धर्म के संस्थापक',
    period: '1469 – 1539 ईस्वी',
    image: '/gurus/guru-nanak.jpg',
    badge: 'प्रथम पातशाह • ੴ प्रकाश',
    motto: 'एक ओंकार सतनाम करता पुरखु निरभउ निरवैरु अकाल मूरति अजूनी सैभं गुरप्रसादि',
    lifeStory: [
      'श्री गुरु नानक देव जी महाराज सिख धर्म के प्रथम गुरु और मानवता के महान आध्यात्मिक प्रकाश-स्तंभ हैं। उनका जन्म 1469 ईस्वी में राय भोई दी तलवंडी (वर्तमान ननकाना साहिब) में हुआ था।',
      'उन्होंने पूरे भारत, तिब्बत, मक्का, मदीना और बगदाद तक चार लंबी उदासियाँ (आध्यात्मिक यात्राएँ) कीं। उन्होंने पाखंड, अंधविश्वास और जाति-पाति का खंडन कर "एक ओंकार" (अद्वैत परमात्मा) का साक्षात्कार कराया।',
      'करतारपुर साहिब में उन्होंने "नाम जपो, कीरत करो, वंड छको" की मर्यादा स्थापित की, जो आज भी सिख परंपरा का मूल आधार है।'
    ],
    teachings: [
      'परमात्मा एक है (ੴ), वह निर्गुण भी है और सगुण भी।',
      'जाति-पाति और सामाजिक भेदभाव का पूर्ण त्याग — समस्त मानव जाति एक ही ईश्वर की संतान है।',
      'सत्य से बड़ा कुछ नहीं, पर सत्य आचरण सबसे ऊंचा है (सचु ओरै सभु को ऊपरि सचु आचारु)।'
    ],
    nirmalaConnection: 'संत निक्का सिंह जी और संपूर्ण निर्मला संप्रदाय गुरु नानक देव जी द्वारा प्रकटित "ੴ" के अद्वैत रहस्य को ही वेदांत के "अहं ब्रह्मास्मि" के साथ जोड़कर मुक्ति का मार्ग बताते हैं।',
    sacredGurbani: {
      shloka: 'ੴ सतिनामु करता पुरखु निरभउ निरवैरु अकाल मूरति अजूनी सैभं गुरप्रसादि ॥',
      meaning: 'परमपिता परमात्मा एक है, उसका नाम सत्य है, वह सृष्टिकर्ता, निर्भय, निर्वैर, काल से परे, अजन्मा और स्वतः प्रकाशमान है, जो केवल पूर्ण गुरु की कृपा से प्राप्त होता है।'
    }
  },
  {
    id: 'guru-gobind-singh-ji',
    name: 'श्री गुरु गोबिन्द सिंह जी',
    gurmukhiName: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ',
    title: 'दशम पातशाह • निर्मला संप्रदाय के संस्थापक',
    period: '1666 – 1708 ईस्वी',
    image: '/gurus/guru-gobind-singh.jpg',
    badge: 'दशम पातशाह • निर्मला संस्थापक',
    motto: 'मानस की जात सभै एकै पहिचानबो ॥',
    lifeStory: [
      'दशमेश पिता श्री गुरु गोबिन्द सिंह जी महाराज ने 1699 ईस्वी में आनंदपुर साहिब में खालसा पंथ की स्थापना की और आत्म-सम्मान, वीरता और भक्ति का अद्भुत समन्वय रचा।',
      '1686 ईस्वी में उन्होंने अपने पांच समर्पित सिखों (पंच निर्मला) को काशी (वाराणसी) भेजा ताकि वे देवभाषा संस्कृत, उपनिषद् और अद्वैत वेदांत का गहन अध्ययन कर सकें।',
      'इन्हीं पांच संतों से ऐतिहासिक "निर्मला संप्रदाय" (Nirmala Order) की स्थापना हुई, जिसने गुरुवाणी और वेदांत के समन्वय की अमर परंपरा स्थापित की।'
    ],
    teachings: [
      'समस्त मानव जाति का मूल एक ही है (मानस की जात सभै एकै पहिचानबो)।',
      'जब समस्त शांतिपूर्ण उपाय निष्फल हो जाएँ, तभी न्याय की रक्षा हेतु खड्ग उठाना धर्म है।',
      'शब्द को ही शाश्वत गुरु मानना — 1708 में श्री गुरु ग्रन्थ साहिब जी को गुरुपद प्रदान किया।'
    ],
    nirmalaConnection: 'गुरु गोबिन्द सिंह जी महाराज ही निर्मला परंपरा के प्रत्यक्ष संस्थापक हैं। पूज्य संत निक्का सिंह जी "विरक्त" इसी पावन निर्मला परंपरा के शीर्ष ब्रह्मज्ञानी संत हुए हैं।',
    sacredGurbani: {
      shloka: 'सगल दुआरे कउ छाडि कै गहिओ तुम्हारो दुआर ॥ बांहि गहे की लाज असिधुज दास तुम्हार ॥',
      meaning: 'हे प्रभु! संसार के समस्त द्वारों को छोड़कर मैंने केवल आपका द्वार पकड़ा है। हे कृपासिंधु! मेरा हाथ थामकर अपने इस सेवक की लाज रखें।'
    }
  },
  {
    id: 'sant-nikka-singh-ji',
    name: 'संत निक्का सिंह जी "विरक्त"',
    gurmukhiName: 'ਸੰਤ ਨਿੱਕਾ ਸਿੰਘ ਜੀ \'ਵਿਰਕਤ\'',
    title: 'परम पूज्य गुरुदेव • पूर्ण ब्रह्मज्ञानी संत (निर्मला संप्रदाय)',
    period: 'निर्मला संत परंपरा • बीसवीं सदी',
    image: '/gurus/sant-nikka-singh.jpg',
    badge: 'पूज्य गुरुदेव • पूर्ण ब्रह्मज्ञानी',
    motto: 'वेदांत का ज्ञान और गुरुवाणी का सिमरन ही जीव की परम मुक्ति है',
    lifeStory: [
      'परम पूज्य श्रीमन् 108 संत बाबा निक्का सिंह जी महाराज "विरक्त" निर्मला संत परंपरा के परम ज्ञानी, त्यागी और साक्षात् ब्रह्म-स्वरूप संत हुए हैं।',
      'उनका संपूर्ण जीवन कठोर तपस्या, उपनिषद् वेदांत के गहन चिंतन और गुरुवाणी के रस-पान में व्यतीत हुआ। उन्होंने भारत भर में आश्रमों, गौशालाओं, विद्यालयों और सत्संग आश्रमों की स्थापना की।',
      'स्वामी अमरजीत सिंह जी ने वर्षों तक पूज्य महाराज जी के चरणों में बैठकर वेदांत, उपदेश सारम्, श्रीमद्भगवद्गीता और गुरुवाणी का अमर ज्ञान आत्मसात् किया।'
    ],
    teachings: [
      'वेदांत का ज्ञान बुद्धि को भ्रम-मुक्त करता है और गुरुवाणी का सिमरन हृदय को प्रेम व शांति से भरता है।',
      'सच्चा वैराग्य संसार छोड़ने में नहीं, बल्कि मन से आसक्ति और अहंकार को मिटाने में है।',
      'प्रत्येक श्वास में ईश्वर का स्मरण करते हुए निष्काम सेवा ही जीव का परम कर्तव्य है।'
    ],
    nirmalaConnection: 'स्वामी अमरजीत सिंह जी के प्रत्यक्ष गुरुदेव। यूट्यूब चैनल "Shower of Bliss" (@amarjit311) पूर्णतः पूज्य संत निक्का सिंह जी की पावन शिक्षाओं को समर्पित है।',
    sacredGurbani: {
      shloka: 'ब्रहम गिआनी की निरमल रीति ॥ जैसे सरब बिआपी अगनी की जोति ॥',
      meaning: 'ब्रह्मज्ञानी संत की रीति परम पावन और निर्मल होती है, जैसे अग्नि समस्त काष्ठ में अप्रत्यक्ष रूप से एकरस समाई रहती है।'
    }
  },
  {
    id: 'guru-arjan-dev-ji',
    name: 'श्री गुरु अर्जुन देव जी',
    gurmukhiName: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ',
    title: 'पंचम पातशाह • सुखमनी साहिब व आदि ग्रन्थ के संकलनकर्ता',
    period: '1563 – 1606 ईस्वी',
    image: '/gurus/guru-arjan-dev.jpg',
    badge: 'पंचम पातशाह • सुखमनी साहिब',
    motto: 'तेरा कीआ मीठा लागै ॥ हरि नामु पदारथु नानकु मांगै ॥',
    lifeStory: [
      'पंचम पातशाह श्री गुरु अर्जुन देव जी महाराज शांति और शहादत के पुंज थे। उन्होंने 1604 ईस्वी में श्री हरिमंदिर साहिब (स्वर्ण मंदिर) में श्री आदि ग्रन्थ साहिब जी का प्रथम प्रकाश कराया।',
      'उन्होंने अमृतमयी वाणी "सुखमनी साहिब" की रचना की, जो समस्त मानसिक विकारों, तनाव और अशांति को हरकर अंतःकरण में परम सुख का संचार करती है।',
      'लाहौर में तप्त तवे पर बैठकर भी उन्होंने प्रभु की रज़ा को मीठा माना (तेरा कीआ मीठा लागै)।'
    ],
    teachings: [
      'सुखमनी साहिब का नित्य पाठ और सिमरन मन के समस्त संतापों को नष्ट करता है।',
      'प्रभु के भाणे (इच्छा) में अडिग रहना ही सर्वोच्च भक्ति है।',
      'भक्तों और संतों के चरणों की धूलि में ही परम कल्याण समाहित है।'
    ],
    nirmalaConnection: 'संत निक्का सिंह जी के आश्रमों में सुखमनी साहिब का अखंड सिमरन और ध्यान कराया जाता है, जिसे स्वामी अमरजीत सिंह जी अपने यूट्यूब चैनल पर विस्तार से समझाते हैं।',
    sacredGurbani: {
      shloka: 'प्रभ कै सिमरनि मन की मलु जाइ ॥ अम्रित नामु रिदै माहि समाइ ॥',
      meaning: 'प्रभु के पवित्र सिमरन से मन का समस्त मैल (विकार) धुल जाता है और हृदय में अमृतमयी नाम का वास हो जाता है।'
    }
  },
  {
    id: 'guru-amar-das-ji',
    name: 'श्री गुरु अमरदास जी',
    gurmukhiName: 'ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ',
    title: 'तीसरे पातशाह • आनंदु साहिब के रचयिता',
    period: '1479 – 1574 ईस्वी',
    image: '/gurus/guru-amar-das.jpg',
    badge: 'तीसरे पातशाह • आनंदु साहिब',
    motto: 'मन तूं जोति सरूपु है आपणा मूलु पछाणु ॥',
    lifeStory: [
      'श्री गुरु अमरदास जी महाराज ने वृद्धावस्था में 12 वर्षों तक कठोर गुरु-सेवा की। उन्होंने लंगर परंपरा में "पहले पंगत पाछे संगत" की अनिवार्य मर्यादा लागू की।',
      'उन्होंने गोइंदवाल साहिब में 84 सीढ़ियों वाली बावली साहिब का निर्माण कराया, जहाँ गुरुवाणी का पाठ करने से 84 लाख योनियों से मुक्ति का द्वार खुलता है।',
      'उनकी अमर रचना "आनंदु साहिब" अध्यात्म का शिखर है, जो आत्मा को अपने मूल ज्योति-स्वरूप में स्थिर करती है।'
    ],
    teachings: [
      'हे मन! तू साक्षात् दिव्य ज्योति स्वरूप है, अपने वास्तविक मूल को पहचान (आपणा मूलु पछाणु)।',
      'सच्ची गुरु-सेवा में ही अहंकार का नाश और सहज समाधि की प्राप्ति होती है।',
      'सती प्रथा और पर्दा प्रथा जैसी सामाजिक कुरीतियों का सबसे पहले मुखर विरोध किया।'
    ],
    nirmalaConnection: '"Shower of Bliss" (परम आनंद की वर्षा) का मूल स्रोत गुरु अमरदास जी का "आनंदु साहिब" और आत्म-पहचान का वही वेदांतिक उपदेश है।',
    sacredGurbani: {
      shloka: 'अनंदु भइआ मेरी माए सतिगुरू मै पाइआ ॥ सतिगुरु त पाइआ सहज सेती मनि वजीआ वाधाईआ ॥',
      meaning: 'हे मेरी माँ! आज मेरे अंतःकरण में परम आनंद छा गया है क्योंकि मैंने सच्चे सतगुरु को पा लिया है, और मेरे मन में दिव्य बधाई बज उठी है।'
    }
  },
  {
    id: 'guru-tegh-bahadur-ji',
    name: 'श्री गुरु तेग बहादुर जी',
    gurmukhiName: 'ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ',
    title: 'नवम पातशाह • हिन्द दी चादर व वैराग्य के सागर',
    period: '1621 – 1675 ईस्वी',
    image: '/gurus/guru-tegh-bahadur.jpg',
    badge: 'नवम पातशाह • वैराग्य व शांति',
    motto: 'भै काहू कउ देन नहि नहि भै मानत आन ॥',
    lifeStory: [
      'नवम पातशाह श्री गुरु तेग बहादुर जी महाराज ने बकाला में 20 से अधिक वर्षों तक घोर एकांत ध्यान-साधना की।',
      'उन्होंने धार्मिक स्वतंत्रता और कश्मीरी पंडितों के मानवाधिकारों की रक्षा के लिए दिल्ली के चाँदनी चौक में अपना शीश अर्पण कर दिया। उन्हें "हिन्द दी चादर" कहा जाता है।',
      'गुरु ग्रन्थ साहिब में दर्ज उनके 59 शब्द और 57 सलोक वैराग्य, साक्षी-भाव और संसार की नश्वरता का साक्षात् उपदेश हैं।'
    ],
    teachings: [
      'न किसी को भय दो, न किसी का भय मानो (भै काहू कउ देन नहि नहि भै मानत आन)।',
      'संसार जल के बुलबुले के समान क्षणभंगुर है, केवल राम का नाम और आत्मा ही सत्य है।',
      'सुख और दुःख में एक समान समता में स्थित रहना ही सच्चा ब्रह्मज्ञान है।'
    ],
    nirmalaConnection: 'संत निक्का सिंह जी महाराज नवम पातशाह के सलोकों का निरंतर चिंतन कराते थे ताकि साधक का मन संसार से विरक्त होकर परमात्मा में लीन हो सके।',
    sacredGurbani: {
      shloka: 'जो नरु दुख मै दुखु नही मानै ॥ सुख सनेहु अरु भै नही जा कै कंचन माटी मानै ॥',
      meaning: 'जो मनुष्य दुःख में दुःखी नहीं होता, जिसे सुख, आसक्ति और भय छू नहीं सकते और जो सोने को भी मिट्टी के समान समझता है, वही ब्रह्म में लीन है।'
    }
  },
  {
    id: 'guru-granth-sahib-ji',
    name: 'श्री गुरु ग्रन्थ साहिब जी',
    gurmukhiName: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ',
    title: 'शाश्वत शब्द गुरु • सर्वव्यापक दिव्य ज्ञान',
    period: '1430 अंग • सार्वभौमिक प्रकाश',
    image: '/gurus/guru-granth-sahib.jpg',
    badge: 'शब्द गुरु • शाश्वत प्रकाश',
    motto: 'सभ महि जोति जोति है सोइ ॥ तिस दै चानणि सभ महि चानणु होइ ॥',
    lifeStory: [
      'श्री गुरु ग्रन्थ साहिब जी महाराज सिखों के शाश्वत और जीवित शब्द-गुरु हैं। इसमें सिख गुरुओं के साथ-साथ कबीर, फरीद, नामदेव, रविदास, जयदेव आदि 15 महान संतों की वाणी दर्ज है।',
      'दशमेश पिता गुरु गोबिन्द सिंह जी ने 1708 में नांदेड़ साहिब में आज्ञा दी: "सभ सिखन कउ हुकम है गुरु मानिओ ग्रन्थ।"',
      'यह किसी एक मत या पंथ का नहीं, बल्कि संपूर्ण मानवता के लिए अद्वैत प्रेम, ज्ञान और मुक्ति का विश्व-ग्रंथ है।'
    ],
    teachings: [
      'शब्द ही गुरु है, सुरति (चेतना) ही शिष्य है (सबदु गुरू सुरति धुनि चेला)।',
      'प्रत्येक प्राणी में एक ही ईश्वर की ज्योति जगमगा रही है।',
      'ना कोई बैरी नहीं बेगाना, सकल संगि हमको बनि आई।'
    ],
    nirmalaConnection: 'निर्मला परंपरा श्री गुरु ग्रन्थ साहिब जी की वाणी का अध्ययन अद्वैत वेदांत के परिप्रेक्ष्य में करती है, जो स्वामी अमरजीत सिंह जी की मुख्य विचार-धारा है।',
    sacredGurbani: {
      shloka: 'सभ महि जोति जोति है सोइ ॥ तिस दै चानणि सभ महि चानणु होइ ॥',
      meaning: 'समस्त घट-घट में वही एक दिव्य ज्योति विराजमान है, और उसी के प्रकाश से यह संपूर्ण ब्रह्मांड आलोकित हो रहा है।'
    }
  },
  {
    id: 'swami-amarjit-singh',
    name: 'स्वामी अमरजीत सिंह जी',
    gurmukhiName: 'ਸਵਾਮੀ ਅਮਰਜੀਤ ਸਿੰਘ ਜੀ',
    title: 'निर्मला शिष्य • "Shower of Bliss" के प्रणेता',
    period: 'समकालीन ब्रह्मज्ञानी साधक',
    image: '/swami-amarjit-portrait.jpg',
    badge: 'निर्मला शिष्य • @amarjit311',
    motto: 'ज्ञान, भक्ति और गुरुवाणी सिमरन ही जीव की परम मुक्ति का सीधा मार्ग है',
    lifeStory: [
      'स्वामी अमरजीत सिंह जी ने पूज्य गुरुदेव संत निक्का सिंह जी "विरक्त" के सानिध्य में वर्षों तक वेदांत, उपनिषद्, भगवद्गीता और गुरुवाणी का गहन अध्ययन किया।',
      'गुरुदेव की पावन आज्ञा से उन्होंने यूट्यूब चैनल "Shower of Bliss" (@amarjit311) की स्थापना की, ताकि बिना किसी बाह्य आडंबर के विशुद्ध आत्म-ज्ञान जन-जन तक पहुँचे।',
      'वे महर्षि रमण के "उपदेश सारम्", श्रीमद्भगवद्गीता के चौथे अध्याय, वैदिक कथाओं और सूफी कलाम के माध्यम से साधकों को मुक्ति की ओर अग्रसर कर रहे हैं।'
    ],
    teachings: [
      'श्वास-श्वास में ੴ का स्मरण करते हुए मन को अंतर्मुखी करना।',
      'अहंकार और संशयों को ज्ञान के दीपक से विसर्जित कर साक्षी-भाव में स्थित होना।',
      'दैनिक जीवन में कर्तव्य पालन करते हुए भी अनासक्त भाव से प्रभु-प्रेम में मगन रहना।'
    ],
    nirmalaConnection: 'पूज्य संत निक्का सिंह जी के कृपा-पात्र शिष्य और उनके पावन ज्ञान-यज्ञ को आधुनिक डिजिटल माध्यमों से विश्व भर में प्रसारित करने वाले संवाहक।',
    sacredGurbani: {
      shloka: 'गुर परसादी वेखि तू हरि मंदरु तेरे नालि ॥ हरि मंदरु सबदे खोजीऐ हरि नामो लेहु सम्हालि ॥',
      meaning: 'गुरु की कृपा से देखो कि ईश्वर का मंदिर तुम्हारे ही भीतर है। शब्द के द्वारा इस मंदिर की खोज करो और प्रभु के नाम को संभालो।'
    }
  }
];

interface SikhGurusAutoCarouselProps {
  onOpenBio: (guru: GuruBioData) => void;
}

export default function SikhGurusAutoCarousel({ onOpenBio }: SikhGurusAutoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  const total = SIKH_GURU_CARDS.length;

  // Responsive cards visible (4 on xl/desktop, 3 on lg, 2 on tablet, 1 on mobile)
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxIndex = Math.max(0, total - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // 2-SECOND AUTOMATIC SMOOTH SLIDE (Continuous every 2 seconds as user requested)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000); // 2000ms = 2 seconds
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="w-full py-8 md:py-12 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-64 bg-[#38bdf8]/15 dark:bg-[#0284c7]/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284c7]/15 dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 text-xs font-bold mb-2">
              <span className="font-serif font-extrabold text-sm text-[#eab308] dark:text-[#facc15]">ੴ</span>
              <span>सिख गुरु व संत निक्का सिंह जी पावन दर्शन</span>
            </div>

            <h2 className="font-serif-bliss text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sikh Gurus &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#eab308] dark:from-[#38bdf8] dark:via-[#facc15] dark:to-[#fde047]">
                Sant Nikka Singh Ji
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-100 font-medium mt-1">
              कार्ड पर टैप करके पावन गुरुओं के जीवन, उपदेश व संत निक्का सिंह जी के संबंध के बारे में पढ़ें
            </p>
          </div>
        </div>

        {/* 3-4 CARDS SLIDER TRACK (Slides every 2 seconds automatically) */}
        <div className="relative overflow-hidden rounded-3xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out -mx-2.5"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {SIKH_GURU_CARDS.map((guru) => (
              <div
                key={guru.id}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 px-2.5"
              >
                <div 
                  onClick={() => onOpenBio(guru)}
                  className="glass-panel rounded-3xl overflow-hidden gold-glow-card flex flex-col justify-between h-full border-2 border-[#eab308]/50 dark:border-[#facc15]/50 bg-white/95 dark:bg-[#111d33]/95 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Portrait Container with Golden Border */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b-2 border-[#eab308]/30">
                    <Image
                      src={guru.image}
                      alt={guru.name}
                      fill
                      className="object-cover object-top transition-transform duration-600 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Sikh Sacred Emblem */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-xs text-[#facc15] text-[10px] font-bold border border-[#eab308]/50 flex items-center gap-1 shadow-xs">
                      <span className="font-serif">ੴ</span>
                      <span>पावन दर्शन</span>
                    </div>

                    {/* Title Overlay in Photo */}
                    <div className="absolute bottom-2 left-3 right-3 text-white">
                      <span className="text-[10px] font-bold text-[#facc15] uppercase tracking-wider block">
                        {guru.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Guru Title & Badge */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e0f2fe] dark:bg-[#162540] text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/30 truncate max-w-[85%]">
                          {guru.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#eab308] animate-ping" />
                      </div>

                      {/* Guru Name */}
                      <h3 className="font-serif-bliss text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-[#0284c7] dark:group-hover:text-[#facc15] transition-colors mb-1.5">
                        {guru.name}
                      </h3>

                      {/* Sacred Motto / Quote */}
                      <p className="text-[11px] font-serif italic text-amber-800 dark:text-[#fde047] line-clamp-2 leading-relaxed mb-3 border-l-2 border-[#eab308] pl-2 bg-[#f0f9ff]/70 dark:bg-[#162540]/60 py-0.5 rounded-r">
                        &ldquo;{guru.motto}&rdquo;
                      </p>
                    </div>

                    {/* Prominent Action Button: Read Biography */}
                    <div className="pt-2.5 border-t border-[#0284c7]/15 dark:border-[#eab308]/20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBio(guru);
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all border border-[#facc15] hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#fef08a]" />
                        <span>जीवन व उपदेश पढ़ें (Read Bio)</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(dotIdx);
                }}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-6 bg-[#0284c7] dark:bg-[#facc15] shadow-xs'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
