import { useState } from "react";
import {
  SiPython, SiCplusplus, SiJavascript, SiJquery, SiBootstrap, SiTailwindcss,
  SiCss3, SiReact, SiDjango, SiNodedotjs, SiFlutter, SiFigma, SiAdobephotoshop,
  SiAdobeaftereffects, SiAdobeillustrator, SiMysql, SiMongodb, SiFirebase,
} from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaCode } from "react-icons/fa";

const techStack = [
  { icon: <SiPython size={30} />, name: "Python", category: "AI/ML" },
  { icon: <LiaJava size={30} />, name: "Java", category: "Backend" },
  { icon: <SiCplusplus size={30} />, name: "C++", category: "Backend" },
  { icon: <FaCode size={30} />, name: "C", category: "Backend" },
  { icon: <SiJavascript size={30} />, name: "JavaScript", category: "Frontend" },
  { icon: <SiReact size={30} />, name: "React", category: "Frontend" },
  { icon: <SiJquery size={30} />, name: "jQuery", category: "Frontend" },
  { icon: <SiBootstrap size={30} />, name: "Bootstrap", category: "Frontend" },
  { icon: <SiTailwindcss size={30} />, name: "Tailwind", category: "Frontend" },
  { icon: <SiCss3 size={30} />, name: "CSS", category: "Frontend" },
  { icon: <SiDjango size={30} />, name: "Django", category: "Backend" },
  { icon: <SiNodedotjs size={30} />, name: "Node.js", category: "Backend" },
  { icon: <SiFlutter size={30} />, name: "Flutter", category: "Mobile" },
  { icon: <SiMysql size={30} />, name: "MySQL", category: "Database" },
  { icon: <SiMongodb size={30} />, name: "MongoDB", category: "Database" },
  { icon: <SiFirebase size={30} />, name: "Firebase", category: "Database" },
  { icon: <SiFigma size={30} />, name: "Figma", category: "Design Tools" },
  { icon: <SiAdobephotoshop size={30} />, name: "Photoshop", category: "Design Tools" },
  { icon: <SiAdobeaftereffects size={30} />, name: "After Effects", category: "Design Tools" },
  { icon: <SiAdobeillustrator size={30} />, name: "Illustrator", category: "Design Tools" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Mobile", "Design Tools", "AI/ML"];

const About = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStack = activeCategory === "All"
    ? techStack
    : techStack.filter(tech => tech.category === activeCategory);

  return (
    <div className="w-full bg-black text-white px-6 sm:px-12 lg:px-40 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-red-600">About Me</h1>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-12">
          I'm <span className="text-white font-medium">Anandhu Kannan</span> from Kerala, passionate about creating secure and performant applications that benefit end users. I specialize in full-stack development and design with a strong focus on usability and performance.
        </p>

        {/* Technical Stack Heading */}
        <h5 className="text-white font-semibold text-lg sm:text-xl mb-4">Technical Stack</h5>

        {/* Category Filter Buttons */}
        <div className="flex overflow-x-auto space-x-3 mb-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full border ${
                activeCategory === category
                  ? "bg-white text-black font-semibold"
                  : "text-white border-gray-500 hover:border-white"
              } transition whitespace-nowrap`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-12">
          {filteredStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-gray-300 hover:text-white transition">
              <div className="mb-1">{tech.icon}</div>
              <span className="text-xs text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-gray-300">
          <div>
            <h2 className="text-white font-semibold mb-2">Education</h2>
            <p className="mb-2">🎓 BCA – NSS College, Rajakumari, Idukki (2022)</p>
            <p>🎓 MCA – FISAT, Mookkannoor, Angamaly, Ernakulam (2025)</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-2">Achievements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Student Mentor</li>
              <li>Built oral biopsy detection system – Anoor Dental College</li>
              <li>Developed 10+ e-commerce websites</li>
              <li>Freelance Web Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
