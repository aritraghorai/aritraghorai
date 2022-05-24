import React from "react";

const Projects_Components = ({
  projectImg,
  applicationTitle,
  pageUrl,
  githubUrl,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${projectImg})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* hover effect */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          {applicationTitle}
        </span>
        <div className="pt-8 text-center">
          <a href={pageUrl} target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-gray-700"
              type="submit"
            >
              Demo
            </button>
          </a>
          <a href={githubUrl} target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-gray-700"
              type="submit"
            >
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects_Components;
