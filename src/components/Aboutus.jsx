import React from "react";
import Img from "../assets/form-image.jpg";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <div className="flex  flex-col items-center justify-center px-2 py-8 lg:p-8">
      <h1 className="text-center text-3xl md:text-5xl">About SANLAK</h1>
      <div className="flex justify-center items-center mx-auto lg:gap-8">
        <motion.div
          className="w-[50%] text-center lg:text-left lg:text-xl font-normal"
          initial={{
            y: "100%",
            opacity: 0,
          }}
          whileInView={{
            y: "0%",
            opacity: 1,
          }}
          viewport={{
            margin: "-100px",
            once: true,
          }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, ullam debitis. Atque, doloribus! Voluptatibus, unde
          accusantium quo, quibusdam vero impedit iusto dolore sint eius culpa
          saepe suscipit quas, at necessitatibus?o hic, perferendis quis
          distinctio quia quo dolores sapiente?
        </motion.div>
        <div className="hidden lg:block">
          <img src={Img} alt="" className="h-72 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
