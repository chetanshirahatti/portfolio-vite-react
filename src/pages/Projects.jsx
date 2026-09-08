
import React from "react";
import { ExternalLink } from "lucide-react";

import ftpImageProcessing from "../assets/Images/ftp-project.png";
import keyenceProject from "../assets/Images/keyence-project.png";
import knacproimg from "../assets/Images/knacpro1.png";
import Gandhadagudi from "../assets/Images/GG.png";
import buchipay from "../assets/Images/buchipay.png";
import loginapp from "../assets/Images/whitebg1.jpg";

const projects = [
  {
    title: "FTP Image Processing System",
    image: ftpImageProcessing,
    technologies: ["Java", "Spring Boot", "FTP", "MySQL"],
    description:
      "Enterprise-grade image processing application developed for manufacturing environments. Implemented automatic image synchronization between Zone PCs and Server PCs, image retention policies, automated cleanup schedulers, logging, and production monitoring.",
    link: "#",
  },

  {
    title: "Keyence & Cognex Camera Integration",
    image: keyenceProject,
    technologies: ["Java", "Spring Boot", "Keyence", "Cognex"],
    description:
      "Industrial machine vision solution integrating Keyence and Cognex cameras. Developed image acquisition workflows, station creation logic, OK/NOK image segregation, server synchronization, defect image storage, and production traceability features.",
    link: "#",
  },

  {
    title: "Buchipay Fintech App",
    image: buchipay,
    technologies: ["Flutter", "Firebase", "REST API", "GetX"],
    description:
      "Digital payment application built using Flutter. Integrated REST APIs, Firebase Authentication, transaction workflows, and responsive user interfaces with efficient state management.",
    link: "https://play.google.com/store/apps/details?id=com.buchipay.app",
  },

  {
    title: "Knacpro Solutions Website",
    image: knacproimg,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    description:
      "Corporate website developed using React and Tailwind CSS. Designed responsive pages, optimized performance, and delivered a modern user experience showcasing company services and portfolio.",
    link: "https://www.knacprosolutions.in/",
  },

  {
    title: "Gandhadagudi Garden Website",
    image: Gandhadagudi,
    technologies: ["React", "Tailwind CSS", "HTML"],
    description:
      "Tourism and eco-garden website built with React and Tailwind CSS. Created an engaging landing page highlighting attractions, facilities, and visitor information.",
    link: "https://www.gandhadagudigardenbyahatti.in/",
  },

  {
    title: "Flutter Login Application",
    image: loginapp,
    technologies: ["Flutter", "Firebase", "Authentication"],
    description:
      "Authentication application featuring secure login, registration, Firebase integration, and dark/light theme support.",
    link: "https://github.com/chetanshirahatti/Simple_Login_App_Flutter",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14 dark:text-white">
          Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full lg:w-1/3 h-64 object-cover"
                />

                {/* Project Content */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
