import { useState, useEffect } from "react";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer.",
  "React Enthusiast.",
  "Problem Solver.",
  "Open Source Contributor.",
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  initial: { x: -40, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        45,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-page flex items-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none dark:opacity-25" />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none dark:to-black/10" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative max-w-3xl mx-auto px-8 md:px-16 pt-24 pb-16"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-mono text-sm mb-4 tracking-wider"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold text-textPrimary leading-tight"
        >
          Aritra Ghorai
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-bold text-textSecondary mt-2 h-14 sm:h-16"
        >
          {displayed}
          <span className="typewriter-cursor text-accent ml-0.5">|</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-textSecondary mt-6 max-w-xl leading-relaxed text-base"
        >
          I'm a web developer and problem solver who loves building fast,
          accessible, and visually polished products. I focus on React.js,
          TypeScript, and Node.js — always learning, always shipping.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mt-8"
        >
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded text-sm font-medium hover:bg-accentDim transition-colors duration-200"
          >
            View Projects
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 bg-accent text-white px-6 py-3 rounded text-sm font-semibold hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Download Resume
            <HiDownload className="group-hover:animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
