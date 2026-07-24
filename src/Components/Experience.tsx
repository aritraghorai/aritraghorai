import { motion } from "framer-motion";
import experiences from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-page text-textSecondary py-24 px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-accent font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-textPrimary">
            Experience
          </h2>
          <div className="flex-1 h-px bg-borderSoft max-w-xs" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-borderSoft md:left-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on the timeline */}
                <div className="absolute left-[11px] top-5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-page md:left-1/2 md:-translate-x-1/2" />

                {/* Spacer (desktop only) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-surface border border-borderSoft rounded-lg p-6 hover:border-accent/40 transition-colors group">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-textPrimary font-semibold text-base group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-accent font-mono text-xs mb-1">
                      {exp.company}
                    </p>
                    <p className="text-textSecondary text-xs mb-3">
                      {exp.duration}
                    </p>
                    <p className="text-textSecondary text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-accent bg-page border border-borderSoft text-xs px-2 py-0.5 rounded font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
