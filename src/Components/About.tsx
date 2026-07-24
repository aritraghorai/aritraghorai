import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "200+", label: "LeetCode Solved" },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-page text-textSecondary py-24 px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-accent font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-textPrimary">
            About Me
          </h2>
          <div className="flex-1 h-px bg-borderSoft max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <p className="text-textSecondary leading-relaxed mb-4">
              I'm a web &amp; software developer from{" "}
              <span className="text-accent">Kolkata, India</span>. I like to
              build things from scratch and enjoy bringing ideas to life in the
              browser.
            </p>
            <p className="text-textSecondary leading-relaxed mb-4">
              Currently focused on JavaScript and the modern React ecosystem. I
              love solving algorithmic problems and applying those skills to
              real-world product challenges. Every project is an opportunity to
              write cleaner, faster code.
            </p>
            <p className="text-textSecondary leading-relaxed">
              When I'm not coding, I'm sharpening my skills on LeetCode,
              contributing to open source, or exploring new tools in the JS/TS
              ecosystem.
            </p>

            <div className="mt-6 flex flex-col gap-1 font-mono text-sm text-textSecondary">
              <span>→ React.js &amp; TypeScript</span>
              <span>→ Node.js &amp; Express</span>
              <span>→ MongoDB &amp; REST APIs</span>
              <span>→ Socket.io &amp; real-time apps</span>
            </div>
          </motion.div>

          {/* Right: stats + status card */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-3 gap-4 mb-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface border border-borderSoft rounded-lg p-4 text-center hover:border-accent/40 transition-colors"
                >
                  <div className="text-2xl font-bold text-accent">
                    {s.value}
                  </div>
                  <div className="text-xs text-textSecondary mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface border border-borderSoft rounded-lg p-6 hover:border-accent/40 transition-colors">
              <p className="text-accent font-mono text-xs mb-3">// Currently</p>
              <p className="text-textPrimary text-sm leading-relaxed">
                🔭 Working on full-stack JavaScript projects
              </p>
              <p className="text-textPrimary text-sm leading-relaxed mt-1">
                🌱 Learning advanced TypeScript patterns
              </p>
              <p className="text-textPrimary text-sm leading-relaxed mt-1">
                💬 Open for collaboration on web projects
              </p>
              <p className="text-textPrimary text-sm leading-relaxed mt-1">
                📫 Reach me at{" "}
                <a
                  href="mailto:aritra1521@gmail.com"
                  className="text-accent hover:underline"
                >
                  aritra1521@gmail.com
                </a>
              </p>
            </div>

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 border border-accent text-accent rounded py-3 text-sm font-medium hover:bg-accentDim transition-colors"
            >
              Download Resume ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
