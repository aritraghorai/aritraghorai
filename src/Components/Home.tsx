import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
import { motion } from "framer-motion";

const textVariable = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.section id="home" className="w-full h-screen dark:bg-myColor">
      {/* container */}
      <motion.div
        variants={textVariable}
        initial="initial"
        animate="animate"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <motion.p
          variants={textVariable}
          initial="initial"
          animate="animate"
          className="dark:text-pink-600 text-black"
        >
          {" "}
          Hi,My Name is
        </motion.p>
        <motion.h1
          variants={textVariable}
          initial="initial"
          animate="animate"
          className="text-4xl sm:text-7xl font-bold dark:text-[#ccd6fd]"
        >
          Aritra Ghorai
        </motion.h1>
        <motion.h2
          variants={textVariable}
          initial="initial"
          animate="animate"
          className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
        >
          I'm a Full Stack Devoloper.
        </motion.h2>
        <motion.p
          variants={textVariable}
          initial="initial"
          animate="animate"
          className="dark:text-[#8892b0] py-4 max-w-[700px]"
        >
          I am a web developer and problem solver who loves React.js and solving
          new problems on leetcode. I am keen to learn new skills and ways to do
          projects to perfection with a prime focus on optimization and
          performance which also looks good and professional. I believe that
          every problem has a solution and everything is achievable through team
          effort.
        </motion.p>
        <Link to="Work" duration={500} offset={50}>
          <motion.div
            variants={textVariable}
            initial="initial"
            animate="animate"
            className="group"
          >
            <button className=" dark:text-white border-2 border-black dark:border-white px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white">
              View Project
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight className="ml-3 " />
              </span>
            </button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Home;
