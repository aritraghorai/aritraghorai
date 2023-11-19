import newsApp from "../assets/Projects/newsApp.png";
import qrCode from "../assets/Projects/qrcode.png";
import weatherApp from "../assets/Projects/Weather-app.png";
import chat_app from "../assets/Projects/chat_app.png";
import drawing from "../assets/Projects/drawing.png";
import ProjectComponent from "./ProjectsComponent";

const ProjectResorces = [
  {
    title: "Drawing application ",
    github: "https://github.com/aritraghorai/drawing-application",
    demo: "https://whiteboard-tan.vercel.app/",
    description: "Drawing application with React.js, Febric.js ",
    languages: ["React JS", "Febric js", "Typescript"],
    img: drawing,
  },
  {
    title: "Chat Application",
    github: "https://github.com/aritraghorai/Chat-App",
    description: "Chat application with React.js, Node.js & Socket.io",
    languages: ["Next JS", "Express", "Typescript", "Socket.io", "Context Api"],
    img: chat_app,
  },

  {
    title: "News App",
    description:
      "News webapp Build with React,Bootstrap. We can read daily news in each category using this app. This Application is Built using News API. For Routing purposes, we use react-router.",
    languages: ["JavaScript", "React", "Bootstrap 5", "React Router"],
    github: "https://github.com/aritraghorai/My-News-App",
    img: newsApp,
  },
  {
    title: "Weather App",
    description:
      "Weather web app built with React, Weather API. Users can see weather data by typing the name of the place.",
    languages: ["React JS", "OpenWeather-API"],
    demo: "https://weather-app-ten-amber.vercel.app/",
    github: "https://github.com/johnuberbacher/vue-chat",
    img: weatherApp,
  },
  {
    title: "Qr Code Generator",
    description:
      "Qr Code Generator Build with React. Users can generate a QR code of any URL.",
    languages: ["React JS", "Qrcode"],
    demo: "https://qrcode-generator-six.vercel.app/",
    github: "https://github.com/aritraghorai/qrcode-generator",
    img: qrCode,
  },
];

const Work = () => {
  return (
    <section
      id="Work"
      className="w-full dark:text-gray-300 dark:bg-myColor sm:mt-[10vh] scroll-mt-[100rem]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">//Check Out Some of My Projects</p>
        </div>
        {/* Work Demo Container */}
        <div className="flex flex-col gap-4 ">
          {ProjectResorces.map((project) => (
            <ProjectComponent key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
