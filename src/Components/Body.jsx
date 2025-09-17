import React, { useEffect, useState } from "react";
import HeroSection from "../Pages/HeroSection"; // your previously created HeroSection

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
function Body() {

    const [currentSkill, setCurrentSkill] = useState("");
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter effect
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
        <main className="relative font-poppins">
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 animate-gradientBackground"></div>
                <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse opacity-60"></div>

                {/* Hero Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-16 max-w-3xl text-center transform transition-transform hover:scale-105">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-fadeInDown">
                        Hello, I am <span className="text-white drop-shadow-lg">A. Sakthisudalai!</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed animate-fadeInUp">
                        MERN Stack Developer | 1.5 years of experience
                    </p>
                    <p className="text-md md:text-lg text-white h-10 font-medium tracking-wide">
                        {currentSkill}
                        <span className="border-r-2 border-white animate-pulse ml-1"></span>
                    </p>
                    <button
                        onClick={() => window.location.href = "#contact"}
                        className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-110 transition-transform animate-bounce"
                    >
                        Let's Connect
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

            {/* About Section */}
            <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-white text-center py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                    About Me
                </h2>
                <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
                    I am A. Sakthisudalai, a MERN Stack Developer with 1.5 years of experience. I create responsive and dynamic web applications with React.js, develop robust APIs with Node.js & Express, manage databases with MongoDB & MySQL, and deploy projects on VPS servers.
                </p>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-800 text-white text-center py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                    Skills
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl text-left">
                    <li>• Creating responsive & dynamic UIs with React.js</li>
                    <li>• Building RESTful APIs with Node.js & Express.js</li>
                    <li>• Managing databases with MongoDB & MySQL</li>
                    <li>• JWT authentication, API integration, file uploads with Multer</li>
                    <li>• Setting up cron jobs & automation</li>
                    <li>• VPS deployment (Nginx, PM2, Hostinger), performance optimization</li>
                    <li>• Server Management</li>
                    <li>• Data Flow Management</li>
                    <li>• Designing Data Flow Architecture</li>
                </ul>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-white text-center py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                    Experience
                </h2>
                <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
                    Worked on multiple MERN stack projects, developed real-time chat applications, automated processes using cron jobs, and deployed apps on cloud servers for optimal performance.
                </p>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-800 text-white text-center py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                    Certificates
                </h2>
                <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
                    Completed multiple professional courses in React, Node.js, and Full-Stack development.
                </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-white text-center py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                    Contact
                </h2>
                <p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-6">
                    Get in touch for project collaboration, freelance work, or hiring inquiries.
                </p>
                <a
                    href="mailto:your-email@example.com"
                    className="px-6 py-3 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                    Email Me
                </a>
            </section>
        </main>
    );
}

export default Body;
