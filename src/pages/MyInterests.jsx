
import { motion } from "framer-motion";

const interests = [
  {
    emoji: "🏭",
    title: "Industrial Automation",
    description:
      "Interested in machine vision systems, smart manufacturing, industrial cameras, and automation technologies.",
  },
  {
    emoji: "💻",
    title: "Technology Learning",
    description:
      "Continuously exploring Java, Spring Boot, system design, backend development, and emerging software technologies.",
  },
  {
    emoji: "📚",
    title: "Self Development",
    description:
      "Enjoy reading books and content focused on personal growth, productivity, leadership, and lifelong learning.",
  },
  {
    emoji: "🌍",
    title: "Travel & Exploration",
    description:
      "Passionate about exploring new places, cultures, and experiences that broaden perspectives and creativity.",
  },
  {
    emoji: "📷",
    title: "Photography",
    description:
      "Enjoy capturing landscapes, nature, architecture, and memorable moments through photography.",
  },
  {
    emoji: "🕉️",
    title: "Spirituality & Culture",
    description:
      "Interested in Indian culture, mythology, philosophy, and values that inspire personal and professional life.",
  },
];

const MyInterests = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        Interests
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">{interest.emoji}</div>

            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              {interest.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyInterests;
