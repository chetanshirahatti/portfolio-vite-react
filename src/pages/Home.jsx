import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import profileImage from "../assets/Images/profile1.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-4 md:px-10 lg:px-20 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-cyan-100 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-300 opacity-20 rounded-full blur-3xl z-0" />

      {/* Left Content */}
      <div className="text-center md:text-left max-w-2xl z-10 py-10 md:py-0">
        <p className="text-lg text-gray-500 dark:text-gray-200 font-mono mb-1">
          // Chetan_Shirahatti
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-300 font-mono mb-4">
          /* Software Developer */
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="before:content-['<'] after:content-['/>'] text-cyan-500 font-mono relative px-1">
            <span className="text-gray-900 dark:text-white font-bold">
              ENGINEER{" "}
            </span>
          </span>

          <br />
          <span className="text-gray-900 dark:text-white text-2xl md:text-3xl">
            <Typewriter
              words={[
                "Flutter_Developer();",
                "Web_Developer();",
                "Tech_Enthusiast();",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorColor="#3b82f6"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-200 font-mono text-sm">
          <FaCode className="inline mr-2 text-cyan-500" />
          Building digital experiences with clean code & modern tech stack.
        </p>

        <button
          className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-500 hover:to-blue-600 transition duration-300 rounded-md shadow-lg font-mono text-sm tracking-wider"
          onClick={() => navigate("/contact")}
        >
          ./GET_IN_TOUCH
        </button>
      </div>

      {/* Right Content */}
      <div className="relative mt-10 md:mt-0 w-full flex justify-center z-10 pb-8">
        {" "}
        {/* Add pb-8 here */}
        <div className="relative">
          <img
            src={profileImage}
            alt="profile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md rounded-xl shadow-2xl border-2 border-gray-700 hover:scale-105 transition duration-300 ease-in-out"
          />

          <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-900 text-cyan-400 px-4 py-1 rounded-md text-xs font-mono border border-gray-700 dark:border-gray-500 shadow-sm">
            dev@ChetanShirahatti
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
