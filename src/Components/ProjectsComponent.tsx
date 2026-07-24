import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  github: string;
  demo?: string;
  languages: string[];
  img: string;
  index?: number;
};

const ProjectComponent = ({
  title,
  description,
  github,
  demo,
  languages,
  img,
  index = 0,
}: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: index * 0.05 },
      }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 border border-borderSoft rounded-lg bg-surface hover:border-accent/40 transition-colors duration-300 overflow-hidden group">
        {/* Image */}
        <div className="flex items-center justify-center overflow-hidden border-b border-borderSoft md:border-b-0 md:border-r h-48 md:h-auto">
          <img
            alt={title}
            src={img}
            title={`${title} — Aritra Ghorai`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="col-span-2 p-6 md:p-8 flex flex-col">
          <h3 className="text-textPrimary font-semibold text-base mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-textSecondary text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {languages.map((la) => (
              <span
                key={la}
                className="text-accent font-mono text-xs bg-page border border-borderSoft px-2 py-0.5 rounded"
              >
                {la}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-auto">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-accent border border-accent px-3 py-1.5 rounded hover:bg-accentDim transition-colors"
              >
                <FaExternalLinkAlt size={12} />
                Live Demo
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-textSecondary border border-borderSoft px-3 py-1.5 rounded hover:border-accent/50 hover:text-textPrimary transition-colors"
            >
              <FaGithub size={14} />
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectComponent;
