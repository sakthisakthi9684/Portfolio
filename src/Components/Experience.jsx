import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import zohoLogo from "../assets/Zoho.jpg";
import besantLogo from "../assets/Besant.jpg";
import quantumLogo from "../assets/qsis.png";
import useRevealAnimation from "../hooks/useRevealAnimation";

function Experience() {
  useRevealAnimation();

  const experiences = [
    {
      role: "Software Developer",
      company: "Quantum Sharq Innovative Solutions",
      location: "Katpadi, Vellore",
      period: "Jun 2024 – Present (1 year 6 Months)",
      logo: quantumLogo,
      description:
        "Full-Stack Developer with hands-on experience in 10+ projects including HRMS, Physiotherapy, Hospital, Dental, and Skin-Care Clinic Software, along with multiple static websites. Also worked on ML-based Facial Attendance System and the VisionX automation project.",
    },
    {
      role: "Java Full-Stack Intern",
      company: "Besant Technologies",
      location: "Porur, Chennai",
      period: "Jan 2024 – Jun 2024 (6 Months)",
      logo: besantLogo,
      description:
        "Trained in Java Full-Stack Development, built an e-commerce website using React and Spring Boot, practiced LeetCode problem-solving, and learned GitHub version control workflows.",
    },
    {
      role: "Student (Training)",
      company: "Zoho Schools of Learning",
      location: "Surandai, Tenkasi",
      period: "Aug 2022 – Oct 2022 (3 Months)",
      logo: zohoLogo,
      description:
        "Completed 3 months of training in HTML, CSS, and JavaScript. Learned the fundamentals of frontend development and built small projects, including a Fruit Shop website.",
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
      className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-gray-800 
      text-white px-4 sm:px-8 md:px-16 lg:px-20 py-20"
    >
      {/* HEADING */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 tracking-wide animate-fadeSlideIn">
        My <span className="text-blue-400">Experience</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">

        {/* LEFT — LIST */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2 animate-fadeSlideIn">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setAutoSlide(false);
              }}
              className={`cursor-pointer p-4 sm:p-6 rounded-2xl sm:rounded-3xl 
              flex flex-col gap-3 sm:gap-4 w-full transition-all duration-500 
              backdrop-blur-xl shadow-lg border 
              ${
                activeIndex === idx
                  ? "bg-gradient-to-br from-blue-500/30 to-purple-500/20 border-blue-400 shadow-blue-500/40 scale-[1.03]"
                  : "bg-white/10 border-white/10 hover:bg-white/20 hover:scale-[1.02]"
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/25 shadow-lg flex items-center justify-center p-2">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-blue-300">{exp.role}</h2>
                  <p className="text-gray-300 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{exp.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                <FaCalendarAlt className="text-purple-300 text-sm sm:text-base" />
                <p className="text-xs sm:text-sm">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — DESCRIPTION */}
        <div
          key={activeIndex}
          className="
            w-full lg:w-1/2 p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl
            bg-gradient-to-br from-white/20 to-white/5
            border border-white/30 backdrop-blur-2xl
            shadow-[0_0_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_60px_rgba(0,0,0,0.6)]
            transition-all duration-500 animate-card
          "
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div
              className="
                w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                rounded-2xl bg-white/30 p-2 sm:p-3
                shadow-inner shadow-black/20 border border-white/40
              "
            >
              <img
                src={experiences[activeIndex].logo}
                alt="company"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-300">
                {experiences[activeIndex].role}
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 opacity-90">
                {experiences[activeIndex].company}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {experiences[activeIndex].location}
              </p>
            </div>
          </div>

          <div className="bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-xl w-fit mb-3 sm:mb-4 border border-white/20">
            <p className="text-gray-300 italic text-xs sm:text-sm tracking-wide">
              {experiences[activeIndex].period}
            </p>
          </div>

          <p className="text-gray-100 leading-relaxed text-sm sm:text-base md:text-lg tracking-wide text-justify">
            {experiences[activeIndex].description}
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.7s ease-out;
        }

        @keyframes cardFade {
          0% { opacity: 0; transform: translateX(25px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-card {
          animation: cardFade 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Experience;
