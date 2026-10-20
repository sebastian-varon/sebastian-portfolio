// Everything the site says lives here. Add a project by adding an entry to `projects`.

export const profile = {
  name: "Sebastian Varon",
  role: "Full-stack & iOS developer",
  email: "varonofc.contact@gmail.com",
  github: "https://github.com/sebastian-varon",
  githubHandle: "sebastian-varon",
}

export const hero = {
  eyebrow: "Full-stack & iOS developer",
  headline: "Hexing the\nordinary.",
  headlineAccent: "ordinary.",
  body: "I refine logic into products that feel effortless: web apps, iOS apps, and the secure systems underneath them. Controlled chaos, shipped clean.",
  hint: "Disturb the form",
  hintTouch: "Touch to disturb",
}

export type Project = {
  slug: string
  title: string
  kind: string
  year?: string
  summary: string
  highlights: string[]
  stack: string[]
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    slug: "cory",
    title: "CORY",
    kind: "Capstone · Web platform",
    year: "2024–25",
    summary:
      "A staffing platform for electronic music events. Organizers recruit, verify and coordinate their crews in one place instead of across group chats and spreadsheets.",
    highlights: [
      "Hiring, staff rating and event coordination in one flow",
      "Session-based authentication and identity verification",
      "Encrypted staff data and secure messaging",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    link: {
      label: "Project files",
      href: "https://drive.google.com/drive/folders/1RSdKpOKYvWTHVOEu2AucMFh2-MerwBCV?usp=sharing",
    },
  },
  {
    slug: "donezo",
    title: "DONEZO",
    kind: "iOS app",
    summary:
      "A task manager for busy people who value minimalism. Organize, get reminded, get it done, without the clutter most to-do apps pile on.",
    highlights: ["Fast task organization and reminders", "A clean, native iOS interface"],
    stack: ["Swift", "iOS"],
    link: { label: "Code", href: "https://github.com/sebastian-varon/donezoapp" },
  },
  {
    slug: "studio-connect",
    title: "Studio Connect",
    kind: "Real-time web app",
    summary:
      "Chat rooms for music producers to collaborate and trade knowledge live. Join a room, talk shop, and every room keeps its history.",
    highlights: [
      "Real-time messaging with typing indicators over Socket.io",
      "Signup and login with bcrypt-hashed passwords",
      "Mongoose schemas for validated, persistent room history",
    ],
    stack: ["Node.js", "Express", "Socket.io", "MongoDB"],
    link: { label: "Code", href: "https://github.com/sebastian-varon/Studio-Connect" },
  },
  {
    slug: "flooring-solution",
    title: "Flooring Solution",
    kind: "Mobile app",
    summary:
      "Floor area, material and cost estimates for homeowners, contractors and designers who need precise numbers without a spreadsheet.",
    highlights: ["Accurate area measurement", "Material and cost estimation", "Streamlined project planning"],
    stack: ["React Native"],
    link: { label: "Code", href: "https://github.com/sebastian-varon/FlooringApp" },
  },
  {
    slug: "currency-flow",
    title: "Currency Flow",
    kind: "Mobile app",
    summary:
      "Live currency conversion for travelers and online shoppers, pulling real-time rates and converting between any base and destination currency.",
    highlights: ["Real-time exchange rates from freecurrencyapi", "Precise base-to-destination conversion"],
    stack: ["React Native", "REST API"],
    link: { label: "Code", href: "https://github.com/sebastian-varon/CurrencyConverterApp" },
  },
]

export const about = {
  lead: "I architect code like an alchemist, refining logic into something greater than the sum of its parts.",
  paragraphs: [
    "I build across the stack: React and Next.js on the front, Node and Express behind it, and native iOS when the idea belongs in your pocket. I came up through security, so I write code assuming someone will try to break it.",
    "Hardened auth, validated data and least-privilege access aren't extras I bolt on later. They're how I build from the first commit.",
  ],
  quote: "Destruction is a form of creation.",
}

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "Python", "C#", "Java", "SQL", "C++", "Bash"] },
  { group: "Frameworks", items: ["React", "Next.js", "React Native", "Node.js", "Express", "ASP.NET"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "SQL Server"] },
  { group: "Security", items: ["Kali Linux", "Metasploit", "Nmap", "Wireshark", "SET", "JWT", "OAuth", "RBAC"] },
  { group: "Infrastructure", items: ["Docker", "AWS", "CI/CD", "Vercel"] },
]

export const timeline = [
  {
    when: "2025",
    title: "Computer Programming & Analysis",
    org: "George Brown College · Advanced Diploma",
    detail: "Graduated April 2025.",
  },
  {
    when: "2024–25",
    title: "CORY, capstone project",
    org: "George Brown College · Capstone",
    detail: "Staffing platform for electronic music events, built with React, Node.js, Express and PostgreSQL.",
  },
  {
    when: "2022",
    title: "Travel booking web app",
    org: "Team project",
    detail: "Booking for flights, hotels and rentals. I hardened the backend with JWT authentication and role-based access in C# and ASP.NET Identity.",
  },
]

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]
