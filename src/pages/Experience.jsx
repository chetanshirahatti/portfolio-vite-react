// src/pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Flutter Developer',
    company: 'Zeksta Technology Pvt Ltd',
     logo: "/logos/zeksta.png",
    url: "https://www.zeksta.com/",
    location: 'Bangalore, India',
    duration: 'Mar 2025 – Present',
    description:
      'Worked on Buchipay Fintech application. Developed UI screens, implemented REST APIs, Firebase authentication, and used GetX for state management.',
  },
  {
    role: 'Junior Software Engineer',
    company: 'Knacpro Solutions Pvt Ltd',
     logo: "/logos/zeksta.png",
    url: "https://www.knacprosolutions.in/",
    location: 'Hubli, India',
    duration: 'Aug 2024 – Feb 2025',
    description:
      'Built a responsive website using React.js and Next.js. Optimized performance and collaborated with team members for scalable delivery.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'EyesecCyber Security Pvt Ltd',
    url: "https://eyesec.in/",
     logo: "/logos/zeksta.png",
    location: 'Belagavi, India',
    duration: 'Apr 2024 – Jul 2024',
    description:
      'Built dynamic customizable wordpress websites. Developed plugins and themes, ensuring security and performance and also learnt Figma for UI/UX design.',
  },
  {
    role: 'Freelance',
    company: 'Self-employed',
     logo: "/logos/zeksta.png",
    url: '#',
    location: 'Remote',
    duration: 'Jul 2023 – Dec 2023',
    description:
      'Developed various projects including a weather app, tic-tac-toe game and developed skills in various technologies.',
  },
];

const Experience = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 border-b-2 pb-2 border-orange-500 dark:text-gray-100">
       🏢 Professional Experience
      </h2>
      <div className="relative border-l-2 border-blue-500 pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-3 top-2 w-6 h-6 bg-blue-500 border-4 border-white rounded-full"></span>
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
              <p className="text-sm font-medium text-gray-700">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-500"
                >
                  {exp.company}
                </a>{' '}
                – <span className="text-gray-600">{exp.location}</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
