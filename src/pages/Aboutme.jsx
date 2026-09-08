import React from "react";
import {
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaBookOpen,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiApachemaven,
  SiHibernate,
  SiGitlab,
} from "react-icons/si";

const AboutMe = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-900 font-sans">
      {/* Bio and Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Biography */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-2 border-gray-300 pb-2 mb-4 dark:text-gray-100">
            📜 Biography
          </h2>

          <p className="text-gray-700 leading-loose text-base dark:text-gray-100">
            Hey! I'm{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Chetan Shirahatti
            </span>
            , a{" "}
            <span className="font-medium text-blue-600">
              Software Engineer
            </span>{" "}
            specializing in backend development, industrial automation
            software, image-processing systems, and enterprise applications.
            <br />
            <br />
            I work extensively with{" "}
            <span className="font-medium underline">Java</span>,{" "}
            <span className="font-medium underline">Spring Boot</span>,{" "}
            <span className="font-medium underline">MySQL</span>,{" "}
            <span className="font-medium underline">REST APIs</span>,{" "}
            <span className="font-medium underline">FTP Systems</span>, and{" "}
            <span className="font-medium underline">Git</span>.
            <br />
            <br />
            Recently, I have been working on production-grade applications,
            image synchronization systems, industrial vision integrations,
            deployment workflows, logging & monitoring, and server-side
            application development.
          </p>

          <a
            href="https://drive.google.com/file/d/1yp9_C68GcpX94k6kMgImxEQeCGGDc99X/view?usp=drive_link"
            className="inline-flex items-center gap-2 mt-6 bg-gray-800 text-white px-6 py-3 font-semibold rounded hover:bg-gray-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* Personal Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-2 border-gray-300 pb-2 mb-4 dark:text-gray-100">
            👤 Personal Details
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
              <strong>Role:</strong> Software Engineer | Java Backend Developer
            </li>

            <li className="flex items-center gap-2">
              <FaBookOpen className="text-gray-600" />
              <strong>Degree:</strong> MCA
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-600" />
              <strong>Email:</strong> chetanpshi9@gmail.com
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-600" />
              <strong>Phone:</strong> +91 7483161971
            </li>
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-2 border-gray-300 pb-2 mb-10 dark:text-gray-200">
          💻 Recently Learned & Working Technologies
        </h2>

        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          <TechIcon
            icon={<FaJava className="text-red-600" />}
            name="Java"
          />

          <TechIcon
            icon={<SiSpringboot className="text-green-600" />}
            name="Spring Boot"
          />

          <TechIcon
            icon={<SiHibernate className="text-yellow-600" />}
            name="Hibernate"
          />

          <TechIcon
            icon={<FaDatabase className="text-blue-600" />}
            name="SQL"
          />

          <TechIcon
            icon={<SiMysql className="text-blue-500" />}
            name="MySQL"
          />

          <TechIcon
            icon={<FaServer className="text-gray-600" />}
            name="REST API"
          />

          <TechIcon
            icon={<SiApachemaven className="text-red-500" />}
            name="Maven"
          />

          <TechIcon
            icon={<SiPostman className="text-orange-500" />}
            name="Postman"
          />

          <TechIcon
            icon={<FaGitAlt className="text-red-500" />}
            name="Git"
          />

          <TechIcon
            icon={<FaGithub className="text-gray-800 dark:text-white" />}
            name="GitHub"
          />

          <TechIcon
            icon={<SiGitlab className="text-orange-600" />}
            name="GitLab"
          />
        </div>
      </div>
    </section>
  );
};

const TechIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center min-w-[90px]">
      <div className="text-5xl hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <span className="mt-3 text-sm font-medium text-center dark:text-gray-300">
        {name}
      </span>
    </div>
  );
};

export default AboutMe;
