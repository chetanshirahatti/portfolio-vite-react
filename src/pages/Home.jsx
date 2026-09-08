
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import profileImage from "../assets/Images/profile1.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-cyan-300 opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl z-0"></div>

      {/* Left Section */}
      <div className="max-w-2xl z-10 text-center md:text-left py-10">
        <p className="text-sm md:text-base text-cyan-500 font-mono mb-2">
          &lt;Software Engineer /&gt;
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-3">
          <span className="text-gray-900 dark:text-white">
            Hi, I'm
          </span>
          <br />
          <span className="text-cyan-500">
            Chetan Shirahatti
          </span>
        </h1>

        <div className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          <Typewriter
            words={[
              "Software Engineer",
              "Java Backend Developer",
              "Spring Boot Developer",
              "Industrial Automation Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            cursorColor="#06b6d4"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          <FaCode className="inline mr-2 text-cyan-500" />
          Passionate Software Engineer with experience in Java, Spring Boot,
          FTP-based image processing systems, industrial automation, and
          machine vision integrations using Keyence & Cognex cameras.
          Focused on building scalable enterprise applications and reliable
          backend solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            Contact Me
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition duration-300"
          >
            View Projects
          </button>
        </div>

        {/* Quick Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            "Java",
            "Spring Boot",
            "MySQL",
            "REST API",
            "FTP",
            "Keyence",
            "Cognex",
            "Git",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-sm rounded-full border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 flex justify-center">
        <div className="relative">
          <img
            src={profileImage}
            alt="Chetan Shirahatti"
            className="w-72 md:w-96 rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 hover:scale-105 transition duration-300"
          />

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-green-400 px-4 py-2 rounded-md text-xs md:text-sm font-mono border border-gray-700 shadow-lg">
            chetan@software-engineer:~$
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
