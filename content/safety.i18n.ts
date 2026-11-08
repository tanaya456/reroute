// Spanish and Hindi Stay Safe text. Translated with AI; not yet reviewed by native speakers.
// Organization names in "help" links stay in their official language.
import type { SafetyTopic } from "./safety";

export type SafetyText = Pick<SafetyTopic, "title" | "intro" | "whatItIs" | "redFlags" | "doNow">;

export const REGIONS: Record<"es" | "hi", Record<string, string>> = {
  es: {
    "United States": "Estados Unidos",
    "United States (NYC)": "Estados Unidos (Nueva York)",
    Canada: "Canadá",
    "United Kingdom": "Reino Unido",
    Australia: "Australia",
    India: "India",
    "European Union": "Unión Europea",
  },
  hi: {
    "United States": "अमेरिका",
    "United States (NYC)": "अमेरिका (न्यूयॉर्क सिटी)",
    Canada: "कनाडा",
    "United Kingdom": "यूनाइटेड किंगडम",
    Australia: "ऑस्ट्रेलिया",
    India: "भारत",
    "European Union": "यूरोपीय संघ",
  },
};

export const SAFETY_ES: Record<string, SafetyText> = {
  "ai-scams": {
    title: "Estafas con IA y ofertas de trabajo falsas",
    intro:
      "La IA permite a los estafadores escribir mensajes perfectos y personalizados en cualquier idioma. Los errores de ortografía que antes los delataban ya no están. Las personas recién llegadas que buscan trabajo son uno de sus blancos principales.",
    whatItIs: [
      "Phishing: mensajes de texto, correos o chats que se hacen pasar por un banco, una oficina del gobierno, una empresa de envíos o un empleador, para quitarte dinero o datos.",
      "Ofertas de trabajo falsas: \"reclutadores\" que ofrecen trabajo remoto fácil y muy bien pagado, y luego te piden pagar por capacitación o equipo, o mover dinero por ellos.",
      "Estafas migratorias: \"agentes\" o funcionarios falsos que amenazan tu situación migratoria o te prometen permisos garantizados a cambio de dinero.",
    ],
    redFlags: [
      "Tienes que actuar ya mismo o pasará algo malo.",
      "Te piden pagar para conseguir un trabajo, una capacitación o una visa.",
      "Piden el pago con tarjetas de regalo, criptomonedas, transferencias o aplicaciones de pago.",
      "Una oferta de trabajo sin una entrevista real, o una entrevista que solo ocurre por chat.",
      "El sueldo es mucho más alto de lo normal para ese trabajo.",
      "Te piden tu pasaporte, la clave de tu banco o tu número de identificación desde el principio.",
      "El correo o el sitio web es un poco distinto al de la empresa real.",
    ],
    doNow: [
      "Detente. No hagas clic en los enlaces ni respondas. Las organizaciones reales pueden esperar.",
      "Comunícate tú misma con la organización, con un número o un sitio web que encuentres por tu cuenta (no el del mensaje).",
      "Nunca pagues para conseguir un trabajo. Los empleadores reales te pagan a ti.",
      "Si ya compartiste información o pagaste, llama a tu banco de inmediato y haz la denuncia.",
      "Cuéntale a una amiga o a un familiar. Las estafas pierden fuerza cuando se habla de ellas.",
    ],
  },
  "voice-deepfakes": {
    title: "Estafas con clonación de voz y deepfakes",
    intro:
      "Con solo unos segundos de audio de las redes sociales, la IA puede copiar la voz de una persona. Los estafadores lo usan para hacerse pasar por un familiar en problemas o por una jefa que pide un pago urgente.",
    whatItIs: [
      "Clonación de voz: una llamada o un mensaje de voz que suena exactamente como alguien a quien quieres, diciendo que tiene una emergencia y necesita dinero.",
      "Video deepfake: una videollamada en la que la cara y la voz parecen reales, pero las genera la IA. Se ha usado para hacerse pasar por directivos de empresas.",
      "Videos falsos de celebridades o funcionarios que promueven inversiones, regalos o programas migratorios.",
    ],
    redFlags: [
      "Una llamada de emergencia de un ser querido que te pide enviar dinero rápido y en secreto.",
      "La persona no te deja devolver la llamada o te presiona para que no cuelgues.",
      "Una videollamada en la que la persona evita girar la cabeza o la imagen se ve un poco borrosa alrededor de la cara.",
      "Te piden que no les digas nada a otros familiares o compañeros de trabajo.",
    ],
    doNow: [
      "Cuelga y llama a la persona al número que ya tienes guardado.",
      "Crea una \"palabra de seguridad\" familiar: una palabra secreta que solo tu familia conozca, para comprobar que de verdad son ellos.",
      "Haz una pregunta que solo la persona real podría responder.",
      "En el trabajo, confirma cualquier pago inusual por otro medio (en persona o a un número conocido).",
      "Piensa en hacer privadas tus publicaciones con tu voz o tu imagen en redes sociales.",
    ],
  },
  "spot-ai-content": {
    title: "Cómo reconocer contenido hecho con IA",
    intro:
      "Cada vez más de lo que vemos en internet está hecho con IA: imágenes, videos, artículos, reseñas y publicaciones. Una parte es inofensiva; otra está hecha para engañar. Las herramientas de detección no son confiables, así que tu mejor herramienta es una sana desconfianza.",
    whatItIs: [
      "Imágenes y videos con IA: fotos realistas de cosas que nunca pasaron, fotos falsas de productos o imágenes editadas de personas reales.",
      "Textos con IA: artículos, reseñas, comentarios y hasta sitios web completos escritos por IA, a veces llenos de errores o afirmaciones falsas (lo que a menudo se llama \"AI slop\" o basura de IA).",
      "Desinformación: noticias falsas que se difunden rápido porque provocan emociones fuertes.",
    ],
    redFlags: [
      "Te hace sentir mucho enojo, miedo o emoción, y quieres compartirlo de inmediato.",
      "Imágenes con manos raras, textos que no se pueden leer, sombras extrañas o fondos que no tienen sentido.",
      "No hay un autor claro, una fecha ni una fuente original.",
      "Un texto que suena fluido pero dice muy poco, o que se repite.",
      "Solo un sitio o una cuenta lo publica, aunque sería una noticia importante.",
    ],
    doNow: [
      "Haz una pausa antes de compartir. Pregúntate: ¿quién hizo esto? ¿Cómo lo sabe? ¿Quién gana si me lo creo?",
      "Busca la noticia en medios confiables. Si es real, otros también la publicarán.",
      "Usa una búsqueda inversa de imágenes (como Google Lens o TinEye) para saber de dónde viene una imagen.",
      "Busca etiquetas de contenido. Algunas plataformas ya marcan el contenido hecho con IA.",
    ],
  },
  "data-privacy": {
    title: "Tus datos y tu privacidad",
    intro:
      "Cuando usas herramientas y aplicaciones de IA, tu información puede guardarse, usarse para entrenar a la IA o quedar expuesta en una filtración de datos. No puedes controlarlo todo, pero unos cuantos hábitos ayudan mucho.",
    whatItIs: [
      "Chats con IA: muchos chatbots guardan tus conversaciones, y algunos las usan para entrenar modelos futuros, a menos que desactives esta opción en la configuración.",
      "Filtraciones de datos: cuando hackean a una empresa, tu correo, tus contraseñas y tus datos personales pueden filtrarse y venderse.",
      "Corredores de datos: empresas que reúnen y venden tu información personal (dirección, teléfono, familiares) sin pedirte permiso.",
      "Documentos migratorios: las copias de pasaportes, visas y permisos son muy valiosas para quienes roban identidades.",
    ],
    redFlags: [
      "Una aplicación pide más permisos de los que necesita (contactos, ubicación, micrófono).",
      "Te llegan correos para cambiar tu contraseña que tú no pediste.",
      "Encuentras tu dirección o tu teléfono en sitios web de \"búsqueda de personas\".",
      "Alguien te pide que le mandes fotos de tu identificación por chat o por correo.",
    ],
    doNow: [
      "En las aplicaciones de chat con IA, entra a Configuración → Privacidad/Datos y desactiva \"usar mis chats para mejorar el modelo\" si lo prefieres.",
      "Nunca pegues contraseñas, números de identificación, datos bancarios ni información privada de otras personas en un chatbot.",
      "Revisa si tu correo apareció en una filtración (enlace abajo). Si es así, cambia esa contraseña.",
      "Usa una contraseña distinta para cada cuenta importante y activa la verificación en dos pasos.",
      "Comparte tus documentos de identidad solo por portales oficiales y seguros, nunca por correo o chat normal.",
      "Pide que te eliminen de los sitios de corredores de datos, o usa los derechos de privacidad de tu país para pedir a las empresas que borren tus datos.",
    ],
  },
  "ai-decisions": {
    title: "Cuando la IA toma decisiones sobre ti",
    intro:
      "Cada vez más empleadores, arrendadores y bancos usan IA para revisar solicitudes. Estos sistemas pueden ser injustos, por ejemplo con personas con títulos extranjeros, pausas en su carrera o nombres poco comunes en el país. En algunos lugares tienes derechos.",
    whatItIs: [
      "Revisión de currículums: programas que clasifican o rechazan solicitudes antes de que una persona las vea.",
      "Entrevistas en video que la IA califica según tus palabras, tu tono o tus expresiones.",
      "Decisiones automáticas para préstamos, alquileres o seguros.",
    ],
    redFlags: [
      "Te rechazan al instante, a cualquier hora, sin ninguna explicación.",
      "Una entrevista en video grabada, sin ninguna persona presente.",
      "Te rechazan una y otra vez en trabajos que coinciden muy bien con tu experiencia.",
    ],
    doNow: [
      "Pregúntale al empleador si usó IA o herramientas automáticas, y pide que una persona revise tu caso.",
      "Usa un formato de currículum claro y estándar, e incluye palabras clave de la oferta de trabajo.",
      "En la Unión Europea y el Reino Unido puedes pedir que una persona revise las decisiones importantes que solo tomó un sistema automático (artículo 22 del RGPD).",
      "En la ciudad de Nueva York, los empleadores que usan IA para contratar deben auditarla para detectar sesgos e informar a las personas candidatas.",
      "Si crees que sufriste discriminación, comunícate con el organismo local de derechos humanos o de igualdad en el empleo.",
    ],
  },
};

