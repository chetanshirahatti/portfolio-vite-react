// src/pages/Experience.jsx

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "JRSS Smart Machine Pvt. Ltd.",
    url: "#",
    location: "Pune, Maharashtra, India",
    duration: "Sep 2025 – Present",
    description:
      "Working on industrial automation and machine vision solutions. Developed FTP-based image processing applications using Java and Spring Boot. Integrated Keyence and Cognex industrial cameras for image acquisition, synchronization, defect inspection, production monitoring, image retention, and server synchronization.",
  },

  {
    role: "Flutter Developer",
    company: "Zeksta Technology Pvt. Ltd.",
    url: "https://www.zeksta.com/",
    location: "Bangalore, India",
    duration: "Mar 2025 – Sep 2025",
    description:
      "Developed fintech mobile applications using Flutter. Integrated REST APIs, Firebase Authentication, GetX state management, and implemented responsive UI designs.",
  },

  {
    role: "Junior Software Engineer",
    company: "Knacpro Solutions Pvt. Ltd.",
    url: "https://www.knacprosolutions.in/",
    location: "Hubli, India",
    duration: "Aug 2024 – Feb 2025",
    description:
      "Developed responsive web applications using React.js and Next.js. Optimized performance, built reusable components, and collaborated on scalable software solutions.",
  },

  {
    role: "Software Engineer Intern",
    company: "Eyesec Cyber Security Pvt. Ltd.",
    url: "https://eyesec.in/",
    location: "Belagavi, India",
    duration: "Apr 2024 – Jul 2024",
    description:
      "Built WordPress websites, developed custom themes and plugins, enhanced security, and gained UI/UX experience using Figma.",
  },

  {
    role: "Freelance Developer",
    company: "Self-Employed",
    url: "#",
    location: "Remote",
    duration: "Jul 2023 – Dec 2023",
    description:
      "Developed websites and small applications while strengthening frontend, backend, and problem-solving skills.",
  },
];

const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        Professional Experience
      </h2>

      <div className="relative border-l-2 border-cyan-500 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] mt-2"></div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <h3 className="text-xl font-semibold dark:text-white">
                  {exp.role}
                </h3>

                <span className="px-3 py-1 text-sm bg-cyan-100 text-cyan-700 rounded-full">
                  {exp.duration}
                </span>
              </div>

              <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">
                {exp.company}
              </p>

              <p className="text-sm text-gray-500">
                {exp.location}
              </p>

              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
