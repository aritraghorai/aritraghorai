import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="w-full h-screen dark:bg-myColor  dark:text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="sm:text-right pb-8 pl-4"
          >
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </motion.div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
          <motion.div
            initial={{ y: 100, opacity: 0, x: -100 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
          >
            <p className="sm:text-right text-4xl font-bold">
              I’m a web & soft­ware devel­op­er from Kolkata,India.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0, x: 100 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
          >
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser. 🔭 I’m currently working on JavaScript
              Devoloper 🌱 Trying to learn Web Devolopment. 💬 Ask me about Any
              Web Devopment Project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
