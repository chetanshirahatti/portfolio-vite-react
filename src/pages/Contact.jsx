import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-gray-800 relative">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-extrabold mb-4 relative z-10 dark:text-gray-100"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 max-w-xl dark:text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out for collaborations, freelance work, or just to
        say hello! I'm always open to new opportunities.
      </motion.p>

      {/* Contact Info Box */}
      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 mb-10 space-y-3 border"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:chetanpshi9@gmail.com"
            className="text-blue-600 hover:underline"
          >
            chetanpshi9@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+917483161971" className="text-blue-600 hover:underline">
            +91 74831 61971
          </a>
        </p>
        <p>
          <strong>Location:</strong> Hubli, Karnataka, India
        </p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 text-3xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="https://www.linkedin.com/in/chetanshirahatti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin style={{ color: "#0077B5" }} />
        </a>
        <a
          href="https://github.com/chetanshirahatti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:scale-110 transition-transform duration-300"
        >
          <FaGithub style={{ color: "#181717" }} />
        </a>
        <a
          href="https://x.com/chetanpshi9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
        >
          <FaTwitter style={{ color: "#1DA1F2" }} />
        </a>
        <a
          href="https://www.instagram.com/chetan_p_shirahatti/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram style={{ color: "#E1306C" }} />
        </a>
        <a
          href="mailto:chetanpshi9@gmail.com"
          className="hover:text-red-500 hover:scale-110 transition-transform duration-300"
        >
          <FaEnvelope style={{ color: "#D44638" }} />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
