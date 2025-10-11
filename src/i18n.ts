import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      brand: 'PashuDhani',
      navbar: {
        features: 'Features', how: 'How it works', faq: 'FAQ', contact: 'Contact', partner: 'Partner with us', getApp: 'Get the app'
      },
      hero: {
        title: 'India’s Agriculture Super App',
        subtitle: 'Browse cattle melas, list and discover cattle, validate purchases online, get insurance, and connect with vets — all in one app.',
        download: 'Download', explore: 'Explore features'
      },
      featuresTitle: 'Everything you need, in one app',
      features: {
        melas: 'Cattle Fairs', melasDesc: 'Discover melas with timings, locations, and crowd insights.',
        list: 'List & Sell', listDesc: 'Create beautiful listings with images and details in minutes.',
        chat: 'Discover & Chat', chatDesc: 'Swipe through listings, match, and chat in real-time.',
        validate: 'Purchase Validation', validateDesc: 'Get online verification of cattle documents and ownership.',
        insure: 'Insurance', insureDesc: 'Protect your livestock with quick, trusted insurance options.',
        vet: 'Vet Services', vetDesc: 'Book online consultations with licensed veterinarians.'
      },
      how: 'How it works',
      steps: {
        s1: '1. Get the app', s1d: 'Sign in with Google. We’ll set up your profile in seconds.',
        s2: '2. Explore & list', s2d: 'Browse melas, discover cattle, or add your own listings.',
        s3: '3. Validate & insure', s3d: 'Use online validation and insurance to complete purchases confidently.'
      },
      love: 'Loved by farmers and traders',
      cta: { title: 'Grow with PashuDhani', subtitle: 'Join thousands of farmers and traders using our app to modernize their business.', button: 'Get the app' },
      stats: {
        title: 'Trusted by the community',
        metrics: {
          listings: { value: '50k+', label: 'Listings created' },
          users: { value: '100k+', label: 'Farmers & traders' },
          states: { value: '20+', label: 'States covered' },
          messages: { value: '5M+', label: 'Messages sent' }
        }
      },
      partners: { title: 'Partners and supporters' },
      download: { title: 'Download the app', subtitle: 'Available soon on your favorite stores', play: 'Google Play', appstore: 'App Store' },
      faq: {
        title: 'Frequently asked questions',
        q1: { q: 'Is PashuDhani free to use?', a: 'Yes, browsing and listing are free. Some services may be paid.' },
        q2: { q: 'How does chat work?', a: 'Chats are started per listing; you talk directly about a specific animal.' },
        q3: { q: 'Can I use it without a mela nearby?', a: 'Yes. You can list, discover, validate and insure fully online.' }
      },
      contact: { title: 'Get in touch', subtitle: 'For partnerships and support, email us.', email: 'Email' },
      footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact' }
    }
  },
  hi: {
    translation: {
      brand: 'पशुधनी',
      navbar: {
        features: 'विशेषताएं', how: 'कैसे काम करता है', faq: 'प्रश्नोत्तर', contact: 'संपर्क', partner: 'हमारे साझेदार बनें', getApp: 'ऐप डाउनलोड करें'
      },
      hero: {
        title: 'भारत का कृषि सुपर ऐप',
        subtitle: 'पशु मेलों को ब्राउज़ करें, पशुओं की लिस्टिंग करें, ऑनलाइन सत्यापन, बीमा और वेट सेवाएं—सब एक ही ऐप में।',
        download: 'डाउनलोड', explore: 'विशेषताएं देखें'
      },
      featuresTitle: 'आपकी सभी ज़रूरतें, एक ही ऐप में',
      features: {
        melas: 'पशु मेले', melasDesc: 'समय, स्थान और भीड़ की जानकारी के साथ मेले खोजें।',
        list: 'लिस्ट करें और बेचें', listDesc: 'मिनटों में तस्वीरों और विवरण के साथ खूबसूरत लिस्टिंग बनाएं।',
        chat: 'खोजें और चैट करें', chatDesc: 'लिस्टिंग पर स्वाइप करें, मैच करें और रियल-टाइम में चैट करें।',
        validate: 'खरीद सत्यापन', validateDesc: 'दस्तावेज़ और स्वामित्व का ऑनलाइन सत्यापन प्राप्त करें।',
        insure: 'बीमा', insureDesc: 'तेज़ और विश्वसनीय बीमा से अपने पशुधन की सुरक्षा करें।',
        vet: 'वेट सेवाएं', vetDesc: 'लाइसेंस प्राप्त पशु चिकित्सकों से ऑनलाइन परामर्श बुक करें।'
      },
      how: 'कैसे काम करता है',
      steps: {
        s1: '1. ऐप डाउनलोड करें', s1d: 'गूगल से साइन इन करें। प्रोफाइल कुछ सेकंड में बन जाएगी।',
        s2: '2. खोजें और लिस्ट करें', s2d: 'मेले देखें, पशु खोजें या अपनी लिस्टिंग जोड़ें।',
        s3: '3. सत्यापित करें और बीमा लें', s3d: 'ऑनलाइन सत्यापन और बीमा से भरोसे के साथ खरीद पूरी करें।'
      },
      love: 'किसानों और व्यापारियों की पसंद',
      cta: { title: 'पशुधनी के साथ बढ़ें', subtitle: 'हजारों किसान और व्यापारी इस ऐप से अपना व्यवसाय आधुनिक बना रहे हैं।', button: 'ऐप डाउनलोड करें' },
      stats: {
        title: 'समुदाय का भरोसा',
        metrics: {
          listings: { value: '50k+', label: 'बनी हुई लिस्टिंग्स' },
          users: { value: '100k+', label: 'किसान और व्यापारी' },
          states: { value: '20+', label: 'कवर किए गए राज्य' },
          messages: { value: '5M+', label: 'भेजे गए संदेश' }
        }
      },
      partners: { title: 'साझेदार और समर्थक' },
      download: { title: 'ऐप डाउनलोड करें', subtitle: 'जल्द ही आपके पसंदीदा स्टोर्स पर', play: 'गूगल प्ले', appstore: 'ऐप स्टोर' },
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        q1: { q: 'क्या पशुधनी मुफ्त है?', a: 'हाँ, ब्राउज़िंग और लिस्टिंग मुफ्त हैं। कुछ सेवाएं सशुल्क हो सकती हैं।' },
        q2: { q: 'चैट कैसे काम करती है?', a: 'चैट प्रति लिस्टिंग शुरू होती है ताकि आप उसी पशु पर बात कर सकें।' },
        q3: { q: 'बिना मेले के भी उपयोग कर सकता हूँ?', a: 'हाँ। आप लिस्टिंग, खोज, सत्यापन और बीमा ऑनलाइन कर सकते हैं।' }
      },
      contact: { title: 'हमसे संपर्क करें', subtitle: 'भागीदारी और सहायता के लिए हमें ईमेल करें।', email: 'ईमेल' },
      footer: { privacy: 'गोपनीयता', terms: 'नियम', contact: 'संपर्क' }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n


