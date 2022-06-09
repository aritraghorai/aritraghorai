import { React, useState } from "react";
import myPhoto from "../assets/myPhoto.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll/modules";
const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
  return (
    <nav className="fixed w-full h-[50px] md:h-[100px] flex justify-between items-center px-4 bg-myColor text-gray-300 ">
      <div className="flex justify-center items-center md:m-6">
        <div className="myPhoto  w-10 h-10 md:w-[20] md:h-[20]">
          <img
            src={myPhoto}
            alt="Logo"
            className="rounded-full"
            style={{ width: "50px" }}
          />
        </div>
        <div className="name ml-2">Aritra Ghorai</div>
      </div>

      {/* desktop menu */}
      <ul className="hidden md:flex md:justify-end">
        <li>
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="Work" smooth={true} offset={50} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!Nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/* Mobile Menu */}

      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="About"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="Skills"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="Work"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="Contact"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icon */}
      <div className="hidden md:flex fixed flex-col top-[35%]">
        <ul>
          <li className="w-[150px] h-[50px]  bg-blue-600 flex justify-center items-center ml-[-110px] hover:ml-[-10px] duration-300 ">
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
          <li className="w-[150px] h-[50px]  bg-gray-500 flex justify-center items-center ml-[-110px] hover:ml-[-10px] duration-300 ">
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
          <li className="w-[150px] h-[50px]  bg-blue-500 flex justify-center items-center ml-[-110px] hover:ml-[-10px] duration-300 ">
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
          <li className="w-[150px] h-[50px]  bg-green-500 flex justify-center items-center ml-[-110px] hover:ml-[-10px] duration-300 ">
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
