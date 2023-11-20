import { useRef } from "react";
import "./ProjectsComponent.scss";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  title: string;
  description: string;
  github: string;
  demo?: string;
  languages: string[];
  img: string;
};

const ProjectComponent = ({
  title,
  description,
  github,
  demo,
  languages,
  img,
}: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="project mx-4 md:mx-0 "
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <div
        className="
        grid grid-cols-1
        md:grid-cols-3
        border
        dark:border-gray-700
        rounded-md
        bg-white
        dark:bg-gray-800
        shadow-md
        hover:shadow-lg
        overflow-hidden
        z-1
        relative
      "
      >
        <div
          className="
          bg-overlay
          flex
          items-center
          justify-center
          bg-cover bg-center
          border-b
          md:border-r md:border-b-0
          dark:border-gray-700
        "
        >
          <picture className="flex h-full w-full">
            <source
              type="image/webp"
              src={img}
              className="h-full w-auto object-cover"
            />
            <source
              type="image/png"
              src={img}
              className="h-full w-auto object-cover"
            />
            <img
              alt={title}
              src={img}
              title={`${title} -Aritra Ghorai`}
              className="h-full w-auto object-cover"
            />
          </picture>
        </div>
        <div className="col-span-2 p-5 md:p-7 lg:p-10">
          <h5 className="mb-4 font-semibold dark:text-white">{title}</h5>
          <p className="dark:text-white">{description}</p>
          <div>
            {languages.map((la) => (
              <div
                key={la}
                className="
                    inline-block
                    px-3
                    py-2
                    font-semibold
                    text-xs
                    dark:text-white
                    border border-blue-500
                    rounded-md
                    mt-3
                    mr-3
                  "
              >
                {la}
              </div>
            ))}
          </div>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
            inline-flex
            items-center
            justify-center
            pl-4
            pr-3
            py-2
            font-bold
            text-sm
            bg-blue-500
            hover:bg-blue-400
            focus:bg-blue-600
            text-white
            rounded-full
            shadow-sm
            hover:shadow-md
            focus:shadow-sm
            mt-5
            mr-3
          "
            >
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            justify-center
            pl-4
            pr-3
            py-2
            font-bold
            text-sm
            bg-blue-500
            hover:bg-blue-400
            focus:bg-blue-600
            text-white
            rounded-full
            shadow-sm
            hover:shadow-md
            focus:shadow-sm
            mt-5
            mr-3
          "
          >
            View Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectComponent;
