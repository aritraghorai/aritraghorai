import { motion, AnimationProps } from "framer-motion";

type SkillCategory = {
  label: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Socket.io"],
  },
  {
    label: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Vite",
      "Webpack",
      "Postman",
    ],
  },
];

const badgeVariants: AnimationProps["variants"] = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.03 * index, duration: 0.4 },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-page text-textSecondary py-24 px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-accent font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-textPrimary">
            Skills
          </h2>
          <div className="flex-1 h-px bg-borderSoft max-w-xs" />
        </motion.div>

        <p className="text-textSecondary font-mono text-sm mb-10">
          {"// Technologies I've worked with"}
        </p>

        <div className="flex flex-col gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: catIndex * 0.1 },
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-textSecondary text-xs font-mono uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={catIndex * 10 + i}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-sm font-mono text-accent bg-surface border border-borderSoft rounded hover:border-accent/50 hover:bg-accentDim transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
