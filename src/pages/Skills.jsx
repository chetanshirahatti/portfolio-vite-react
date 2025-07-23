const skillsData = [
  {
    emoji: "💻",
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", value: 80 },
      { name: "Dart", value: 75 },
      { name: "Python", value: 70 },
      { name: "SQL", value: 70 },
    ],
  },
  {
    emoji: "🌐",
    title: "Web Stack",
    skills: [
      { name: "HTML", value: 80 },
      { name: "CSS", value: 85 },
      { name: "Tailwind CSS", value: 80 },
      { name: "React.js", value: 80 },
    ],
  },

  {
    emoji: "📱",
    title: "Mobile Development",
    skills: [
      { name: "Flutter", value: 80 },
      { name: "Dart", value: 75 },
      { name: "Firebase", value: 70 },
      { name: "GetX", value: 70 },
    ],
  },

  {
    emoji: "⚙️",
    title: "Backend",
    skills: [
      { name: "Node.js", value: 70 },
      { name: "Express.js", value: 70 },
      { name: "Next.js", value: 70 },
    ],
  },
  {
    emoji: "🗃️",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", value: 70 },
      { name: "MySQL", value: 70 },
      { name: "MongoDB", value: 65 },
    ],
  },
  {
    emoji: "🛠️",
    title: "Tools",
    skills: [
      { name: "VS Code", value: 95 },
      { name: "Postman", value: 90 },
      { name: "Android Studio", value: 70 },
      { name: "Figma", value: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800  ">
      <h2 className="text-3xl font-bold mb-10 border-b-2 pb-2 border-orange-500 dark:text-gray-100">
        🤖 Skills and Expertise
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 "
          >
            <div className="text-4xl mb-2">{category.emoji}</div>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>

            {category.skills.map((skill, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="h-2 bg-gray-500 rounded"
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
