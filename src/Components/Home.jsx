import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import home from "../assets/4961856.jpg";

const skills = [
    "Creating responsive & dynamic UIs with React.js",
    "Building RESTful APIs with Node.js & Express.js",
    "Managing databases with MongoDB & MySQL",
    "JWT authentication, API integration, file uploads",
    "Setting up cron jobs & automation",
    "VPS deployment (Nginx, PM2, Hostinger)",
    "Server & Data Flow Architecture",
];

function Home() {
    const [currentSkill, setCurrentSkill] = useState("");
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const speed = isDeleting ? 40 : 80;
        const pause = 1000;

        if (!isDeleting && charIndex < skills[skillIndex].length) {
            const t = setTimeout(() => {
                setCurrentSkill((p) => p + skills[skillIndex][charIndex]);
                setCharIndex((p) => p + 1);
            }, speed);
            return () => clearTimeout(t);
        } else if (!isDeleting && charIndex === skills[skillIndex].length) {
            const t = setTimeout(() => setIsDeleting(true), pause);
            return () => clearTimeout(t);
        } else if (isDeleting && charIndex > 0) {
            const t = setTimeout(() => {
                setCurrentSkill((p) => p.slice(0, -1));
                setCharIndex((p) => p - 1);
            }, speed);
            return () => clearTimeout(t);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setSkillIndex((p) => (p + 1) % skills.length);
        }
    }, [charIndex, isDeleting, skillIndex]);

    return (
        <section id="home" className="min-h-screen w-full overflow-x-hidden flex flex-col md:flex-row 
items-center justify-center px-6 sm:px-10 md:px-20 py-16 
bg-gradient-to-br from-slate-900 to-gray-800">

            {/* LEFT IMAGE */}
            <div className="hidden md:flex md:w-1/2 justify-center mb-10 md:mb-0">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-float max-w-xs sm:max-w-sm md:max-w-full">
                    <img
                        src={home}
                        alt="Developer"
                        className="w-full h-auto rounded-2xl shadow-xl"
                    />
                </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="text-white w-full md:w-1/2 md:pl-12 text-center md:text-left">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    Hi, I’m <span className="text-blue-400 whitespace-nowrap">A. Sakthisudalai</span> 👋
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-300">
                    MERN Stack Developer • <span className="text-blue-300">1.5+ Years Experience</span>
                </p>

                {/* TYPEWRITER */}
                <p className="mt-4 text-lg sm:text-xl font-medium text-blue-200 min-h-[45px]">
                    {currentSkill}
                    <span className="border-r-2 border-blue-300 ml-1 animate-pulse"></span>
                </p>

                {/* ICONS */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-3xl sm:text-4xl text-blue-300 mt-6">
                    <FaReact />
                    <FaNodeJs />
                    <SiExpress />
                    <FaDatabase />
                    <SiMongodb />
                </div>

                <button
                    onClick={() => (window.location.href = "#about")}
                    className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 shadow-md rounded-full text-white font-semibold transition-all w-fit mx-auto md:mx-0"
                >
                    About me
                </button>
            </div>

            {/* FLOAT ANIMATION */}
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 3.5s ease-in-out infinite;
                }
                `}
            </style>
        </section>
    );
}

export default Home;