export const SAFETY_HI: Record<string, SafetyText> = {
  "ai-scams": {
    title: "AI से होने वाली धोखाधड़ी और नकली नौकरी के ऑफ़र",
    intro:
      "AI की मदद से धोखेबाज़ किसी भी भाषा में बिल्कुल सही और आपके हिसाब से बने संदेश लिख सकते हैं। पहले जिन स्पेलिंग की गलतियों से वे पकड़े जाते थे, वे अब नहीं होतीं। नौकरी ढूँढ रहे नए लोग उनका मुख्य निशाना होते हैं।",
    whatItIs: [
      "फ़िशिंग: टेक्स्ट, ईमेल या चैट संदेश जो बैंक, सरकारी दफ़्तर, डिलीवरी कंपनी या नियोक्ता होने का दिखावा करके आपके पैसे या जानकारी लेने की कोशिश करते हैं।",
      "नकली नौकरी के ऑफ़र: \"रिक्रूटर\" जो आसान और बहुत ज़्यादा पैसे वाला घर से काम ऑफ़र करते हैं, फिर ट्रेनिंग या सामान के लिए पैसे माँगते हैं, या आपसे अपने लिए पैसे ट्रांसफ़र करवाते हैं।",
      "इमिग्रेशन धोखाधड़ी: नकली \"एजेंट\" या अधिकारी जो आपके वीज़ा को लेकर डराते हैं या पैसे लेकर पक्का परमिट दिलाने का वादा करते हैं।",
    ],
    redFlags: [
      "आपको अभी के अभी कुछ करना है, वरना कुछ बुरा होगा।",
      "नौकरी, ट्रेनिंग या वीज़ा के लिए आपसे पैसे माँगे जाते हैं।",
      "गिफ़्ट कार्ड, क्रिप्टो, वायर ट्रांसफ़र या पेमेंट ऐप से भुगतान की माँग।",
      "बिना असली इंटरव्यू के नौकरी का ऑफ़र, या इंटरव्यू सिर्फ़ टेक्स्ट चैट पर।",
      "उस काम के लिए सैलरी सामान्य से बहुत ज़्यादा है।",
      "शुरुआत में ही आपका पासपोर्ट, बैंक लॉगिन या ID नंबर माँगा जाता है।",
      "ईमेल पता या वेबसाइट असली कंपनी से थोड़ी अलग है।",
    ],
    doNow: [
      "रुकें। लिंक पर क्लिक न करें और जवाब न दें। असली संस्थाएँ इंतज़ार कर सकती हैं।",
      "संस्था से खुद संपर्क करें, ऐसे फ़ोन नंबर या वेबसाइट से जो आपने खुद ढूँढी हो (संदेश में दिया गया नहीं)।",
      "नौकरी पाने के लिए कभी पैसे न दें। असली नियोक्ता आपको पैसे देते हैं।",
      "अगर आपने पहले ही जानकारी दे दी है या पैसे भेज दिए हैं, तो तुरंत अपने बैंक से संपर्क करें और शिकायत दर्ज करें।",
      "किसी दोस्त या परिवार वाले को बताएँ। जब लोग धोखाधड़ी के बारे में बात करते हैं, तो उसकी ताकत कम हो जाती है।",
    ],
  },
  "voice-deepfakes": {
    title: "आवाज़ की नकल (वॉइस क्लोन) और डीपफेक धोखाधड़ी",
    intro:
      "सोशल मीडिया से कुछ ही सेकंड की ऑडियो लेकर AI किसी की आवाज़ की नकल कर सकता है। धोखेबाज़ इसका इस्तेमाल मुसीबत में फँसे परिवार वाले या तुरंत पेमेंट माँगने वाले बॉस होने का दिखावा करने के लिए करते हैं।",
    whatItIs: [
      "आवाज़ की नकल: एक फ़ोन कॉल या वॉइस मैसेज जो बिल्कुल आपके किसी अपने जैसा लगता है, और कहता है कि वे मुसीबत में हैं और उन्हें पैसे चाहिए।",
      "डीपफेक वीडियो: एक वीडियो कॉल जिसमें चेहरा और आवाज़ असली लगते हैं, लेकिन AI से बनाए गए होते हैं। कंपनियों के बड़े अधिकारियों का रूप धरने के लिए इसका इस्तेमाल हुआ है।",
      "मशहूर लोगों या अधिकारियों के नकली वीडियो, जो निवेश, इनाम या इमिग्रेशन प्रोग्राम का प्रचार करते हैं।",
    ],
    redFlags: [
      "किसी अपने का इमरजेंसी कॉल, जो जल्दी और चुपचाप पैसे भेजने को कहता है।",
      "कॉल करने वाला आपको वापस कॉल नहीं करने देता, या लाइन पर बने रहने का दबाव डालता है।",
      "वीडियो कॉल में व्यक्ति सिर घुमाने से बचता है, या चेहरे के आसपास तस्वीर थोड़ी धुँधली दिखती है।",
      "दूसरे परिवार वालों या सहकर्मियों से बात छिपाने को कहा जाता है।",
    ],
    doNow: [
      "फ़ोन काटें और उस व्यक्ति को उस नंबर पर कॉल करें जो आपके पास पहले से है।",
      "परिवार का एक \"सेफ़ वर्ड\" बनाएँ: एक गुप्त शब्द जो सिर्फ़ आपका परिवार जानता हो, ताकि पक्का हो सके कि वही बात कर रहे हैं।",
      "ऐसा सवाल पूछें जिसका जवाब सिर्फ़ असली व्यक्ति ही दे सकता हो।",
      "काम पर, किसी भी असामान्य पेमेंट की माँग को किसी दूसरे तरीके से पक्का करें (आमने-सामने, या किसी जाने-पहचाने नंबर पर)।",
      "सोशल मीडिया पर अपनी आवाज़ और वीडियो वाली पोस्ट को प्राइवेट करने के बारे में सोचें।",
    ],
  },
  "spot-ai-content": {
    title: "AI से बनी सामग्री को पहचानना",
    intro:
      "ऑनलाइन हम जो देखते हैं, उसका बढ़ता हिस्सा AI से बना होता है: तस्वीरें, वीडियो, लेख, रिव्यू और सोशल मीडिया पोस्ट। इनमें से कुछ नुकसान नहीं करते, कुछ गुमराह करने के लिए बनाए जाते हैं। पहचानने वाले टूल भरोसेमंद नहीं हैं, इसलिए आपका सबसे अच्छा औज़ार है समझदारी भरा शक।",
    whatItIs: [
      "AI तस्वीरें और वीडियो: ऐसी घटनाओं की असली जैसी तस्वीरें जो कभी हुई ही नहीं, नकली प्रोडक्ट फ़ोटो, या असली लोगों की बदली हुई तस्वीरें।",
      "AI से लिखा टेक्स्ट: लेख, रिव्यू, कमेंट, और पूरी की पूरी वेबसाइटें जो AI ने लिखी हैं, कभी-कभी गलतियों या झूठे दावों से भरी (इसे अक्सर \"AI स्लॉप\" कहा जाता है)।",
      "गलत जानकारी: झूठी खबरें जो तेज़ी से फैलती हैं क्योंकि वे तेज़ भावनाएँ जगाती हैं।",
    ],
    redFlags: [
      "इसे देखकर आपको बहुत गुस्सा, डर या उत्साह आता है, और आप इसे तुरंत शेयर करना चाहती हैं।",
      "तस्वीरों में अजीब हाथ, न पढ़ा जा सकने वाला टेक्स्ट, अजीब परछाइयाँ, या बेतुका बैकग्राउंड।",
      "कोई साफ़ लेखक, तारीख या असली स्रोत नहीं।",
      "ऐसा लेख जो सुनने में अच्छा लगता है पर कहता बहुत कम है, या बार-बार एक ही बात दोहराता है।",
      "कोई बड़ी खबर सिर्फ़ एक ही वेबसाइट या अकाउंट बता रहा है।",
    ],
    doNow: [
      "शेयर करने से पहले रुकें। पूछें: इसे किसने बनाया? उन्हें कैसे पता? अगर मैं इस पर यकीन करूँ, तो फ़ायदा किसका है?",
      "भरोसेमंद समाचार स्रोतों पर खबर खोजें। अगर यह सच है, तो दूसरे भी इसकी खबर देंगे।",
      "किसी तस्वीर का स्रोत जानने के लिए रिवर्स इमेज सर्च (जैसे Google Lens या TinEye) का इस्तेमाल करें।",
      "कंटेंट लेबल देखें। कुछ प्लेटफ़ॉर्म अब AI से बनी सामग्री पर निशान लगाते हैं।",
    ],
  },
  "data-privacy": {
    title: "आपका डेटा और आपकी निजता",
    intro:
      "जब आप AI टूल और ऐप इस्तेमाल करती हैं, तो आपकी जानकारी सेव हो सकती है, AI को ट्रेन करने में इस्तेमाल हो सकती है, या डेटा लीक में सामने आ सकती है। आप सब कुछ नियंत्रित नहीं कर सकतीं, लेकिन कुछ आदतें बहुत काम आती हैं।",
    whatItIs: [
      "AI चैट: कई चैटबॉट आपकी बातचीत सेव करते हैं, और कुछ उन्हें भविष्य के मॉडल ट्रेन करने में इस्तेमाल करते हैं, जब तक आप सेटिंग में इसे बंद न करें।",
      "डेटा लीक: जब किसी कंपनी को हैक किया जाता है, तो आपका ईमेल, पासवर्ड और निजी जानकारी लीक होकर बेची जा सकती है।",
      "डेटा ब्रोकर: ऐसी कंपनियाँ जो बिना पूछे आपकी निजी जानकारी (पता, फ़ोन, रिश्तेदार) इकट्ठा करके बेचती हैं।",
      "इमिग्रेशन दस्तावेज़: पासपोर्ट, वीज़ा और परमिट की कॉपियाँ पहचान चुराने वालों के लिए बहुत कीमती होती हैं।",
    ],
    redFlags: [
      "कोई ऐप ज़रूरत से ज़्यादा अनुमतियाँ माँगता है (कॉन्टैक्ट, लोकेशन, माइक्रोफ़ोन)।",
      "आपको पासवर्ड बदलने वाले ऐसे ईमेल आते हैं जो आपने नहीं माँगे।",
      "आपको अपना पता या फ़ोन नंबर \"लोगों को खोजने वाली\" वेबसाइटों पर दिखता है।",
      "कोई आपसे चैट या ईमेल पर अपनी ID की फ़ोटो भेजने को कहता है।",
    ],
    doNow: [
      "AI चैट ऐप में सेटिंग → प्राइवेसी/डेटा में जाकर, अगर आप चाहें, तो \"मेरी चैट से मॉडल बेहतर बनाएँ\" बंद कर दें।",
      "किसी चैटबॉट में कभी भी पासवर्ड, ID नंबर, बैंक की जानकारी, या दूसरों की निजी जानकारी पेस्ट न करें।",
      "जाँचें कि आपका ईमेल किसी डेटा लीक में आया है या नहीं (नीचे लिंक है)। अगर हाँ, तो वह पासवर्ड बदल दें।",
      "हर ज़रूरी अकाउंट के लिए अलग पासवर्ड रखें, और टू-स्टेप वेरिफ़िकेशन चालू करें।",
      "ID दस्तावेज़ सिर्फ़ आधिकारिक और सुरक्षित पोर्टल से शेयर करें, कभी भी आम ईमेल या चैट से नहीं।",
      "डेटा ब्रोकर साइटों से अपनी जानकारी हटाने की माँग करें, या अपने देश के निजता अधिकारों का इस्तेमाल करके कंपनियों से अपना डेटा मिटाने को कहें।",
    ],
  },
  "ai-decisions": {
    title: "जब AI आपके बारे में फ़ैसले लेता है",
    intro:
      "नियोक्ता, मकान मालिक और बैंक आवेदनों को छाँटने के लिए ज़्यादा से ज़्यादा AI का इस्तेमाल कर रहे हैं। ये सिस्टम अन्याय कर सकते हैं, जैसे विदेशी डिग्री, करियर में ब्रेक, या स्थानीय न लगने वाले नाम वाले लोगों के साथ। कुछ जगहों पर आपके अधिकार हैं।",
    whatItIs: [
      "रिज़्यूमे छँटाई: ऐसा सॉफ़्टवेयर जो किसी इंसान के देखने से पहले ही आवेदनों को रैंक या रिजेक्ट कर देता है।",
      "वीडियो इंटरव्यू जिन्हें AI आपके शब्दों, लहजे या चेहरे के भावों के आधार पर नंबर देता है।",
      "लोन, किराए के घर या बीमा के लिए अपने-आप लिए गए फ़ैसले।",
    ],
    redFlags: [
      "आपको किसी भी समय, तुरंत, बिना किसी वजह के रिजेक्ट कर दिया जाता है।",
      "एकतरफ़ा वीडियो इंटरव्यू जिसमें कोई इंसान मौजूद नहीं होता।",
      "आपके अनुभव से अच्छी तरह मेल खाने वाली नौकरियों में बार-बार रिजेक्शन।",
    ],
    doNow: [
      "नियोक्ता से पूछें कि क्या AI या ऑटोमेटेड टूल का इस्तेमाल हुआ था, और किसी इंसान से दोबारा जाँच की माँग करें।",
      "साफ़ और सामान्य रिज़्यूमे फ़ॉर्मैट इस्तेमाल करें, और नौकरी के विज्ञापन के कीवर्ड शामिल करें।",
      "यूरोपीय संघ और यूनाइटेड किंगडम में, आप सिर्फ़ ऑटोमेटेड सिस्टम से लिए गए ज़रूरी फ़ैसलों की इंसान से जाँच की माँग कर सकती हैं (GDPR आर्टिकल 22)।",
      "न्यूयॉर्क सिटी में, AI से भर्ती करने वाले नियोक्ताओं को उसमें भेदभाव की जाँच (ऑडिट) करवानी होती है और उम्मीदवारों को बताना होता है।",
      "अगर आपको लगता है कि आपके साथ भेदभाव हुआ है, तो अपनी स्थानीय मानवाधिकार या रोज़गार समानता संस्था से संपर्क करें।",
    ],
  },
};
