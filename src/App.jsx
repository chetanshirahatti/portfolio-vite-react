import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboutme";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import MyInterests from "./pages/MyInterests";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 mt-16 lg:mt-0 lg:ml-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutme" element={<AboutMe />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/MyInterests" element={<MyInterests />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
