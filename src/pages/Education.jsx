
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "KLS Gogte Institute of Technology",
    location: "Belagavi, Karnataka",
    year: "2024",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Global Innovative College of BCA",
    location: "Hubli, Karnataka",
    year: "2022",
  },
  {
    degree: "PUC (Science)",
    institution: "P C Jabin Science College",
    location: "Hubli, Karnataka",
    year: "2019",
  },
  {
    degree: "SSLC (10th Standard)",
    institution: "Sanskaar English Medium School",
    location: "Hubli, Karnataka",
    year: "2017",
  },
];

const Education = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Education
      </motion.h2>

      <div className="relative border-l-2 border-blue-500 ml-4">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] mt-2"></div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-lg font-semibold dark:text-white">
                  {item.degree}
                </h3>

                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                  {item.year}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-2 font-medium">
                {item.institution}
              </p>

              <p className="text-gray-500 text-sm">
                {item.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
