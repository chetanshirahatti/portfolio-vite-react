// src/pages/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer",
    company: "JRSS Smart Machine Pvt. Ltd.",
    logo: "/logos/jrss.png",
    url: "#",
    location: "Pune, Maharashtra, India",
    duration: "Sep 2025 – Present",
    description:
      "Working on industrial automation and machine vision solutions. Developed and maintained FTP-based image processing applications using Java and Spring Boot. Integrated Keyence and Cognex industrial cameras for image acquisition, synchronization, defect inspection, and production monitoring. Implemented image storage, server synchronization, logging, retention policies, and production support activities.",
  },

  {
    role: "Flutter Developer",
    company: "Zeksta Technology Pvt. Ltd.",
    logo: "/logos/zeksta.png",
    url: "https://www.zeksta.com/",
    location: "Bangalore, India",
    duration: "Mar 2025 – Sep 2025",
    description:
      "Developed fintech mobile applications using Flutter. Built responsive UI screens, integrated REST APIs, implemented Firebase Authentication, and used GetX for state management. Participated in debugging, deployment, and feature enhancements.",
  },

  {
    role: "Junior Software Engineer",
    company: "Knacpro Solutions Pvt. Ltd.",
    logo: "/logos/knacpro.png",
    url: "https://www.knacprosolutions.in/",
    location: "Hubli, India",
    duration: "Aug 2024 – Feb 2025",
    description:
      "Developed responsive web applications using React.js and Next.js. Optimized application performance, implemented reusable components, and collaborated with cross-functional teams to deliver scalable software solutions.",
  },

  {
    role: "Software Engineer Intern",
    company: "Eyesec Cyber Security Pvt. Ltd.",
    logo: "/logos/eyesec.png",
    url: "https://eyesec.in/",
    location: "Belagavi, India",
    duration: "Apr 2024 – Jul 2024",
    description:
      "Built customizable WordPress websites, developed themes and plugins, enhanced website security, and gained practical experience in UI/UX design using Figma.",
  },

  {
    role: "Freelance Developer",
    company: "Self-Employed",
    logo: "/logos/freelance.png",
    url: "#",
    location: "Remote",
    duration: "Jul 2023 – Dec 2023",
    description:
      "Developed personal and client projects including weather applications, portfolio websites, and interactive web applications while strengthening frontend and backend development skills.",
  },
];
