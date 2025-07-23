// src/pages/Education.jsx
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    emoji: "🎓",
    degree: "Master of Computer Applications (MCA)",
    institution: "KLS Gogte Institute of Technology",
    address: "Belagavi, Karnataka",
    year: "2024",
  },
  {
    emoji: "💻",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Global Innovative College of BCA",
    address: "Hubli, Karnataka",
    year: "2022",
  },

  {
    emoji: "🔬",
    degree: "PUC (Science)",
    institution: "P C Jabin Science College",
    address: "Hubli, Karnataka",
    year: "2019",
  },

  {
    emoji: "📘",
    degree: "10th Standard",
    institution: "Sanskaar English Medium School",
    address: "Hubli, Karnataka",
    year: "2017",
  },

  
];

const Education = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 border-b-2 pb-2 border-orange-500 dark:text-gray-200">
         🏫 My Education Journey
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-3xl mb-2">{item.emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {item.degree}
            </h3>
            <p className="text-sm text-gray-600 mt-2 font-medium">
              {item.institution}
            </p>
            <p className="text-sm text-gray-500">{item.address}</p>
            <p className="text-sm text-gray-400 mt-1">
              Year of Completion: {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
