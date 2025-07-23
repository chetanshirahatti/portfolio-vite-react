import React, { useEffect, useRef } from "react";
import {
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaBookOpen,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiFigma,
  SiDart,
  SiPostman,
} from "react-icons/si";

const AboutMe = () => {
  const techScrollRef = useRef(null);

  useEffect(() => {
    if (techScrollRef.current) {
      techScrollRef.current.scrollTo({ left: 400, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-900 font-sans">
      {/* Bio and Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Biography */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-2 border-gray-300 pb-2 mb-4 dark:text-gray-100">
            📜 Biography ✨
          </h2>
          <p className="text-gray-700 leading-loose text-base dark:text-gray-100">
            Hey! I'm{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Chetan Shirahatti
            </span>
            , a{" "}
            <span className="font-medium text-blue-600">
              Creative Web Designer
            </span>{" "}
            and{" "}
            <span className="font-medium text-purple-600">
              Flutter Developer
            </span>{" "}
            who crafts
            <span className="italic">
              {" "}
              scalable, budget-friendly apps & websites
            </span>
            . I specialize in turning ideas into pixel-perfect experiences using{" "}
            <span className="font-medium underline">Flutter</span>,{" "}
            <span className="font-medium underline">Firebase</span>, and{" "}
            <span className="font-medium underline">REST APIs</span>.
            <br />
            When not coding, you'll find me geeking out over UX trends,
            optimizing app performance, or experimenting with new design tools
            to push digital boundaries.
          </p>

          <a
            href="https://drive.google.com/file/d/1J1lQtOqFX4-VundJ_HLM6jBmdWZu3H0w/view?usp=drivesdk"
            className="inline-flex items-center gap-2 mt-6 bg-gray-800 text-white px-6 py-3 font-semibold rounded hover:bg-gray-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download CV
          </a>
        </div>

        {/* Personal Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-2 border-gray-300 pb-2 mb-4 dark:text-gray-100">
            👤 Personal Details 📋
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm dark:text-gray-200">
            <li className="flex items-center gap-2">
              <FaBookOpen className="text-gray-600" />
              <strong>Name:</strong> Chetan Prabhakar Shirahatti
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <strong>Address:</strong> Hubli, Karnataka, India
            </li>
            <li className="flex items-center gap-2">
              <FaBriefcase className="text-gray-600" />
              <strong>Role:</strong> Software Engineer
            </li>
            <li className="flex items-center gap-2">
              <FaBookOpen className="text-gray-600" />
              <strong>Degree:</strong> MCA
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-600" />
              <strong>Mail:</strong> chetanpshi9@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-600" />
              <strong>Phone:</strong> +91 7483161971
            </li>
          </ul>
        </div>
      </div>

      {/* Technologies I Work With */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-2 border-gray-300 pb-2 mb-10 dark:text-gray-200">
          💻 Technologies I Work With 🛠️
        </h2>
        <div
          ref={techScrollRef}
          className="flex overflow-x-auto space-x-4 no-scrollbar py-4 px-2 dark:text-gray-500"
        >
          <TechIcon
            icon={<FaHtml5 className="text-orange-600 " />}
            name="HTML5"
          />
          <TechIcon
            icon={<FaCss3Alt className="text-blue-600" />}
            name="CSS3"
          />
          <TechIcon
            icon={<FaJs className="text-yellow-500" />}
            name="JavaScript"
          />
          <TechIcon icon={<FaReact className="text-cyan-500" />} name="React" />
          <TechIcon
            icon={<SiTailwindcss className="text-sky-400" />}
            name="Tailwind"
          />
          <TechIcon
            icon={<SiNodedotjs className="text-green-600" />}
            name="Node.js"
          />
          <TechIcon icon={<FaGitAlt className="text-red-500" />} name="Git" />
          <TechIcon
            icon={<FaGithub className="text-gray-800" />}
            name="GitHub"
          />
          <TechIcon
            icon={<SiFlutter className="text-blue-400" />}
            name="Flutter"
          />
          <TechIcon
            icon={<SiPostman className="text-orange-500" />}
            name="Postman"
          />
          <TechIcon icon={<SiDart className="text-blue-500" />} name="Dart" />
          <TechIcon
            icon={<SiFigma className="text-purple-500" />}
            name="Figma"
          />
        </div>
      </div>
    </section>
  );
};

// Tech icon component
const TechIcon = ({ icon }) => {
  return (
    <div className="text-4xl">
      {" "}
      {icon}
    </div>
  );
};

export default AboutMe;
