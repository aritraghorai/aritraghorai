import { useState } from "react";
import newsApp from "../assets/Projects/newsApp.png";
import qrCode from "../assets/Projects/qrcode.png";
import weatherApp from "../assets/Projects/Weather-app.png";
import chat_app from "../assets/Projects/chat_app.png";
import drawing from "../assets/Projects/drawing.png";
import ProjectComponent from "./ProjectsComponent";
import { motion } from "framer-motion";

type Category = "All" | "Frontend" | "Backend" | "Tools";

const ProjectResources = [
  {
    title: "Drawing Application",
    github: "https://github.com/aritraghorai/drawing-application",
    demo: "https://whiteboard-tan.vercel.app/",
    description:
      "Real-time collaborative drawing application built with React.js and Fabric.js.",
    languages: ["React JS", "Fabric.js", "TypeScript"],
    img: drawing,
    category: "Frontend" as Category,
  },
  {
    title: "Chat Application",
    github: "https://github.com/aritraghorai/Chat-App",
    description:
      "Real-time chat app with WebSocket communication using Next.js, Node.js, and Socket.io.",
    languages: ["Next.js", "Express", "TypeScript", "Socket.io"],
    img: chat_app,
    category: "Backend" as Category,
  },
  {
    title: "News App",
    description:
      "News web app built with React and Bootstrap. Browse daily news across categories using the News API.",
    languages: ["JavaScript", "React", "Bootstrap 5", "React Router"],
    github: "https://github.com/aritraghorai/My-News-App",
    img: newsApp,
    category: "Frontend" as Category,
  },
  {
    title: "Weather App",
    description:
      "Weather dashboard built with React and the OpenWeather API. View real-time weather by city name.",
    languages: ["React JS", "OpenWeather API"],
    demo: "https://weather-app-ten-amber.vercel.app/",
    github: "https://github.com/aritraghorai/weather-app",
    img: weatherApp,
    category: "Frontend" as Category,
  },
  {
    title: "QR Code Generator",
    description:
      "Generate a QR code from any URL instantly. Built with React and the qrcode library.",
    languages: ["React JS", "QRCode.js"],
    demo: "https://qrcode-generator-six.vercel.app/",
    github: "https://github.com/aritraghorai/qrcode-generator",
    img: qrCode,
    category: "Tools" as Category,
  },
];

const filterTabs: { label: string; value: Category | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Tools", value: "Tools" },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");

  const filtered =
    activeFilter === "All"
      ? ProjectResources
      : ProjectResources.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="w-full bg-page text-textSecondary py-24 px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-accent font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-textPrimary">
            Projects
          </h2>
          <div className="flex-1 h-px bg-borderSoft max-w-xs" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filterTabs.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-4 py-1.5 text-sm font-mono rounded transition-colors duration-200 border
                ${
                  activeFilter === value
                    ? "border-accent text-accent bg-accentDim"
                    : "border-borderSoft text-textSecondary hover:border-accent/50 hover:text-textPrimary"
                }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-4">
          {filtered.map((project, index) => (
            <ProjectComponent key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
