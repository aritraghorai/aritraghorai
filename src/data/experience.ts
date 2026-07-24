export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    duration: "2022 — Present",
    description:
      "Building full-stack web applications using React, Node.js, and MongoDB. Focused on creating performant, accessible, and visually polished interfaces. Shipped multiple production apps including a real-time chat app, drawing tool, and weather dashboard.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Open Source Contributions",
    duration: "2021 — 2022",
    description:
      "Contributed to open-source React projects, improving UI components and fixing accessibility bugs. Learned collaborative development workflows including Git branching, code reviews, and pull request conventions.",
    tech: ["React", "JavaScript", "CSS", "GitHub"],
  },
  {
    role: "Computer Science Student",
    company: "University / Self-Study",
    duration: "2020 — 2022",
    description:
      "Studied core computer science fundamentals including data structures, algorithms, and software engineering principles. Actively solved 200+ problems on LeetCode and built personal projects to deepen practical skills.",
    tech: ["C++", "Java", "Data Structures", "Algorithms", "LeetCode"],
  },
];

export default experiences;
