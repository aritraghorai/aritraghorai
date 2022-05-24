import React from "react";

const About = () => {
  return (
    <section
      name="About"
      className="w-full h-screen bg-[#0a192f]  text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              I’m a web & soft­ware devel­op­er from Kolkata,India.
            </p>
          </div>
          <div>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser. 🔭 I’m currently working on JavaScript
              Devoloper 🌱 Trying to learn Web Devolopment. 💬 Ask me about Any
              Web Devopment Project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
