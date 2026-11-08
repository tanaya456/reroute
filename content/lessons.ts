// The fixed lesson catalog. This is the source of truth: the AI can only
// choose and order lessons from this list, never invent new ones.

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  /** Short plain-language paragraphs. */
  explain: string[];
  /** A concrete example. `{job}` is replaced with the learner's profession. */
  example: { label: string; prompt: string };
  /** What the learner should try in the sandbox. */
  tryIt: string;
  /** Safety habits for this skill. */
  watchOut: string[];
  /** Server-side instructions that scope the practice sandbox. Never sent to the browser. */
  sandboxRole: string;
};

export const LESSONS: Lesson[] = [
  {
    id: "what-is-ai",
    title: "What AI is (and isn't)",
    minutes: 6,
    summary: "How chatbots work, what they're good at, and why they sometimes get things wrong.",
    explain: [
      "AI chatbots like ChatGPT, Claude, and Gemini learned by reading a huge amount of text. They predict which words should come next, which lets them write, explain, translate, and summarize.",
      "They don't \"know\" things the way a person does. They can sound very confident and still be wrong. That's called a hallucination.",
      "Think of AI as a fast, helpful assistant that needs a manager: you. You give it clear instructions, and you check its work before you use it.",
    ],
    example: {
      label: "Ask it to explain something from your field",
      prompt: "Explain what a {job} does in 3 simple sentences, as if to a 12-year-old.",
    },
    tryIt: "Ask the assistant something about your own profession that you already know well. Check: did it get anything wrong or leave something out?",
    watchOut: [
      "AI can be confidently wrong. Check important facts with an official source.",
      "AI doesn't know about very recent events unless it can search the web.",
      "Don't share passwords, ID numbers, or bank details with any chatbot.",
    ],
    sandboxRole:
      "You are a patient teacher introducing a newcomer to AI chatbots. Answer their questions simply. When it's relevant, gently point out your own limits (you can make mistakes, you may not have recent information) and encourage them to verify important facts.",
  },
  {
    id: "good-prompts",
    title: "Writing a good prompt",
    minutes: 7,
    summary: "A simple formula to get much better answers: role, task, context, format.",
    explain: [
      "A \"prompt\" is just the message you type to the AI. Better instructions give better results.",
      "Try the RTCF formula. Role: who should the AI act as? Task: what do you want? Context: what does it need to know about you? Format: how should the answer look?",
      "If the first answer isn't right, keep the conversation going: \"Make it shorter\", \"Use simpler words\", \"Give me 3 options\". You don't need to start over.",
    ],
    example: {
      label: "A weak prompt vs. a strong prompt",
      prompt:
        "Weak: \"Help with job.\"\nStrong: \"Act as a career coach. I am a {job} who recently moved to a new country. Give me 5 job titles I could search for, as a bulleted list with one sentence each.\"",
    },
    tryIt: "Write a vague prompt first, then rewrite it using Role, Task, Context, Format. Compare the two answers.",
    watchOut: [
      "Give context about your skills, but leave out private details like your address or ID numbers.",
      "Long, detailed prompts are fine. You can't \"break\" the AI by asking clearly.",
    ],
    sandboxRole:
      "You are a prompt-writing coach. Answer the learner's prompts normally, then add a short 'Prompt tip' section (2 bullet points max) suggesting how their prompt could be clearer using Role, Task, Context, Format.",
  },
  {
    id: "resume-rewrite",
    title: "Rewriting your resume for a new country or field",
    minutes: 10,
    summary: "Use AI to translate your experience into the words employers in your new country look for.",
    explain: [
      "Resume styles differ between countries. Some expect a photo and date of birth, others don't. Job titles also differ: your experience may be called something else where you live now.",
      "AI can help you rewrite bullet points, match keywords from a job posting, and explain your foreign experience in local terms.",
      "You stay the author. AI should make your real experience clearer, not invent skills you don't have.",
    ],
    example: {
      label: "Translate your experience",
      prompt:
        "I worked as a {job} for 6 years in my home country. Rewrite this bullet point for a resume in Canada, using strong action verbs: \"Responsible for many tasks in the office and helping the manager.\"",
    },
    tryIt: "Paste one bullet point from your resume (without your name or contact details) and ask the AI to make it clearer and more specific.",
    watchOut: [
      "Remove your name, phone, email, and address before pasting your resume into any AI tool.",
      "Never let AI add experience or degrees you don't have. Employers check.",
      "Some employers use AI to screen resumes too. Clear, simple formatting helps.",
    ],
    sandboxRole:
      "You are a resume coach who helps immigrants and career changers describe their real experience for a new job market. Rewrite bullet points with strong action verbs and measurable results. Never invent experience, credentials, or numbers; if a result would be stronger with a number, ask the learner for the real figure instead. If the learner pastes personal contact details, remind them they don't need to.",
  },
  {
    id: "interview-practice",
    title: "Practicing a job interview with AI",
    minutes: 10,
    summary: "Role-play an interview, get feedback, and build confidence before the real thing.",
    explain: [
      "AI can play the role of an interviewer. It can ask you common questions, follow-up questions, and questions specific to your field.",
      "After you answer, ask for feedback: Was my answer clear? Did I use an example? How could I make it stronger?",
      "Practicing out loud, then typing your answer, is a great way to prepare, especially in a second language.",
    ],
    example: {
      label: "Start a practice interview",
      prompt:
        "Act as a hiring manager interviewing me for a {job} position. Ask me one question at a time. After each of my answers, give me short feedback, then ask the next question.",
    },
    tryIt: "Start a practice interview and answer at least two questions. Ask for feedback using the STAR method (Situation, Task, Action, Result).",
    watchOut: [
      "AI feedback is general. A real mentor or career counselor in your field can add local knowledge.",
      "It's illegal in many countries for interviewers to ask about religion, pregnancy, or marital status. Knowing your rights helps.",
    ],
    sandboxRole:
      "You are a friendly but realistic job interviewer and coach. Ask ONE interview question at a time, wait for the learner's answer, then give 2-3 sentences of encouraging, specific feedback (using the STAR method where helpful) before asking the next question. Adjust difficulty to the learner.",
  },
  {
    id: "translate-documents",
    title: "Understanding work and official documents",
    minutes: 8,
    summary: "Use AI to translate and simplify letters, contracts, and forms, and know when not to.",
    explain: [
      "AI is very good at translating and simplifying. You can ask: \"Explain this paragraph in simple words\" or \"Translate this to Spanish and list anything I need to do.\"",
      "For important documents (contracts, immigration forms, legal letters) use AI to understand, not to decide. Always confirm with an official source or a professional.",
      "Remove personal details before you paste anything. You can replace names and numbers with [NAME] or [NUMBER].",
    ],
    example: {
      label: "Simplify a confusing paragraph",
      prompt:
        "Explain this paragraph from my job offer in simple English, and list any questions I should ask before signing: \"The employee shall be subject to a probationary period of ninety (90) days, during which employment may be terminated without notice.\"",
    },
    tryIt: "Paste a confusing paragraph (with personal details removed) and ask the AI to explain it simply and list any actions you need to take.",
    watchOut: [
      "Never paste passport, visa, or ID numbers into a chatbot.",
      "AI translations can miss legal meaning. For immigration or legal papers, use certified translators and official advice.",
    ],
    sandboxRole:
      "You help newcomers understand documents. Explain text in plain, simple language and list any actions or questions the learner should raise. For legal, immigration, medical, or financial documents, clearly say this is a general explanation and recommend confirming with an official source or qualified professional. Never ask for ID numbers; if the learner shares one, tell them to remove it.",
  },
  {
    id: "credentials",
    title: "Researching credential recognition",
    minutes: 9,
    summary: "Use AI to understand how to get your degree or license recognized, then verify with official sources.",
    explain: [
      "Many professions (nursing, engineering, teaching, accounting) need your foreign credentials to be assessed or re-licensed in your new country.",
      "AI can explain the general steps, help you write questions for the licensing body, and make a checklist. But rules change often and differ by state or province.",
      "Use AI to get oriented, then go to the official regulator's website for the real requirements and fees.",
    ],
    example: {
      label: "Get a starting checklist",
      prompt:
        "I am a trained {job} from abroad. What are the general steps to get my credentials recognized in the United Kingdom? Which official organizations should I contact? Format as a checklist.",
    },
    tryIt: "Ask about credential recognition for your profession and country. Then ask: \"Which official websites should I check to confirm this?\"",
    watchOut: [
      "Requirements change. Always confirm with the official regulator.",
      "Be careful of websites or \"agents\" promising guaranteed licenses for a fee. This is a common scam targeting newcomers.",
    ],
    sandboxRole:
      "You help internationally trained professionals understand credential recognition. Give general, step-by-step orientation and name the TYPES of official bodies to contact (e.g. the national nursing regulator). Be explicit that requirements change and vary by region, and always tell the learner to confirm on the official regulator's website. Warn about paid 'agents' that guarantee licenses.",
  },
  {
    id: "professional-writing",
    title: "Writing professional emails and cover letters",
    minutes: 8,
    summary: "Get help with tone, grammar, and structure, so your message sounds like you, only polished.",
    explain: [
      "Writing in a second language can take a long time. AI can help you fix grammar, adjust tone (more formal, friendlier), and organize your ideas.",
      "Start with your own draft, even if it's messy or in your first language. Then ask AI to improve it. Your message stays personal.",
      "Read the result carefully. Make sure it says what you mean, and sounds like you.",
    ],
    example: {
      label: "Polish a quick draft",
      prompt:
        "Make this email more professional but still warm: \"hi, i saw the {job} job, i have lot of experience, can we talk? thanks\"",
    },
    tryIt: "Write a short, rough email or cover letter opening. Ask the AI to make it professional, then ask it to explain the changes so you learn.",
    watchOut: [
      "Employers can often tell when a cover letter is generic. Add your real story and specific details.",
      "Ask the AI to explain its edits. It's a free way to improve your writing over time.",
    ],
    sandboxRole:
      "You are a supportive writing coach for professionals writing in a second language. Improve the learner's draft while keeping their voice and meaning. After the improved version, briefly list the 2-3 most useful changes you made so the learner can learn from them. Never invent facts about the learner.",
  },
  {
    id: "fact-checking",
    title: "Fact-checking AI answers",
    minutes: 7,
    summary: "Spot hallucinations and check AI answers before you rely on them.",
    explain: [
      "AI can make up facts, statistics, website links, laws, or even quotes. They can look completely real.",
      "Three quick checks: Ask the AI \"How sure are you, and what are your sources?\" Search for the key fact yourself. Prefer official websites (.gov, regulators, your employer).",
      "The more important the decision (money, health, legal status, a job), the more carefully you should check.",
    ],
    example: {
      label: "Ask the AI to show its uncertainty",
      prompt:
        "What is the average salary for a {job} in Toronto? Tell me how confident you are and what I should check to confirm it.",
    },
    tryIt: "Ask the AI a factual question about jobs or rules in your country. Then ask it how confident it is and where you could verify the answer.",
    watchOut: [
      "Links that AI gives you may not exist. Search for the organization yourself.",
      "Numbers (salaries, fees, deadlines) are the things AI most often gets wrong.",
    ],
    sandboxRole:
      "You help learners practice fact-checking AI. Answer their questions, but always state your confidence level, point out which specific parts (numbers, dates, rules, links) they should verify, and suggest what kind of official source would confirm it. Do not fabricate URLs; describe the source instead (e.g. 'your provincial government's labour website').",
  },
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

export const LESSON_IDS = LESSONS.map((l) => l.id) as [string, ...string[]];
