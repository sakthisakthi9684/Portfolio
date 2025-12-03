import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import zohoLogo from "../assets/Zoho.jpg";
import besantLogo from "../assets/Besant.jpg";
import quantumLogo from "../assets/qsis.png";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Quantum Sharq Innovative Solutions",
      location: "Surandai, Tenkasi",
      period: "Jun 2024 – Present (1 year 6 Months)",
      logo: quantumLogo,
      description:
        "Working as a Full-Stack Developer on HRMS, Physiotherapy Software, and Attendance Systems. Handling automation, APIs, and cloud deployments.",
    },
    {
      role: "Java Full-Stack Intern",
      company: "Besant Technologies",
      location: "Katpadi, Vellore",
      period: "Jan 2024 – Jun 2024 (6 Months)",
      logo: besantLogo,
      description:
        "Focused on Java Full-Stack Development using React, Spring Boot, and SQL. Contributed to an e-commerce project and backend APIs.",
    },
    {
      role: "Student (Training)",
      company: "Zoho Schools of Learning",
      location: "Porur, Chennai",
      period: "Aug 2022 – Oct 2022 (3 Months)",
      logo: zohoLogo,
      description:
        "Completed 3 months of training in HTML, CSS, and JavaScript. Learned fundamentals of frontend development and built small projects.",
    },
  ];


  const [activeIndex, setActiveIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  // AUTO SLIDE
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [autoSlide]);

  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-gray-800 text-white px-6 sm:px-10 md:px-20 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide">
        My <span className="text-blue-400">Experience</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT — LIST */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setAutoSlide(false); // stop auto slide when user interacts
              }}
              className={`
                cursor-pointer p-6 rounded-3xl flex flex-col gap-4 w-full
                transition-all duration-500 backdrop-blur-xl shadow-lg border
                ${activeIndex === idx
                  ? "bg-gradient-to-br from-blue-500/30 to-purple-500/20 border-blue-400 shadow-blue-500/40 scale-[1.04]"
                  : "bg-white/10 border-white/10 hover:bg-white/20 hover:scale-[1.02]"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white/25 shadow-lg flex items-center justify-center p-2">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-blue-300">{exp.role}</h2>
                  <p className="text-gray-200 font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <FaCalendarAlt className="text-purple-300" />
                <p>{exp.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — DESCRIPTION */}
        <div
          key={activeIndex}
          className="
    lg:w-1/2 p-12 rounded-3xl
    bg-gradient-to-br from-white/20 to-white/5
    border border-white/30 backdrop-blur-2xl
    shadow-[0_0_40px_rgba(0,0,0,0.4)]
    hover:shadow-[0_0_60px_rgba(0,0,0,0.6)]
    transition-all duration-500 animate-cardFade
  "
        >
          <div className="flex items-center gap-6 mb-8">
            {/* Logo */}
            <div className="
      w-24 h-24 rounded-3xl 
      bg-white/30 p-3
      shadow-inner shadow-black/20
      border border-white/40
    ">
              <img
                src={experiences[activeIndex].logo}
                alt="company"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            {/* Role + Company */}
            <div>
              <h2 className="text-3xl font-extrabold text-blue-300 drop-shadow-md">
                {experiences[activeIndex].role}
              </h2>
              <p className="text-xl text-gray-200 opacity-90 mt-1">
                {experiences[activeIndex].company}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {experiences[activeIndex].location}
              </p>
            </div>
          </div>

          {/* Period */}
          <div className="bg-white/10 px-4 py-2 rounded-xl w-fit mb-4 border border-white/20">
            <p className="text-gray-300 italic text-sm tracking-wide">
              {experiences[activeIndex].period}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-100 leading-relaxed text-lg tracking-wide text-justify">
            {experiences[activeIndex].description}
          </p>
        </div>

      </div>

      <style>{`
        @keyframes cardFade {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-cardFade {
          animation: cardFade 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Experience;
