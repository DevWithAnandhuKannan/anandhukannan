import React from 'react';

const Testimonies = () => {
  const testimonies = [
    {
      name: "John Doe",
      rating: 5, // Rating out of 5
      experience: "Anandhu delivered exceptional work on the project, keeping everything on schedule and ensuring a high-quality result.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      experience: "Working with Anandhu was a great experience. He has great technical skills and a good sense of design.",
    },
    {
      name: "Michael Lee",
      rating: 5,
      experience: "A professional with a strong work ethic. Anandhu's solutions are top-notch, and he consistently exceeds expectations.",
    },
    {
      name: "Sarah White",
      rating: 5,
      experience: "Anandhu helped us design and develop a fantastic app. His work exceeded expectations.",
    },
    {
      name: "David Black",
      rating: 4,
      experience: "Working with Anandhu was seamless. His technical knowledge and problem-solving abilities are exceptional.",
    },
  ];

  return (
    <section className="w-full bg-black text-white px-6 sm:px-12 lg:px-40 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-16 text-center text-white opacity-90">
          What People Say
        </h2>

        {/* Horizontal Scroll Wrapper */}
        <div className="overflow-x-scroll flex gap-8 py-4 px-6">
          {/* Testimonials Wrapper */}
          <div className="flex gap-8">
            {testimonies.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex-none w-72"
              >
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-gray-400 ${i < testimonial.rating ? 'text-yellow-400' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Experience */}
                <p className="text-sm text-gray-600 mb-4 italic">"{testimonial.experience}"</p>

                {/* Name */}
                <div className="text-center">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
