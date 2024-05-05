import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e41b8328-284a-4560-b0f3-3938b09d55d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message send successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <motion.div
        id="contact"
        className="max-w-[1440px] mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Contact Me
          </h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="name"
                id="name"
                name="name"
                className="w-full border-gray-500 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                className="w-full border-gray-500 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-800 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="message"
                name="message"
                rows="4"
                className="w-full border-gray-500 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Submit
              </button>
              <Toaster />
            </div>
          </form>
        </div>
      </motion.div>
      <p className="text-center p-2 bg-gray-800 text-white">
        Copyright &copy; 2024,{" "}
        <span className="text-red-500 poppins">zubair mujawar</span>
      </p>
    </>
  );
};

export default Contact;
