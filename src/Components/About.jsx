import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full overflow-x-hidden flex flex-col md:flex-row 
      items-center justify-between gap-12 md:gap-20 px-6 sm:px-10 md:px-20 py-20 
      bg-gradient-to-br from-slate-900 to-gray-800"
    >

      {/* LEFT CONTENT */}
      <div className="text-white w-full md:w-1/2 max-w-2xl animate-fadeIn text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
          About <span className="text-blue-400">Me</span>
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I'm <span className="text-blue-300 font-semibold">A. Sakthisudalai</span>, a
          <span className="text-blue-300 font-semibold"> MERN Stack Developer </span>
          with 1.5+ years of experience building scalable and high-performance applications.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          I work with technologies like React.js, Node.js, Express, MongoDB and MySQL to create
          powerful end-to-end systems.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          My focus is UI/UX, performance optimization, automation and writing maintainable clean code.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          My mission — build meaningful products, solve problems and grow every day.
        </p>

        <button
          onClick={() => (window.location.href = "#skills")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold 
          shadow-lg transition-all"
        >
          View Skills
        </button>
      </div>

      {/* RIGHT CODE BLOCK */}
      <div className="w-full md:w-1/2 max-w-xl animate-fadeInCode">
        <div className="bg-[#0d1224] border border-blue-500/20 rounded-2xl p-6 shadow-2xl 
        backdrop-blur-xl neon-border overflow-hidden">

          {/* Window Header Dots */}
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          {/* Code */}
          <pre
            className="text-blue-100 text-sm sm:text-base leading-relaxed font-mono 
            whitespace-pre-wrap break-words"
          >
{`// MERN Stack Developer Profile
const developer = {
  name: "A. Sakthisudalai",
  experience: "1.5+ Years",
  frontend: ["React.js"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "MySQL"],
  strengths: [
    "Clean Code",
    "Problem Solving",
    "Automation",
    "Creative UI/UX"
  ],
  goal: "Build scalable real-world products"
};`}
          </pre>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.9s ease-out forwards; }

        @keyframes fadeInCode {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInCode { animation: fadeInCode 1s ease-out forwards; }

        .neon-border {
          box-shadow: 0px 0px 25px #2563eb55, inset 0px 0px 15px #1d4ed860;
        }
      `}</style>
    </section>
  );
}

export default About;
