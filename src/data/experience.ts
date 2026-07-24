export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer 2",
    company: "Current Role (Hyderabad, India)",
    duration: "2023 — 2025",
    description:
      "Working as a Node.js full-stack developer, building with React on the frontend and Express on the backend. Managed multiple standalone frontend repositories and consolidated them into a unified micro-frontend architecture with Module Federation to enable shared components, consistent design systems, and cross-repo reuse. Implemented reusable federation modules to reduce duplication and streamline deployments. Built a Node.js-based JMeter runner for QA automation to run performance suites, parameterize environments, and collect reports.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Module Federation",
      "Micro Frontends",
      "JMeter",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "ThirdEye Data (Kolkata)",
    duration: "2022 — 2023",
    description:
      "Built cross-platform mobile applications with Cordova and developed robust backends using Django, alongside extensive internal projects using React and TypeScript. Expanded into Flask and Node.js with growing focus on serverless architectures, Docker, and CI/CD practices while contributing to impactful product delivery.",
    tech: [
      "React",
      "TypeScript",
      "Django",
      "Cordova",
      "Flask",
      "Node.js",
      "Docker",
      "CI/CD",
    ],
  },
];

export default experiences;
