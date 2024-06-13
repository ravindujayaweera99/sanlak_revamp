import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero h-[30vh] md:h-[90vh] flex flex-col justify-center items-center text-center gap-10">
      <div className="flex flex-col justify-center items-center text-center gap-10 bg-blue h-full w-full bg-opacity-80 font-primary">
        <motion.h1
          className="text-2xl md:text-7xl text-white font-extralight"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Build your <span className="text-orange uppercase">Dream</span> with
          the <span className="text-orange uppercase">Best Expertise</span>
        </motion.h1>
        <motion.a
          href=""
          className="bg-orange text-md px-2 py-2 md:px-5 md:py-3 rounded-lg text-white font-primary font-light md:text-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
