import React, { useEffect, useRef } from "react";

const LandingPage = () => {
  const canvasRef = useRef(null);

  // Star animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          dx: Math.random() * 0.05,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.dx;
        if (star.alpha <= 0 || star.alpha >= 1) star.dx = -star.dx;
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initStars();
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center flex-col px-4">
      {/* Starfield canvas background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />


      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-md">
          Hi, I'm Anandhu Kannan
        </h1>
        <h2 className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-6 max-w-[90%] md:max-w-[60%] mx-auto leading-relaxed drop-shadow-sm">
          I build machine learning models and specialize in Android, iOS, and web development, with a strong focus on security and performance.
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
