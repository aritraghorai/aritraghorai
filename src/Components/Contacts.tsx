import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/ghoraiaritra/",
  },
  {
    label: "GitHub",
    icon: <FaGithub size={18} />,
    href: "https://github.com/aritraghorai",
  },
  {
    label: "Twitter",
    icon: <FaTwitter size={18} />,
    href: "https://twitter.com/aritra1521",
  },
  {
    label: "Email",
    icon: <HiOutlineMail size={20} />,
    href: "mailto:aritra1521@gmail.com",
  },
];

const Contacts = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-page flex flex-col justify-center py-24 px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-accent font-mono text-sm">06.</span>
          <h2 className="text-3xl font-bold text-textPrimary">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-borderSoft max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: message + socials */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <p className="text-textSecondary leading-relaxed mb-6">
              I'm currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hi — my inbox is
              always open. I'll get back to you as soon as I can!
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-textSecondary border border-borderSoft px-4 py-2 rounded hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <form
              method="post"
              action="https://getform.io/f/4f405913-36ee-422c-badf-f18160aa7edd"
              className="flex flex-col gap-4"
            >
              <div className="relative">
                <input
                  type="text"
                  name="Name"
                  required
                  id="name"
                  placeholder="Name"
                  className="w-full bg-surface border border-borderSoft rounded px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="Email"
                  required
                  id="email"
                  placeholder="Email"
                  className="w-full bg-surface border border-borderSoft rounded px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message..."
                  className="w-full bg-surface border border-borderSoft rounded px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-accent text-white font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity self-start"
              >
                {"Let's Collaborate →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
