// Spanish and Hindi lesson text. Translated with AI; not yet reviewed by native speakers.
// Keys match lesson ids in lessons.ts. `{job}` is replaced with the learner's profession.
import type { Lesson } from "./lessons";

export type LessonText = Pick<Lesson, "title" | "summary" | "explain" | "example" | "tryIt" | "watchOut">;

export const LESSONS_ES: Record<string, LessonText> = {
  "what-is-ai": {
    title: "Qué es la IA (y qué no es)",
    summary: "Cómo funcionan los chatbots, para qué sirven y por qué a veces se equivocan.",
    explain: [
      "Los chatbots de IA como ChatGPT, Claude y Gemini aprendieron leyendo muchísimo texto. Predicen qué palabras deben venir después, y eso les permite escribir, explicar, traducir y resumir.",
      "No \"saben\" las cosas como una persona. Pueden sonar muy seguros y aun así estar equivocados. A eso se le llama una \"alucinación\".",
      "Piensa en la IA como una asistente rápida y útil que necesita una jefa: tú. Tú le das instrucciones claras y revisas su trabajo antes de usarlo.",
    ],
    example: {
      label: "Pídele que explique algo de tu campo",
      prompt: "Explica qué hace una persona que trabaja como {job} en 3 oraciones sencillas, como si se lo explicaras a un niño de 12 años.",
    },
    tryIt: "Pregúntale algo sobre tu profesión que tú ya conozcas bien. Revisa: ¿se equivocó en algo o dejó algo fuera?",
    watchOut: [
      "La IA puede equivocarse con mucha seguridad. Verifica los datos importantes en una fuente oficial.",
      "La IA no conoce los eventos muy recientes, a menos que pueda buscar en internet.",
      "No compartas contraseñas, números de identificación ni datos bancarios con ningún chatbot.",
    ],
  },
  "good-prompts": {
    title: "Cómo escribir una buena instrucción (prompt)",
    summary: "Una fórmula sencilla para obtener respuestas mucho mejores: rol, tarea, contexto, formato.",
    explain: [
      "Un \"prompt\" es simplemente el mensaje que le escribes a la IA. Mejores instrucciones dan mejores resultados.",
      "Prueba la fórmula RTCF. Rol: ¿qué papel debe tomar la IA? Tarea: ¿qué quieres? Contexto: ¿qué necesita saber sobre ti? Formato: ¿cómo debe verse la respuesta?",
      "Si la primera respuesta no es la correcta, sigue la conversación: \"Hazlo más corto\", \"Usa palabras más sencillas\", \"Dame 3 opciones\". No necesitas empezar de cero.",
    ],
    example: {
      label: "Una instrucción débil vs. una instrucción fuerte",
      prompt:
        "Débil: \"Ayuda con trabajo.\"\nFuerte: \"Actúa como orientadora de carrera. Soy {job} y me mudé hace poco a otro país. Dame 5 puestos de trabajo que podría buscar, en una lista con una oración para cada uno.\"",
    },
    tryIt: "Primero escribe una instrucción vaga y luego reescríbela usando Rol, Tarea, Contexto y Formato. Compara las dos respuestas.",
    watchOut: [
      "Da contexto sobre tus habilidades, pero no incluyas datos privados como tu dirección o tus números de identificación.",
      "Las instrucciones largas y detalladas están bien. No vas a \"romper\" la IA por pedir las cosas con claridad.",
    ],
  },
  "resume-rewrite": {
    title: "Adaptar tu currículum a un nuevo país o campo",
    summary: "Usa la IA para explicar tu experiencia con las palabras que buscan los empleadores de tu nuevo país.",
    explain: [
      "El estilo del currículum cambia de un país a otro. En algunos se espera una foto y la fecha de nacimiento; en otros, no. Los nombres de los puestos también cambian: tu experiencia puede llamarse de otra forma donde vives ahora.",
      "La IA puede ayudarte a reescribir tus logros, usar las palabras clave de una oferta de trabajo y explicar tu experiencia en el extranjero con términos locales.",
      "Tú sigues siendo la autora. La IA debe hacer más clara tu experiencia real, no inventar habilidades que no tienes.",
    ],
    example: {
      label: "Traduce tu experiencia",
      prompt:
        "Trabajé como {job} durante 6 años en mi país de origen. Reescribe esta línea de mi currículum para Canadá, con verbos de acción fuertes: \"Responsable de muchas tareas en la oficina y de ayudar al gerente.\"",
    },
    tryIt: "Pega una línea de tu currículum (sin tu nombre ni tus datos de contacto) y pídele a la IA que la haga más clara y específica.",
    watchOut: [
      "Quita tu nombre, teléfono, correo y dirección antes de pegar tu currículum en cualquier herramienta de IA.",
      "Nunca dejes que la IA agregue experiencia o títulos que no tienes. Los empleadores lo verifican.",
      "Algunos empleadores también usan IA para revisar currículums. Un formato claro y sencillo ayuda.",
    ],
  },
  "interview-practice": {
    title: "Practicar una entrevista de trabajo con IA",
    summary: "Simula una entrevista, recibe comentarios y gana confianza antes de la entrevista real.",
    explain: [
      "La IA puede hacer el papel de entrevistador. Puede hacerte preguntas comunes, preguntas de seguimiento y preguntas específicas de tu campo.",
      "Después de responder, pide comentarios: ¿Fue clara mi respuesta? ¿Di un ejemplo? ¿Cómo podría mejorarla?",
      "Practicar en voz alta y luego escribir tu respuesta es una excelente forma de prepararte, sobre todo en un segundo idioma.",
    ],
    example: {
      label: "Empieza una entrevista de práctica",
      prompt:
        "Actúa como gerente de contratación y entrevístame para un puesto de {job}. Hazme una pregunta a la vez. Después de cada respuesta, dame un comentario breve y luego hazme la siguiente pregunta.",
    },
    tryIt: "Empieza una entrevista de práctica y responde al menos dos preguntas. Pide comentarios usando el método STAR (Situación, Tarea, Acción, Resultado).",
    watchOut: [
      "Los comentarios de la IA son generales. Una mentora o una orientadora de carrera de tu campo puede aportar conocimiento local.",
      "En muchos países es ilegal que en una entrevista te pregunten por tu religión, un embarazo o tu estado civil. Conocer tus derechos te ayuda.",
    ],
  },
  "translate-documents": {
    title: "Entender documentos de trabajo y oficiales",
    summary: "Usa la IA para traducir y simplificar cartas, contratos y formularios, y aprende cuándo no usarla.",
    explain: [
      "La IA es muy buena para traducir y simplificar. Puedes pedirle: \"Explica este párrafo con palabras sencillas\" o \"Tradúcelo al español y dime si tengo que hacer algo\".",
      "Para documentos importantes (contratos, formularios de migración, cartas legales), usa la IA para entender, no para decidir. Confirma siempre con una fuente oficial o con una profesional.",
      "Quita tus datos personales antes de pegar cualquier texto. Puedes reemplazar nombres y números con [NOMBRE] o [NÚMERO].",
    ],
    example: {
      label: "Simplifica un párrafo confuso",
      prompt:
        "Explica este párrafo de mi oferta de trabajo con palabras sencillas y dime qué preguntas debería hacer antes de firmar: \"La empleada estará sujeta a un periodo de prueba de noventa (90) días, durante el cual la relación laboral podrá terminarse sin previo aviso.\"",
    },
    tryIt: "Pega un párrafo confuso (sin datos personales) y pídele a la IA que lo explique de forma sencilla y que haga una lista de lo que debes hacer.",
    watchOut: [
      "Nunca pegues números de pasaporte, visa o identificación en un chatbot.",
      "Las traducciones de la IA pueden perder el sentido legal. Para documentos legales o migratorios, usa traductores certificados y asesoría oficial.",
    ],
  },
  credentials: {
    title: "Investigar el reconocimiento de tus títulos",
    summary: "Usa la IA para entender cómo lograr que reconozcan tu título o licencia y luego verifícalo en fuentes oficiales.",
    explain: [
      "Muchas profesiones (enfermería, ingeniería, docencia, contabilidad) exigen que tus títulos extranjeros sean evaluados o que vuelvas a obtener la licencia en tu nuevo país.",
      "La IA puede explicarte los pasos generales, ayudarte a escribir preguntas para el organismo que otorga las licencias y armar una lista de pasos. Pero las reglas cambian seguido y varían según el estado o la provincia.",
      "Usa la IA para orientarte y luego entra al sitio web oficial del organismo regulador para ver los requisitos y costos reales.",
    ],
    example: {
      label: "Obtén una lista inicial",
      prompt:
        "Me formé como {job} en el extranjero. ¿Cuáles son los pasos generales para que reconozcan mis títulos en el Reino Unido? ¿Con qué organismos oficiales debería comunicarme? Dámelo en forma de lista de verificación.",
    },
    tryIt: "Pregunta sobre el reconocimiento de títulos para tu profesión y tu país. Luego pregunta: \"¿Qué sitios web oficiales debería revisar para confirmarlo?\"",
    watchOut: [
      "Los requisitos cambian. Confirma siempre con el organismo regulador oficial.",
      "Ten cuidado con sitios web o \"agentes\" que prometen licencias garantizadas a cambio de dinero. Es una estafa común contra las personas recién llegadas.",
    ],
  },
  "professional-writing": {
    title: "Escribir correos y cartas de presentación profesionales",
    summary: "Recibe ayuda con el tono, la gramática y la estructura, para que tu mensaje suene como tú, pero pulido.",
    explain: [
      "Escribir en un segundo idioma puede tomar mucho tiempo. La IA puede ayudarte a corregir la gramática, ajustar el tono (más formal, más amable) y organizar tus ideas.",
      "Empieza con tu propio borrador, aunque esté desordenado o en tu idioma materno. Luego pídele a la IA que lo mejore. Así tu mensaje sigue siendo personal.",
      "Lee el resultado con atención. Asegúrate de que diga lo que quieres decir y de que suene como tú.",
    ],
    example: {
      label: "Pule un borrador rápido",
      prompt: "Haz este correo más profesional pero que siga siendo cálido: \"hola, vi el trabajo de {job}, tengo mucha experiencia, ¿podemos hablar? gracias\"",
    },
    tryIt: "Escribe el inicio de un correo o una carta de presentación, aunque sea un borrador. Pídele a la IA que lo haga profesional y luego que te explique los cambios para que aprendas.",
    watchOut: [
      "Los empleadores a menudo notan cuando una carta de presentación es genérica. Agrega tu historia real y detalles específicos.",
      "Pídele a la IA que te explique sus cambios. Es una forma gratuita de mejorar tu escritura con el tiempo.",
    ],
  },
  "fact-checking": {
    title: "Verificar las respuestas de la IA",
    summary: "Detecta las alucinaciones y revisa las respuestas de la IA antes de confiar en ellas.",
    explain: [
      "La IA puede inventar datos, estadísticas, enlaces, leyes o incluso citas. Pueden parecer completamente reales.",
      "Tres revisiones rápidas: pregúntale a la IA \"¿Qué tan segura estás y cuáles son tus fuentes?\". Busca tú misma el dato clave. Prefiere sitios oficiales (gobierno, organismos reguladores, tu empleador).",
      "Mientras más importante sea la decisión (dinero, salud, situación migratoria, un trabajo), con más cuidado debes verificar.",
    ],
    example: {
      label: "Pídele a la IA que muestre su nivel de certeza",
      prompt: "¿Cuál es el salario promedio de una persona que trabaja como {job} en Toronto? Dime qué tan segura estás y qué debería revisar para confirmarlo.",
    },
    tryIt: "Hazle a la IA una pregunta sobre trabajos o reglas en tu país. Luego pregúntale qué tan segura está y dónde podrías verificar la respuesta.",
    watchOut: [
      "Los enlaces que te da la IA pueden no existir. Busca la organización por tu cuenta.",
      "Los números (salarios, costos, fechas límite) son lo que la IA más suele equivocar.",
    ],
  },
};

