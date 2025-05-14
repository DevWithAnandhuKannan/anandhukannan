const projects = [
  {
    name: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind CSS.",
    tech: "React, Tailwind, Vite",
    link: "https://yourportfolio.com",
  },
  {
    name: "E-Commerce App",
    description: "A full-stack e-commerce app with cart, payment, and admin panel.",
    tech: "Node.js, Express, MongoDB, React",
    link: "https://github.com/yourname/ecommerce-app",
  },
  {
    name: "Chat Application",
    description: "Real-time chat app with socket.io and private messaging.",
    tech: "React, Node.js, Socket.io",
    link: "",
  },
  {
    name: "AI Text Summarizer",
    description: "Summarizes articles using OpenAI's GPT API integration.",
    tech: "Python, Flask, OpenAI API",
    link: "https://github.com/yourname/ai-summarizer",
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-black text-white px-6 sm:px-12 lg:px-40 py-16 h-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-xl sm:text-2xl font-semibold mb-2 text-red-500">Projects</h1>
          <p className="text-sm sm:text-base text-gray-400">
            A selection of projects showcasing my work in development.
          </p>
        </div>

        {/* Horizontal Scroll Container with Snap */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 scrollbar-hide">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] max-w-xs bg-gray-900 p-6 rounded-lg shadow-md flex-shrink-0 snap-start"
            >
              <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
              <p className="text-sm text-gray-400 mb-3">{project.description}</p>
              <p className="text-xs text-gray-500 mb-4">Tech Used: {project.tech}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
