import React from "react";
import { motion } from "framer-motion";
const Herosection = () => {
  return (
    <div className="min-h-[35rem] md:p-0 p-5 bg-img  flex justify-center items-center   ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 0.5 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="max-w-[35rem] bg-transparent"
      >
        <h1 className="md:text-3xl text-xl  p-2 roboto-mono">
          <span className="text-red-500">
          Creating Top-notch digital product design
          </span>{" "}
          <br /> for innovative startups and companies that
          understand the value of design.
        </h1>
        <h1 className="md:text-3xl text-xl mt-7 p-2 roboto-mono">
        Let's turn your imagination into design.
        </h1>
      </motion.div>
      <div className="max-w-[35rem]"></div>
    </div>
  );
};

export default Herosection;
