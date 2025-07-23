import React from "react";
import { ExternalLink } from "lucide-react";
import knacproimg from "../assets/Images/knacpro1.png";
import Gandhadagudi from "../assets/Images/GG.png";
import buchipay from "../assets/Images/buchipay.png";
import loginapp from "../assets/Images/whitebg1.jpg";
import weatherapp from "../assets/Images/whetherapp.png";
import tictactoe from "../assets/Images/tictactoe.png";

const projects = [
  {
    title: "KnacproSolutions Website",
    image: knacproimg,
    description:
      "A professional website for a software development company, showcasing services and portfolio, built with React and Tailwind CSS.",
    link: "https://www.knacprosolutions.in/",
  },

  {
    title: "Gandhadagudi Garden Website",
    image: Gandhadagudi,
    description:
      "Static yet elegant landing page for a village-based eco-tourism garden, built with HTML, Tailwind CSS, and React.",
    link: "https://www.gandhadagudigardenbyahatti.in/",
  },

  {
    title: "Buchipay Fintech App",
    image: buchipay,
    description:
      "A digital payment app built with Flutter, integrated with Firebase and REST APIs for real-time financial transactions.",
    link: "https://play.google.com/store/apps/details?id=com.buchipay.app",
  },
  {
    title: "Flutter Login App",
    image: loginapp,
    description:
      "Simple login application built with Flutter and Firebase featuring light/dark mode toggle and secure email/password authentication.",
    link: "https://github.com/chetanshirahatti/Simple_Login_App_Flutter",
  },
  {
    title: "Weather App",
    image: weatherapp,
    description:
      "A weather application built using HTML, CSS, and JS that fetches data from OpenWeatherMap API to display current weather.",
    link: "https://github.com/chetanshirahatti/WeatherAPI-App",
  },
  {
    title: "Tic Tac Toe Game",
    image: tictactoe,
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against a friend or computer.",
    link: "https://github.com/chetanshirahatti/Tic--Tac-Toe",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800 ">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-10 border-b-2 pb-2 border-orange-500  text-gray-800 dark:text-gray-100">
          🚀 My Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
