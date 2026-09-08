import React from "react";

const skillsData = [
  {
    emoji: "☕",
    title: "Programming Languages",
    skills: [
      { name: "Java", value: 90 },
      { name: "SQL", value: 85 },
      { name: "JavaScript", value: 75 },
      { name: "Python", value: 70 },
    ],
  },
  {
    emoji: "🚀",
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", value: 85 },
      { name: "REST APIs", value: 85 },
      { name: "Hibernate / JPA", value: 80 },
      { name: "Maven", value: 80 },
    ],
  },
  {
    emoji: "🗄️",
    title: "Databases",
    skills: [
      { name: "MySQL", value: 85 },
      { name: "PostgreSQL", value: 75 },
      { name: "MongoDB", value: 65 },
    ],
  },
  {
    emoji: "🏭",
    title: "Industrial Automation",
    skills: [
      { name: "FTP Image Processing", value: 90 },
      { name: "Keyence Vision Systems", value: 85 },
      { name: "Cognex Cameras", value: 80 },
      { name: "Production Support", value: 90 },
    ],
  },
  {
    emoji: "⚙️",
    title: "Dev Tools",
    skills: [
      { name: "Git", value: 90 },
      { name: "GitHub", value: 90 },
      { name: "Postman", value: 85 },
      { name: "VS Code", value: 95 },
    ],
  },
  {
    emoji: "🌐",
    title: "Frontend",
    skills: [
      { name: "React.js", value: 75 },
      { name: "HTML", value: 85 },
      { name: "CSS", value: 80 },
      { name: "Tailwind CSS", value: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        Skills & Technologies
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl mb-3">{category.emoji}</div>

            <h3 className="text-xl font-semibold mb-5 dark:text-white">
              {category.title}
            </h3>

            {category.skills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-1 text-sm">
                  <span className="dark:text-gray-300">{skill.name}</span>
                  <span className="dark:text-gray-300">{skill.value}%</span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full transition-all duration-700"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
