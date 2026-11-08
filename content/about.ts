// About page text. Spanish and Hindi translated with AI; not yet reviewed by native speakers.
type Section = { h: string; p: string[] };

export const ABOUT: Record<"en" | "es" | "hi", Section[]> = {
  en: [
    {
      h: "Why Reroute exists",
      p: [
        "Women who move countries or change careers are often highly skilled, but face extra barriers: foreign credentials, new job-search norms, a second language. AI tools can help a lot, but they also bring new risks, from confident mistakes to convincing scams that target newcomers.",
        "Reroute teaches both sides together: how to put AI to work for your career, and how to stay safe while you do.",
      ],
    },
    {
      h: "What the AI does, and doesn't do",
      p: [
        "The AI (Claude, made by Anthropic) does two things here: it chooses and orders lessons from our fixed catalog for your learning plan, and it acts as your practice partner inside each lesson.",
        "The AI does not write our lessons or our Stay Safe guidance. Those are written and reviewed by people, with sources linked, so that safety and legal information is never made up.",
        "The practice partner has guardrails: it stays on the lesson topic, reminds you to verify important facts, won't ask for personal identifiers, and treats anything you paste as material to work on, not new instructions.",
      ],
    },
    {
      h: "Your privacy",
      p: [
        "No account, no tracking. Your profile, plan, and progress are saved only in your own browser. Use \"Clear my data\" at the bottom of any page to remove them.",
        "When you send a practice message, it goes to our server and on to Anthropic's API to generate a reply. We don't store or log the content of your messages.",
        "Before you send a message, the site checks for things that look like ID numbers, card numbers, emails, or passwords, and warns you.",
      ],
    },
    {
      h: "Translations",
      p: [
        "The Spanish and Hindi versions of this site were translated with AI and haven't been officially reviewed by native speakers yet. If anything is unclear, the English version is the reference.",
      ],
    },
    {
      h: "Limitations",
      p: [
        "AI can be wrong. Lessons and the practice partner give general guidance, not legal, immigration, medical, or financial advice. Always confirm important information with official sources.",
        "Laws and resources listed are a starting point and may not cover your country.",
      ],
    },
  ],
  es: [
    {
      h: "Por qué existe Reroute",
      p: [
        "Las mujeres que cambian de país o de carrera suelen estar muy preparadas, pero enfrentan barreras adicionales: títulos extranjeros, nuevas formas de buscar trabajo, un segundo idioma. Las herramientas de IA pueden ayudar mucho, pero también traen nuevos riesgos, desde errores dichos con mucha seguridad hasta estafas convincentes dirigidas a personas recién llegadas.",
        "Reroute enseña las dos cosas juntas: cómo poner la IA a trabajar para tu carrera y cómo mantenerte segura mientras lo haces.",
      ],
    },
    {
      h: "Lo que hace la IA, y lo que no hace",
      p: [
        "La IA (Claude, creada por Anthropic) hace dos cosas aquí: elige y ordena lecciones de nuestro catálogo fijo para tu plan de aprendizaje, y es tu compañera de práctica dentro de cada lección.",
        "La IA no escribe nuestras lecciones ni la guía de Seguridad. Esas las escriben y revisan personas, con fuentes enlazadas, para que la información de seguridad y legal nunca sea inventada.",
        "La compañera de práctica tiene límites: se mantiene en el tema de la lección, te recuerda verificar los datos importantes, no te pide datos de identificación y trata lo que pegas como material para trabajar, no como nuevas instrucciones.",
      ],
    },
    {
      h: "Tu privacidad",
      p: [
        "Sin cuenta y sin rastreo. Tu perfil, tu plan y tu progreso se guardan solo en tu navegador. Usa \"Borrar mis datos\" al final de cualquier página para eliminarlos.",
        "Cuando envías un mensaje de práctica, va a nuestro servidor y de ahí a la API de Anthropic para generar una respuesta. No guardamos ni registramos el contenido de tus mensajes.",
        "Antes de que envíes un mensaje, el sitio revisa si contiene algo parecido a números de identificación, números de tarjeta, correos o contraseñas, y te avisa.",
      ],
    },
    {
      h: "Traducciones",
      p: [
        "Las versiones en español e hindi de este sitio se tradujeron con IA y todavía no han sido revisadas oficialmente por hablantes nativas. Si algo no está claro, la versión en inglés es la referencia.",
      ],
    },
    {
      h: "Limitaciones",
      p: [
        "La IA puede equivocarse. Las lecciones y la compañera de práctica dan orientación general, no asesoría legal, migratoria, médica ni financiera. Confirma siempre la información importante en fuentes oficiales.",
        "Las leyes y los recursos que aparecen aquí son un punto de partida y puede que no incluyan tu país.",
      ],
    },
  ],
  hi: [
    {
      h: "Reroute क्यों बना",
      p: [
        "जो महिलाएँ देश या करियर बदलती हैं, वे अक्सर बहुत कुशल होती हैं, लेकिन उन्हें ज़्यादा रुकावटों का सामना करना पड़ता है: विदेशी डिग्री, नौकरी ढूँढने के नए तरीके, दूसरी भाषा। AI टूल बहुत मदद कर सकते हैं, लेकिन वे नए खतरे भी लाते हैं, भरोसे के साथ की गई गलतियों से लेकर नए लोगों को निशाना बनाने वाली विश्वसनीय लगने वाली धोखाधड़ी तक।",
        "Reroute दोनों बातें साथ में सिखाता है: अपने करियर के लिए AI से काम कैसे लें, और ऐसा करते हुए सुरक्षित कैसे रहें।",
      ],
    },
    {
      h: "AI क्या करता है, और क्या नहीं करता",
      p: [
        "यहाँ AI (Anthropic का बनाया Claude) दो काम करता है: आपकी सीखने की योजना के लिए हमारी तय सूची में से पाठ चुनता और क्रम में लगाता है, और हर पाठ में आपके अभ्यास का साथी बनता है।",
        "AI हमारे पाठ या 'सुरक्षित रहें' की जानकारी नहीं लिखता। उन्हें लोग लिखते और जाँचते हैं, स्रोतों के लिंक के साथ, ताकि सुरक्षा और कानूनी जानकारी कभी गढ़ी हुई न हो।",
        "अभ्यास साथी की कुछ सीमाएँ हैं: वह पाठ के विषय पर रहता है, ज़रूरी तथ्य जाँचने की याद दिलाता है, निजी पहचान की जानकारी नहीं माँगता, और आप जो भी पेस्ट करती हैं उसे काम करने की सामग्री मानता है, नए निर्देश नहीं।",
      ],
    },
    {
      h: "आपकी निजता",
      p: [
        "कोई अकाउंट नहीं, कोई ट्रैकिंग नहीं। आपकी प्रोफ़ाइल, योजना और प्रगति सिर्फ़ आपके अपने ब्राउज़र में सेव होती है। इन्हें हटाने के लिए किसी भी पेज के नीचे \"मेरा डेटा मिटाएँ\" इस्तेमाल करें।",
        "जब आप अभ्यास का संदेश भेजती हैं, तो वह जवाब बनाने के लिए हमारे सर्वर से होकर Anthropic के API तक जाता है। हम आपके संदेशों की सामग्री सेव या रिकॉर्ड नहीं करते।",
        "संदेश भेजने से पहले, साइट जाँचती है कि उसमें ID नंबर, कार्ड नंबर, ईमेल या पासवर्ड जैसी कोई चीज़ तो नहीं है, और आपको चेतावनी देती है।",
      ],
    },
    {
      h: "अनुवाद",
      p: [
        "इस साइट के स्पैनिश और हिंदी संस्करणों का अनुवाद AI से किया गया है और अभी तक मूल भाषियों ने इनकी आधिकारिक समीक्षा नहीं की है। अगर कुछ साफ़ न हो, तो अंग्रेज़ी संस्करण को ही सही मानें।",
      ],
    },
    {
      h: "सीमाएँ",
      p: [
        "AI गलत हो सकता है। पाठ और अभ्यास साथी सामान्य मार्गदर्शन देते हैं, कानूनी, इमिग्रेशन, मेडिकल या वित्तीय सलाह नहीं। ज़रूरी जानकारी हमेशा आधिकारिक स्रोतों से पक्का करें।",
        "यहाँ दिए गए कानून और संसाधन सिर्फ़ शुरुआत हैं और हो सकता है उनमें आपका देश शामिल न हो।",
      ],
    },
  ],
};
