import React from "react";
import newsApp from "../assets/Projects/newsApp.png";
import realState from "../assets/realestate.jpg";
import weatherApp from "../assets/Projects/Weather-app.png";
import Projects_Components from "./Projects_Components";
const Work = () => {
  return (
    <section
      name="Work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] sm:mt-[10vh]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">//Check Out Some of My Projects</p>
        </div>
        {/* Work Demo Container */}
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-4">
          {/* Item 1 */}
          <Projects_Components
            projectImg={newsApp}
            applicationTitle="News App Build Using News Api"
            pageUrl="https://github.com/aritraghorai/My-News-App"
            githubUrl="https://github.com/aritraghorai/My-News-App"
          />
          <Projects_Components
            projectImg={weatherApp}
            applicationTitle="Weather App"
            pageUrl="https://weather-app-ten-amber.vercel.app"
            githubUrl="https://github.com/aritraghorai/Weather-App"
          />
          {/* End item 3 */}
        </div>
      </div>
    </section>
  );
};

export default Work;
