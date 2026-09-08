
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-4 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let's Work Together
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Open to software engineering opportunities, collaborations, and
        innovative projects.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 mb-10 border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-lg font-medium dark:text-white">
          📧 chetanpshi9@gmail.com
        </p>

        <p className="text-lg font-medium mt-2 dark:text-white">
          📱 +91 74831 61971
        </p>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          📍 Hubli, Karnataka, India
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-8 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="https://www.linkedin.com/in/chetanshirahatti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition duration-300 text-[#0077B5]"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/chetanshirahatti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition duration-300 dark:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/chetan_p_shirahatti/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition duration-300 text-pink-600"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:chetanpshi9@gmail.com"
          className="hover:scale-125 transition duration-300 text-red-500"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
