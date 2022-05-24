import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
const Home = () => {
  return (
    <section name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hi,My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6fd]">
          Aritra Ghorai
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Devoloper.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a web developer and problem solver who loves React.js and solving
          new problems on leetcode. I am keen to learn new skills and ways to do
          projects to perfection with a prime focus on optimization and
          performance which also looks good and professional. I believe that
          every problem has a solution and everything is achievable through team
          effort.
        </p>
        <Link to="Work" duration={500} offset={50}>
          <div className="group">
            <button className=" text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Project
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
