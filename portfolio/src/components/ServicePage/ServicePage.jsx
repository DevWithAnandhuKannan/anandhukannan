import { Monitor, Code2, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: <Monitor size={40} />,
    title: "Web Designing",
    description: "Crafting modern, responsive, and aesthetic designs for websites.",
    color: "bg-purple-700",
  },
  {
    icon: <Code2 size={40} />,
    title: "Web Applications",
    description: "Building scalable web apps using PHP, Django, React, and Node.js.",
    color: "bg-blue-700",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile Apps",
    description: "Developing cross-platform apps using Flutter with great performance.",
    color: "bg-green-700",
  },
  {
    icon: <Layers size={40} />,
    title: "AI / ML Models",
    description: "Designing intelligent systems using machine learning and deep learning frameworks.",
    color: "bg-red-700",
  },
];

const Services = () => {
  return (
    <div className="w-full bg-black text-white px-6 sm:px-12 lg:px-40 py-16 h-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-xl sm:text-2xl font-semibold mb-2 text-red-500">Services</h1>
          <p className="text-sm sm:text-base text-gray-400">
            We offer a wide range of services to cater to your needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Colored icon box */}
              <div className={`w-full h-60 flex items-center justify-center ${service.color}`}>
                {service.icon}
              </div>

              {/* Title and Description */}
              <div className="mt-4 px-2">
                <p className="text-lg font-semibold">{service.title}</p>
                <span className="text-sm text-gray-400 block mt-1">{service.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
