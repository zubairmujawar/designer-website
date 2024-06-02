import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
const About = () => {
  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      transition={{ duration: 2, delay: 0.5 }}
      variants={{
        show: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="min-h-[35rem] max-w-[1440px] p-5 md:p-1 mx-auto "
    >
      <div className="md:flex md:justify-evenly md:items-center mx-auto">
        <div className="  md:w-[30rem] md:p-1">
          <h1 className="md:text-3xl text-xl text-red-500  p-2 roboto-mono">
            I am Zubair Mujawar
          </h1>
          <p className="text-lg poppins p-1 md:p-2">
            I completed my graduation from Pune University.
            Additionally, I have also completed a Graphic Designing Course,
            where I gained proficiency in using Adobe Illustrator, Photoshop,
            CorelDRAW, and InDesign for creating beautiful and captivating
            designs. These skills have equipped me to excel in the field of
            graphic design, allowing me to effectively communicate ideas
            visually and create impactful designs for various purposes.
          </p>
        </div>
        <div className="  md:w-[25rem]">
          <img src={profileImg} className="w-[25rem]" alt="img" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
