/* eslint-disable quotes */
import { useState } from "react";
import ImportSkillsData from "../assets/Skills/skill";
import Skill from "./Skill";
import { AnimationProps, motion } from "framer-motion";

const fadeInAnimationVariants: AnimationProps["variants"] = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.01 * index,
    },
  }),
};

const Skills = () => {
  const [skillsData] = useState(ImportSkillsData);

  return (
    <section
      id="Skills"
      className="dark:bg-myColor dark:text-gray-300 w-full h-screen sm:mt-[10vh] "
    >
      {/* Container */}
      <div className="max-w-[1000px]  flex flex-col justify-center w-full mx-auto h-full p-4">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">{`// These are technologies I've worked with`}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((s, index) => (
            <motion.div
              key={s.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <Skill name={s.name} icon={s.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
