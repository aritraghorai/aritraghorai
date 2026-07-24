import { useState, useEffect } from "react";
import myPhoto from "../assets/myPhoto.png?w=300&format=webp";
import srcsetAvif from "../assets/myPhoto.png?w=300;500;700;900;1200&format=avif&as=srcset";
import srcsetWebp from "../assets/myPhoto.png?w=300;500;700;900;1200&format=avif&as=webp";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ResponsiveImage from "@/Component/ResponsiveImage";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useState("dark");

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
    } else {
      toggleTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`z-50 flex w-full justify-between fixed items-center h-16 transition-all duration-300
        ${scrolled ? "backdrop-blur-md bg-surface/90 border-b border-borderSoft shadow-lg" : "bg-surface"}
        text-textSecondary
      `}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("home")}
        className="flex items-center ml-4 md:ml-16 gap-2 hover:opacity-80 transition-opacity"
      >
        <ResponsiveImage
          srcsetAvif={srcsetAvif}
          srcsetWebp={srcsetWebp}
          className="rounded-full w-8 md:w-10 ring-2 ring-accent/30"
          placeholder={myPhoto}
        />
        <span className="font-semibold text-textPrimary text-sm tracking-wide">
          Aritra Ghorai
        </span>
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1 mr-16">
        <ul className="flex items-center gap-1">
          {navLinks.map(({ label, id }) => (
            <li key={id} className="px-0">
              <button
                onClick={() => scrollTo(id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded
                  ${activeSection === id ? "text-accent" : "text-textSecondary hover:text-textPrimary"}`}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="px-0 ml-2">
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 text-sm font-medium border border-accent text-accent rounded hover:bg-accentDim transition-colors duration-200"
            >
              Resume
            </a>
          </li>
          <li className="px-0 ml-2">
            <button
              onClick={changeTheme}
              className="p-2 rounded text-textSecondary hover:text-accent transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-12"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-500 ease-in-out transform rotate-0 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-500 ease-in-out transform -rotate-45 group-hover:rotate-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile hamburger */}
      <div className="flex md:hidden mr-5">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-textSecondary hover:text-accent transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-surface flex flex-col justify-center items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 text-textSecondary hover:text-accent p-2"
            aria-label="Close menu"
          >
            <FaTimes size={22} />
          </button>
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`py-3 text-2xl font-medium transition-colors ${activeSection === id ? "text-accent" : "text-textSecondary hover:text-textPrimary"}`}
            >
              {label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-3 border border-accent text-accent rounded text-lg hover:bg-accentDim transition-colors"
          >
            Resume
          </a>
          <button
            onClick={changeTheme}
            className="mt-4 p-2 rounded text-textSecondary hover:text-accent transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-12"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-500 ease-in-out transform rotate-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-500 ease-in-out transform -rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Minimal social sidebar - desktop only */}
      <div className="hidden md:flex fixed flex-col gap-4 left-6 bottom-0 items-center pb-0">
        <a
          href="https://www.linkedin.com/in/ghoraiaritra/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-textSecondary hover:text-accent transition-colors duration-200"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://github.com/aritraghorai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-textSecondary hover:text-accent transition-colors duration-200"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://twitter.com/aritra1521"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-textSecondary hover:text-accent transition-colors duration-200"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="mailto:aritra1521@gmail.com"
          aria-label="Email"
          className="text-textSecondary hover:text-accent transition-colors duration-200"
        >
          <HiOutlineMail size={20} />
        </a>
        <div className="w-px h-16 bg-slate/40" />
      </div>
    </nav>
  );
};

export default Navbar;
