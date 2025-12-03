import React from "react";
import {
    SiMongodb,
    SiMysql,
    SiExpress,
    SiJavascript,
    SiTailwindcss,
    SiPm2,
    SiFlask,
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
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },

        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Database Design", icon: <FaServer className="text-purple-400" /> },

        { name: "WhatsApp API Integration", icon: <FaWhatsapp className="text-green-400" /> },

        { name: "Flask", icon: <SiFlask className="text-orange-400" /> },
        { name: "Nodemailer", icon: <FaEnvelope className="text-red-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },

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
                gap-6 md:gap-10 justify-center"
            >
                {skillList.map((skill, index) => (
                    <div
                        key={index}
                        style={{ animationDelay: `${index * 0.15}s` }}   // ⭐ Stagger animation
                        className="skill-card opacity-0 translate-y-6 scale-90
                        group bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg
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

            {/* ⭐ Animations */}
            <style>{`
                @keyframes skillFadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px) scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .skill-card {
                    animation: skillFadeUp 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
}

export default Skills;
