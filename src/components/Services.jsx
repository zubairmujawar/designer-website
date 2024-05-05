import { motion } from "framer-motion";
import servicesImg from "../assets/services.png";
const Services = () => {
  return (
    <motion.div
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      transition={{ duration: 2, delay: 0.5 }}
      variants={{
        show: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="min-h-[35rem] mx-w-[1440px]"
    >
      <div className="md:flex justify-evenly items-center ml-[2rem] md:ml-[2rem]">
        <div className="gap-3">
          <div className="  md:text-2xl text-xl md:p-2 m-2">
            <h1 className="md:text-3xl text-xl text-red-500  p-2 roboto-mono">
              I can help you with
            </h1>
            <ul className="list-disc">
              <li>Brand Identity</li>
              <li>Print Design</li>
              <li>UX/UI Design</li>
            </ul>
          </div>
          <div className="  text-2xl p-2 m-2">
            <h1 className="md:text-3xl text-xl text-red-500  p-2 roboto-mono">
            Tools
            </h1>
            <ul className="list-disc">
              <li>CoralDraw</li>
              <li>Figma</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[25rem]">
          <img src={servicesImg} className="w-[25rem]" alt="img" />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
