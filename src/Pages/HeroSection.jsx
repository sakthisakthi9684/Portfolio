import React, { useEffect, useState } from "react";
import "@fontsource/poppins"; // Make sure installed via npm
import { useNavigate } from "react-router-dom";
import bg from "../assets/web-bg.jpg"

const skills = [
  "Creating responsive & dynamic UIs with React.js",
  "Building RESTful APIs with Node.js & Express.js",
  "Managing databases with MongoDB & MySQL",
  "JWT authentication, API integration, file uploads with Multer",
  "Setting up cron jobs & automation",
  "VPS deployment (Nginx, PM2, Hostinger), performance optimization",
  "Server Management",
  "Data Flow Management",
  "Designing Data Flow Architecture"
];

function HeroSection() {
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/dashboard"); // Navigate to dashboard
  };

  setTimeout(() => {
    handleButton()
  }, 5000);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = 1200;

    if (!isDeleting && charIndex < skills[skillIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentSkill(prev => prev + skills[skillIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === skills[skillIndex].length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentSkill(prev => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSkillIndex((skillIndex + 1) % skills.length);
    }
  }, [charIndex, isDeleting, skillIndex]);

  return (
    <div>
      <section
        className="relative min-h-screen flex items-center  px-6 overflow-hidden font-poppins bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover", // 🔹 fills the entire section
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 animate-gradientBackground"></div>

 
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse opacity-60"></div> */}

        {/* Hero Card */}
        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl text-center transform transition-transform hover:scale-105">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-fadeInDown">
            Hello, I am <span className="text-white drop-shadow-lg">A. Sakthisudalai!</span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-5 leading-relaxed animate-fadeInUp">
            MERN Stack Developer | 1.5 years of experience
          </p>

          <p className="text-sm md:text-base text-white h-10 font-medium tracking-wide">
            {currentSkill}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </p>

          <button
            onClick={handleButton}
            className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white font-semibold shadow-md hover:scale-110 transition-transform animate-bounce"
          >
            Let's Started
          </button>
        </div>


        <style jsx>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }

        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground {
          background-size: 200% 200%;
          animation: gradientBackground 15s ease infinite;
        }
      `}</style>
      </section>
    </div>

  );
}

export default HeroSection;
