import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/Z.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToSecstion = () => {
    // Close the responsive menu when a navigation a is clicked
    
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setToggle(false);
  };

  return (
    <header className=" w-full p-2 h-16 bg-[#f6f6f6] text-black shadow-2xl">
      <nav className="max-w-[1440px] mx-auto h-full flex justify-between items-center">
        <a to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[3.5rem] h-[55px] object-cover "
          />
        </a>
        {toggle ? (
          <MdOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-2xl cursor-pointer duration-700"
          />
        ) : (
          <IoMenu
            onClick={() => setToggle(!toggle)}
            className="text-2xl cursor-pointer md:hidden block duration-700"
          />
        )}
        <ul className="hidden md:flex gap-3 px-2">
          <li className="cursor-pointer">
            <a
              to="#home"
              onClick={() => scrollToSection("home")}
              className={({ isActive }) =>
                `block py-2  ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Home
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              to="#about"
              onClick={() => scrollToSection("about")}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              About
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              to="#services"
              onClick={() => scrollToSection("services")}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Services
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              to="#contact"
              onClick={() => scrollToSection("contact")}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Resposive menu */}
        <ul
          className={`md:hidden z-[99] duration-700 ease-in-out  fixed bg-[#f6f6f6] justify-start items-center flex flex-col right-[-100%] top-[4rem] gap-3 p-2 w-full h-full  ${
            toggle ? "right-[0]" : "right-[-100%]"
          }`}
        >
          <li className="cursor-pointer">
            <a
              to="/"
              onClick={() => scrollToSection("home")}
              className={({ isActive }) =>
                `block py-2  ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              to="#about"
              onClick={() => scrollToSection("about")}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              to="#products"
              onClick={() => scrollToSection("services")}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Services
            </a>
          </li>
          <li>
            <a
              to="#contact"
              onClick={() => scrollToSection("contact")}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-black"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
