import { motion } from "framer-motion";
import blogPosts from "@/data/blog";
import { FaExternalLinkAlt } from "react-icons/fa";

const Blog = () => {
  return (
    <section
      id="blog"
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
          <span className="text-accent font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-textPrimary">
            Writing
          </h2>
          <div className="flex-1 h-px bg-borderSoft max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
          className="text-textSecondary font-mono text-sm mb-10"
        >
          {"// Articles and thoughts I've published"}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: index * 0.1 },
              }}
              viewport={{ once: true }}
              className="group flex flex-col bg-surface border border-borderSoft rounded-lg p-6 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-accent font-mono text-xs">
                  {post.platform}
                </span>
                <span className="text-textSecondary text-xs">
                  {post.date}
                </span>
              </div>
              <h3 className="text-textPrimary font-semibold text-sm leading-snug mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-textSecondary text-xs leading-relaxed flex-1 mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-1 text-accent text-xs font-mono">
                Read more <FaExternalLinkAlt size={10} className="ml-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
