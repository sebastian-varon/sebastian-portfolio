// Everything the site says lives here. Add a project by adding an entry to `projects`.

export const profile = {
  name: "Sebastian Varon",
  role: "Full-stack & iOS developer",
  email: "varonofc.contact@gmail.com",
  github: "https://github.com/sebastian-varon",
  repo: "https://github.com/sebastian-varon/sebastian-portfolio",
}

export const hero = {
  headline: "Hexing the\nordinary.",
  body: "I’m Sebastian Varon, a full-stack and iOS developer. I build web apps, iOS apps and the secure systems underneath them.",
}

export type ProjectId = "cory" | "donezo" | "studio-connect" | "flooring" | "currency-flow"

export type Project = {
  id: ProjectId
  title: string
  kind: string
  summary: string
  detail: string
  stack: string
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    id: "cory",
    title: "CORY",
    kind: "Capstone, 2024–25",
    summary:
      "Electronic music events run on crews hired through group chats. CORY gives organizers one place to post shifts, verify who shows up and rate them after.",
    detail:
      "I built the hiring flow, session-based logins, identity checks and encrypted storage for staff records and messages.",
    stack: "React, Node.js, Express, PostgreSQL",
    link: {
      label: "Project files",
      href: "https://drive.google.com/drive/folders/1RSdKpOKYvWTHVOEu2AucMFh2-MerwBCV?usp=sharing",
    },
  },
  {
    id: "donezo",
    title: "DONEZO",
    kind: "iOS app",
    summary:
      "A to-do app for busy people who like their lists short. Today’s tasks, reminders that fire when they should, and nothing else on the screen.",
    detail: "Tap a task in the list to check it off.",
    stack: "Swift, iOS",
    link: { label: "Code on GitHub", href: "https://github.com/sebastian-varon/donezoapp" },
  },
  {
    id: "studio-connect",
    title: "Studio Connect",
    kind: "Real-time chat",
    summary:
      "Chat rooms for music producers. Join a room, ask how someone got their kick to sit in the mix, and the answer is still there next week because every room keeps its history.",
    detail:
      "Socket.io carries the messages and the typing indicator. Passwords are hashed with bcrypt and every message passes a Mongoose schema before it is stored.",
    stack: "Node.js, Express, Socket.io, MongoDB",
    link: { label: "Code on GitHub", href: "https://github.com/sebastian-varon/Studio-Connect" },
  },
  {
    id: "flooring",
    title: "Flooring Solution",
    kind: "React Native app",
    summary:
      "Measure a room, pick a price per square foot, add the waste allowance a contractor would, and get the boxes and the bill.",
    detail: "The estimator here runs the same kind of math. Change the numbers.",
    stack: "React Native",
    link: { label: "Code on GitHub", href: "https://github.com/sebastian-varon/FlooringApp" },
  },
  {
    id: "currency-flow",
    title: "Currency Flow",
    kind: "React Native app",
    summary:
      "A currency converter for travellers and online shoppers. Pick a base and a destination currency and it pulls the current rate from freecurrencyapi.",
    detail: "The converter here uses a fixed sample rate; the app fetches live ones.",
    stack: "React Native, freecurrencyapi",
    link: { label: "Code on GitHub", href: "https://github.com/sebastian-varon/CurrencyConverterApp" },
  },
]

export const letter = {
  paragraphs: [
    "I architect code like an alchemist: refining logic until it becomes something greater than the sum of its parts.",
    "I build the whole thing. The React front end, the Node and Express API behind it, the database, and the login that keeps the wrong people out. When an idea belongs in someone’s pocket, I build it for iOS.",
    "Security is where I started, and it never left. I’ve worked with Nmap, Wireshark and Metasploit, so I write code assuming someone will try to break it. Destruction is a form of creation.",
    "I finished the Computer Programming & Analysis advanced diploma at George Brown College in April 2025, and I’m looking for a full-stack or iOS role on a team that ships.",
  ],
  signOff: "Sebastian",
}

export type StackGroup = { group: string; rows: { name: string; where?: string }[] }

export const stack: StackGroup[] = [
  {
    group: "Front end",
    rows: [
      { name: "React", where: "CORY" },
      { name: "Next.js", where: "This site" },
      { name: "React Native", where: "Flooring Solution, Currency Flow" },
      { name: "Swift", where: "DONEZO" },
    ],
  },
  {
    group: "Back end",
    rows: [
      { name: "Node.js and Express", where: "CORY, Studio Connect" },
      { name: "Socket.io", where: "Studio Connect" },
      { name: "C# and ASP.NET Identity", where: "Travel booking app" },
      { name: "JWT and role-based access", where: "Travel booking app" },
    ],
  },
  {
    group: "Data",
    rows: [
      { name: "PostgreSQL", where: "CORY" },
      { name: "MongoDB", where: "Studio Connect" },
      { name: "SQL Server" },
    ],
  },
  {
    group: "Security",
    rows: [{ name: "Nmap" }, { name: "Wireshark" }, { name: "Metasploit and SET" }, { name: "Kali Linux" }],
  },
  {
    group: "Languages",
    rows: [{ name: "JavaScript" }, { name: "Python" }, { name: "C# and Java" }, { name: "SQL and Bash" }],
  },
  {
    group: "Schooling",
    rows: [
      { name: "Computer Programming & Analysis, George Brown College", where: "Apr 2025" },
      { name: "Travel booking web app, team project", where: "2022" },
    ],
  },
]

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]
