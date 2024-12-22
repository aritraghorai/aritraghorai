import { useState, useEffect } from "react";
import myPhoto from "../assets/myPhoto.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router";
const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
  const [theme, toggleTheme] = useState("light");
  const changeTheme = () => {
    if (theme === "dark") {
      toggleTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      toggleTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      !localStorage.getItem("theme")
    ) {
      toggleTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <nav className="z-10 flex w-[100vw] justify-between fixed items-center h-[4rem] dark:bg-myColor dark:text-gray-300 text-black bg-gray-200">
      <div className="flex justify-center items-center ml-2 md:ml-[10rem] ">
        <img src={myPhoto} alt="Logo" className="rounded-full w-8 md:w-12" />
        <div className="name ml-2 ">Aritra Ghorai</div>
      </div>

      {/* desktop menu */}
      <div className="hidden md:flex  items-center mr-[10rem]">
        <ul className="flex  items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              className="
                theme-toggle
                rounded-full
                bg-blue-500
                hover:bg-blue-400
                focus:bg-blue-600
                p-3
                font-semibold
                text-sm
                shadow-lg
              hover:shadow-md"
              aria-label="Toggle Theme"
              onClick={changeTheme}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 fill-current text-white ${
                  theme === "light" ? "" : "hidden"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 fill-current text-white ${
                  theme === "dark" ? "" : "hidden"
                }`}
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      {/*   Mobile Menu */}

      <div className="flex md:hidden">
        {/* Hamburger */}
        <div className=" md:hidden z-20 mr-5" onClick={handleClick}>
          {!Nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
        </div>
        <ul
          className={
            !Nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-white dark:bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li>
            <button
              className="theme-toggle rounded-full
              bg-blue-500  hover:bg-blue-400 focus:bg-blue-600 p-3 first-letter font-semibold
           text-sm
               shadow-lg
             hover:shadow-md
          "
              aria-label="Toggle Theme"
              onClick={changeTheme}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 fill-current text-white ${
                  theme === "light" ? "" : "hidden"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 fill-current text-white ${
                  theme === "dark" ? "" : "hidden"
                }`}
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </li>
          <li className="py-6 text-4xl">
            <Link to="home">Home</Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/skills" onClick={handleClick}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/projects" onClick={handleClick}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Social icon */}
      <div className="hidden md:flex fixed flex-col top-[35%]">
        <ul className="text-white ">
          <li className="w-[150px] h-[50px]  bg-blue-600 flex justify-center items-center ml-[-95px] hover:ml-[2rem] duration-300 ">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ghoraiaritra/"
              className="text-xl"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <FaLinkedin className="inline ml-[10px]" size={30} />
          </li>
          <li className="w-[150px] h-[50px]  bg-gray-500 flex justify-center items-center ml-[-95px] hover:ml-[-10px] duration-300 ">
            <a
              href="https://github.com/aritraghorai"
              target="_blank"
              className="text-xl"
              rel="noreferrer"
            >
              Github
            </a>
            <FaGithub className="inline ml-[23px]" size={30} />
          </li>
          <li className="w-[150px] h-[50px]  bg-blue-500 flex justify-center items-center ml-[-95px] hover:ml-[-10px] duration-300 ">
            <a
              href="https://twitter.com/aritra1521"
              target="_blank"
              className="text-xl"
              rel="noreferrer"
            >
              Twtter
            </a>
            <FaTwitter className="inline ml-[27px]" size={30} />
          </li>
          <li className="w-[150px] h-[50px]  bg-green-500 flex justify-center items-center ml-[-95px] hover:ml-[-10px] duration-300 ">
            <a
              href="mailto:aritra1521@gmail.com"
              target="_blank"
              className="text-xl"
              rel="noreferrer"
            >
              Gmail
            </a>
            <HiOutlineMail className="inline ml-[30px]" size={30} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
