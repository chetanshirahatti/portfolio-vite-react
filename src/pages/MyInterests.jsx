import { motion } from "framer-motion";

const interests = [
  {
    emoji: "📺",
    title: "YouTube Watching",
    description:
      "I explore inspiring videos, tech explainers, and life-changing content on YouTube that fuel curiosity and growth.",
  },

  {
    emoji: "🕉️",
    title: "Mythological Series",
    description:
      "Mythological stories like Ramayana and Mahabharata fascinate me. I admire the values, visuals, and lessons they offer.",
  },
  {
    emoji: "🌍",
    title: "Travel & Exploration",
    description:
      "I love traveling to rural places, hill stations, and cultural spots. Each journey gives me a story and a soul reset.",
  },
  {
    emoji: "📚",
    title: "Life-Changing Books",
    description:
      "Books that talk about self-growth, spirituality, and real struggles inspire me and shape how I think and act.",
  },

  {
    emoji: "📸",
    title: "Photography",
    description:
      "Capturing raw, unscripted moments — from kids playing in nature to old temples — helps me preserve feelings, not just images.",
  },
  {
    emoji: "🎧",
    title: "Inspiring Podcasts",
    description:
      "Podcasts fuel my mind with real stories, expert insights, and ideas that drive my goals.",
  },
];

const MyInterests = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 border-b-2 pb-2 border-orange-500 dark:text-gray-100">
        🌈 My Unique Interests
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-3">{interest.emoji}</div>
            <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
            <p className="text-sm text-gray-600">{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyInterests;