export const LESSONS_HI: Record<string, LessonText> = {
  "what-is-ai": {
    title: "AI क्या है (और क्या नहीं)",
    summary: "चैटबॉट कैसे काम करते हैं, वे किसमें अच्छे हैं, और कभी-कभी गलत क्यों हो जाते हैं।",
    explain: [
      "ChatGPT, Claude और Gemini जैसे AI चैटबॉट ने बहुत सारा लिखा हुआ पढ़कर सीखा है। वे अंदाज़ा लगाते हैं कि आगे कौन-से शब्द आने चाहिए, और इसी से वे लिख, समझा, अनुवाद और सारांश बना पाते हैं।",
      "वे किसी इंसान की तरह चीज़ें \"जानते\" नहीं हैं। वे बहुत भरोसे के साथ बोल सकते हैं और फिर भी गलत हो सकते हैं। इसे \"हैलूसिनेशन\" कहते हैं।",
      "AI को एक तेज़ और मददगार सहायक समझें, जिसे एक मैनेजर की ज़रूरत है: यानी आप। आप उसे साफ़ निर्देश देती हैं, और इस्तेमाल करने से पहले उसका काम जाँचती हैं।",
    ],
    example: {
      label: "अपने क्षेत्र की कोई बात समझाने को कहें",
      prompt: "एक {job} क्या काम करती है, यह 3 आसान वाक्यों में समझाओ, जैसे किसी 12 साल के बच्चे को समझा रहे हो।",
    },
    tryIt: "AI से अपने पेशे के बारे में कुछ ऐसा पूछें जो आप पहले से अच्छी तरह जानती हैं। जाँचें: क्या उसने कुछ गलत बताया या कुछ छोड़ दिया?",
    watchOut: [
      "AI पूरे भरोसे के साथ गलत हो सकता है। ज़रूरी जानकारी किसी आधिकारिक स्रोत से जाँचें।",
      "AI को हाल की घटनाओं के बारे में पता नहीं होता, जब तक वह इंटरनेट पर खोज न कर सके।",
      "किसी भी चैटबॉट के साथ पासवर्ड, ID नंबर या बैंक की जानकारी शेयर न करें।",
    ],
  },
  "good-prompts": {
    title: "अच्छा प्रॉम्प्ट कैसे लिखें",
    summary: "बहुत बेहतर जवाब पाने का एक आसान फ़ॉर्मूला: भूमिका, काम, संदर्भ, रूप।",
    explain: [
      "\"प्रॉम्प्ट\" बस वह संदेश है जो आप AI को लिखती हैं। बेहतर निर्देश, बेहतर नतीजे।",
      "यह फ़ॉर्मूला आज़माएँ। भूमिका: AI किसकी तरह काम करे? काम: आपको क्या चाहिए? संदर्भ: उसे आपके बारे में क्या जानना ज़रूरी है? रूप: जवाब कैसा दिखना चाहिए?",
      "अगर पहला जवाब ठीक न हो, तो बातचीत जारी रखें: \"इसे छोटा करो\", \"आसान शब्दों में लिखो\", \"मुझे 3 विकल्प दो\"। फिर से शुरू करने की ज़रूरत नहीं है।",
    ],
    example: {
      label: "कमज़ोर प्रॉम्प्ट बनाम मज़बूत प्रॉम्प्ट",
      prompt:
        "कमज़ोर: \"नौकरी में मदद करो।\"\nमज़बूत: \"एक करियर कोच की तरह काम करो। मैं एक {job} हूँ और हाल ही में नए देश में आई हूँ। मुझे 5 नौकरी के पद बताओ जिन्हें मैं खोज सकती हूँ, हर एक के साथ एक वाक्य, सूची के रूप में।\"",
    },
    tryIt: "पहले एक अस्पष्ट प्रॉम्प्ट लिखें, फिर उसे भूमिका, काम, संदर्भ और रूप के साथ दोबारा लिखें। दोनों जवाबों की तुलना करें।",
    watchOut: [
      "अपने कौशल के बारे में संदर्भ दें, लेकिन अपना पता या ID नंबर जैसी निजी जानकारी न दें।",
      "लंबे और विस्तार वाले प्रॉम्प्ट ठीक हैं। साफ़-साफ़ पूछने से AI \"खराब\" नहीं होता।",
    ],
  },
  "resume-rewrite": {
    title: "नए देश या क्षेत्र के लिए रिज़्यूमे दोबारा लिखना",
    summary: "AI की मदद से अपने अनुभव को उन शब्दों में बताएँ जो आपके नए देश के नियोक्ता ढूँढते हैं।",
    explain: [
      "हर देश में रिज़्यूमे का तरीका अलग होता है। कहीं फ़ोटो और जन्मतिथि की उम्मीद होती है, कहीं नहीं। नौकरी के पदों के नाम भी अलग होते हैं: जहाँ आप अब रहती हैं, वहाँ आपके अनुभव को किसी और नाम से जाना जा सकता है।",
      "AI आपकी उपलब्धियों को दोबारा लिखने, नौकरी के विज्ञापन के कीवर्ड से मिलाने, और विदेश के अनुभव को स्थानीय शब्दों में समझाने में मदद कर सकता है।",
      "लेखक आप ही हैं। AI को आपके असली अनुभव को साफ़ बनाना चाहिए, ऐसे कौशल नहीं गढ़ने चाहिए जो आपके पास नहीं हैं।",
    ],
    example: {
      label: "अपने अनुभव को नए शब्द दें",
      prompt:
        "मैंने अपने देश में 6 साल तक {job} के रूप में काम किया। कनाडा के रिज़्यूमे के लिए इस लाइन को मज़बूत एक्शन वर्ब्स के साथ दोबारा लिखो: \"ऑफ़िस के कई कामों और मैनेजर की मदद की ज़िम्मेदारी।\"",
    },
    tryIt: "अपने रिज़्यूमे की एक लाइन (अपने नाम या संपर्क जानकारी के बिना) पेस्ट करें और AI से उसे ज़्यादा साफ़ और सटीक बनाने को कहें।",
    watchOut: [
      "किसी भी AI टूल में रिज़्यूमे पेस्ट करने से पहले अपना नाम, फ़ोन, ईमेल और पता हटा दें।",
      "AI को कभी ऐसा अनुभव या डिग्री न जोड़ने दें जो आपके पास नहीं है। नियोक्ता इसकी जाँच करते हैं।",
      "कुछ नियोक्ता भी रिज़्यूमे छाँटने के लिए AI का इस्तेमाल करते हैं। साफ़ और सरल फ़ॉर्मैट मदद करता है।",
    ],
  },
  "interview-practice": {
    title: "AI के साथ नौकरी के इंटरव्यू का अभ्यास",
    summary: "इंटरव्यू का अभ्यास करें, सुझाव पाएँ, और असली इंटरव्यू से पहले आत्मविश्वास बढ़ाएँ।",
    explain: [
      "AI इंटरव्यू लेने वाले की भूमिका निभा सकता है। वह आम सवाल, आगे के सवाल, और आपके क्षेत्र से जुड़े खास सवाल पूछ सकता है।",
      "जवाब देने के बाद सुझाव माँगें: क्या मेरा जवाब साफ़ था? क्या मैंने कोई उदाहरण दिया? इसे और मज़बूत कैसे बनाऊँ?",
      "पहले ज़ोर से बोलकर अभ्यास करना और फिर जवाब लिखना तैयारी का बढ़िया तरीका है, खासकर दूसरी भाषा में।",
    ],
    example: {
      label: "अभ्यास इंटरव्यू शुरू करें",
      prompt:
        "एक हायरिंग मैनेजर की तरह {job} के पद के लिए मेरा इंटरव्यू लो। एक बार में एक सवाल पूछो। मेरे हर जवाब के बाद छोटा-सा सुझाव दो, फिर अगला सवाल पूछो।",
    },
    tryIt: "अभ्यास इंटरव्यू शुरू करें और कम से कम दो सवालों के जवाब दें। STAR तरीके (स्थिति, काम, कदम, नतीजा) से सुझाव माँगें।",
    watchOut: [
      "AI के सुझाव सामान्य होते हैं। आपके क्षेत्र की कोई मेंटर या करियर सलाहकार स्थानीय जानकारी जोड़ सकती है।",
      "कई देशों में इंटरव्यू में धर्म, गर्भावस्था या शादी के बारे में पूछना गैरकानूनी है। अपने अधिकार जानना मदद करता है।",
    ],
  },
  "translate-documents": {
    title: "काम और सरकारी दस्तावेज़ समझना",
    summary: "AI से पत्र, कॉन्ट्रैक्ट और फ़ॉर्म का अनुवाद करवाएँ और उन्हें आसान बनवाएँ, और जानें कब ऐसा नहीं करना चाहिए।",
    explain: [
      "AI अनुवाद करने और बातों को आसान बनाने में बहुत अच्छा है। आप कह सकती हैं: \"इस पैराग्राफ़ को आसान शब्दों में समझाओ\" या \"इसका हिंदी में अनुवाद करो और बताओ मुझे क्या करना है।\"",
      "ज़रूरी दस्तावेज़ों (कॉन्ट्रैक्ट, इमिग्रेशन फ़ॉर्म, कानूनी पत्र) के लिए AI का इस्तेमाल समझने के लिए करें, फ़ैसला लेने के लिए नहीं। हमेशा किसी आधिकारिक स्रोत या विशेषज्ञ से पक्का करें।",
      "कुछ भी पेस्ट करने से पहले अपनी निजी जानकारी हटा दें। नाम और नंबर की जगह [NAME] या [NUMBER] लिख सकती हैं।",
    ],
    example: {
      label: "उलझे हुए पैराग्राफ़ को आसान बनाएँ",
      prompt:
        "मेरे जॉब ऑफ़र के इस पैराग्राफ़ को आसान भाषा में समझाओ, और बताओ कि साइन करने से पहले मुझे कौन-से सवाल पूछने चाहिए: \"कर्मचारी नब्बे (90) दिनों की परिवीक्षा अवधि (प्रोबेशन) में रहेगी, जिसके दौरान बिना नोटिस के नौकरी समाप्त की जा सकती है।\"",
    },
    tryIt: "कोई उलझा हुआ पैराग्राफ़ (निजी जानकारी हटाकर) पेस्ट करें और AI से उसे आसान भाषा में समझाने और आपके करने वाले कामों की सूची बनाने को कहें।",
    watchOut: [
      "किसी चैटबॉट में कभी भी पासपोर्ट, वीज़ा या ID नंबर पेस्ट न करें।",
      "AI के अनुवाद में कानूनी मतलब छूट सकता है। इमिग्रेशन या कानूनी कागज़ों के लिए प्रमाणित अनुवादक और आधिकारिक सलाह लें।",
    ],
  },
  credentials: {
    title: "अपनी योग्यता की मान्यता के बारे में जानकारी जुटाना",
    summary: "AI से समझें कि अपनी डिग्री या लाइसेंस को मान्यता कैसे दिलाएँ, फिर आधिकारिक स्रोतों से पक्का करें।",
    explain: [
      "कई पेशों (नर्सिंग, इंजीनियरिंग, पढ़ाना, अकाउंटिंग) में नए देश में आपकी विदेशी डिग्री का मूल्यांकन या दोबारा लाइसेंस लेना ज़रूरी होता है।",
      "AI सामान्य कदम समझा सकता है, लाइसेंस देने वाली संस्था के लिए सवाल लिखने में मदद कर सकता है, और एक चेकलिस्ट बना सकता है। लेकिन नियम अक्सर बदलते हैं और राज्य या प्रांत के हिसाब से अलग होते हैं।",
      "शुरुआती समझ के लिए AI का इस्तेमाल करें, फिर असली शर्तों और फ़ीस के लिए आधिकारिक नियामक संस्था की वेबसाइट देखें।",
    ],
    example: {
      label: "शुरुआती चेकलिस्ट पाएँ",
      prompt:
        "मैंने विदेश में {job} की ट्रेनिंग ली है। यूनाइटेड किंगडम में अपनी योग्यता को मान्यता दिलाने के सामान्य कदम क्या हैं? मुझे किन आधिकारिक संस्थाओं से संपर्क करना चाहिए? चेकलिस्ट के रूप में बताओ।",
    },
    tryIt: "अपने पेशे और देश के लिए योग्यता की मान्यता के बारे में पूछें। फिर पूछें: \"इसे पक्का करने के लिए मुझे कौन-सी आधिकारिक वेबसाइटें देखनी चाहिए?\"",
    watchOut: [
      "शर्तें बदलती रहती हैं। हमेशा आधिकारिक नियामक संस्था से पक्का करें।",
      "पैसे लेकर पक्का लाइसेंस दिलाने का वादा करने वाली वेबसाइटों या \"एजेंटों\" से सावधान रहें। यह नए लोगों को निशाना बनाने वाली आम धोखाधड़ी है।",
    ],
  },
  "professional-writing": {
    title: "प्रोफ़ेशनल ईमेल और कवर लेटर लिखना",
    summary: "टोन, व्याकरण और ढाँचे में मदद लें, ताकि आपका संदेश आपकी ही आवाज़ में, पर निखरा हुआ लगे।",
    explain: [
      "दूसरी भाषा में लिखने में बहुत समय लग सकता है। AI व्याकरण सुधारने, टोन बदलने (ज़्यादा औपचारिक या ज़्यादा दोस्ताना), और विचारों को व्यवस्थित करने में मदद कर सकता है।",
      "अपने खुद के ड्राफ़्ट से शुरू करें, चाहे वह अधूरा हो या आपकी मातृभाषा में हो। फिर AI से उसे बेहतर बनाने को कहें। इससे आपका संदेश निजी बना रहता है।",
      "नतीजा ध्यान से पढ़ें। पक्का करें कि वह वही कहता है जो आप कहना चाहती हैं, और आपकी तरह लगता है।",
    ],
    example: {
      label: "जल्दी में लिखे ड्राफ़्ट को निखारें",
      prompt: "इस ईमेल को ज़्यादा प्रोफ़ेशनल बनाओ लेकिन अपनापन बना रहे: \"hi, maine {job} wali job dekhi, mere paas kaafi experience hai, kya hum baat kar sakte hain? thanks\"",
    },
    tryIt: "एक छोटा-सा कच्चा ईमेल या कवर लेटर की शुरुआत लिखें। AI से उसे प्रोफ़ेशनल बनाने को कहें, फिर बदलाव समझाने को कहें ताकि आप सीख सकें।",
    watchOut: [
      "नियोक्ता अक्सर पहचान लेते हैं कि कवर लेटर आम है। अपनी असली कहानी और खास बातें जोड़ें।",
      "AI से उसके बदलाव समझाने को कहें। समय के साथ अपनी लिखावट सुधारने का यह मुफ़्त तरीका है।",
    ],
  },
  "fact-checking": {
    title: "AI के जवाबों की जाँच करना",
    summary: "हैलूसिनेशन पहचानें और AI के जवाबों पर भरोसा करने से पहले उन्हें जाँचें।",
    explain: [
      "AI तथ्य, आँकड़े, वेबसाइट लिंक, कानून, या उद्धरण तक गढ़ सकता है। ये बिल्कुल असली लग सकते हैं।",
      "तीन आसान जाँच: AI से पूछें \"तुम कितने पक्के हो, और तुम्हारे स्रोत क्या हैं?\" मुख्य बात खुद खोजें। आधिकारिक वेबसाइटों (सरकार, नियामक संस्थाएँ, आपका नियोक्ता) को प्राथमिकता दें।",
      "फ़ैसला जितना ज़रूरी हो (पैसा, सेहत, कानूनी स्थिति, नौकरी), उतनी ही सावधानी से जाँचें।",
    ],
    example: {
      label: "AI से उसकी अनिश्चितता बताने को कहें",
      prompt: "टोरंटो में एक {job} की औसत सैलरी कितनी है? बताओ तुम कितने पक्के हो और इसे पक्का करने के लिए मुझे क्या देखना चाहिए।",
    },
    tryIt: "AI से अपने देश की नौकरियों या नियमों के बारे में कोई तथ्य वाला सवाल पूछें। फिर पूछें कि वह कितना पक्का है और आप जवाब कहाँ जाँच सकती हैं।",
    watchOut: [
      "AI के दिए लिंक शायद मौजूद ही न हों। संस्था को खुद खोजें।",
      "नंबर (सैलरी, फ़ीस, आखिरी तारीख) वही चीज़ें हैं जिनमें AI सबसे ज़्यादा गलती करता है।",
    ],
  },
};
