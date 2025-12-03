import React from "react";
import {
    SiMongodb,
    SiMysql,
    SiExpress,
    SiJavascript,
    SiTailwindcss,
    SiPm2,
    SiFlask,        // ⬅️ Flask icon added
} from "react-icons/si";
import {
    FaReact,
    FaNodeJs,
    FaEnvelope,
    FaServer,
    FaCloud,
    FaTools,
    FaWhatsapp,
    FaGithub,
} from "react-icons/fa";

function Skills() {
    const skillList = [
        // ---------------- Core ----------------
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },

        // ---------------- Databases ----------------
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Database Design", icon: <FaServer className="text-purple-400" /> },

        // ---------------- API Integration ----------------
        { name: "WhatsApp API Integration", icon: <FaWhatsapp className="text-green-400" /> },

        // ---------------- Backend / Tools ----------------
        { name: "Flask", icon: <SiFlask className="text-orange-400" /> },
        { name: "Nodemailer", icon: <FaEnvelope className="text-red-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },   // ⬅️ GitHub here

        // ---------------- Deployment ----------------
        { name: "VPS Deployment", icon: <FaCloud className="text-teal-300" /> },
        { name: "PM2 Process Manager", icon: <SiPm2 className="text-lime-400" /> },
        { name: "Linux / SSH", icon: <FaTools className="text-gray-300" /> },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-slate-800 text-white px-6 sm:px-10 md:px-20 py-20"
        >
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide">
                My <span className="text-blue-400">Skills</span>
            </h1>

            <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                gap-6 md:gap-10 justify-center animate-fadeUp"
            >
                {skillList.map((skill, index) => (
                    <div
                        key={index}
                        className="group bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg
                        border border-white/20 flex flex-col items-center gap-3 
                        hover:scale-110 hover:bg-white/20 transition-all duration-300"
                    >
                        <div className="text-4xl group-hover:scale-125 duration-300">
                            {skill.icon}
                        </div>
                        <p className="font-semibold text-center tracking-wide">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }
      `}</style>
        </section>
    );
}

export default Skills;
