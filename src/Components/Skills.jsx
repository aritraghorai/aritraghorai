import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <section
      name="Skills"
      className="bg-[#0a192f] text-gray-300 w-full h-screen"
    >
      '{/* Container */}
      <div className="max-w-[1000px]  flex flex-col justify-center w-full mx-auto h-full p-4">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="Html Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="Html Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="Html Icon" />
            <p className="my-4">JAVASCRIP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="Html Icon" />
            <p className="my-4">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Html Icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Html Icon" />
            <p className="my-4">MONGO DB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
