import React from "react";
import {
    FaPhone,
    FaEnvelope,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

function Contact() {
    return (
        <section
            id="contact"
            className="min-h-full w-full bg-gradient-to-br from-slate-900 to-gray-800 text-white px-6 sm:px-10 md:px-20 py-20"
        >
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide">
                Contact <span className="text-blue-400">Me</span>
            </h1>

            <div className="flex justify-center gap-10 sm:gap-14 flex-wrap max-w-4xl mx-auto">

                {/* PHONE CALL */}
                <div
                    className="relative group cursor-pointer"
                    onClick={() => (window.location.href = "tel:+919790112364")}
                >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 shadow-xl transition">
                        <FaPhone className="text-4xl sm:text-5xl text-green-400" />
                    </div>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                        Call Now
                    </span>
                </div>

                {/* EMAIL */}
                <div
                    className="relative group cursor-pointer"
                    onClick={() => (window.location.href = "mailto:sakthisakthi9684@gmail.com")}
                >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 shadow-xl transition">
                        <FaEnvelope className="text-4xl sm:text-5xl text-yellow-300" />
                    </div>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                        Send Email
                    </span>
                </div>

                {/* WHATSAPP */}
                <div
                    className="relative group cursor-pointer"
                    onClick={() => window.open("https://wa.me/919790112364", "_blank")}
                >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 shadow-xl transition">
                        <FaWhatsapp className="text-4xl sm:text-5xl text-green-500" />
                    </div>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                        WhatsApp Chat
                    </span>
                </div>

                {/* LINKEDIN */}
                <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                        window.open("https://www.linkedin.com/in/sakthisudalai9684/", "_blank")
                    }
                >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 shadow-xl transition">
                        <FaLinkedin className="text-4xl sm:text-5xl text-blue-400" />
                    </div>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                        LinkedIn Profile
                    </span>
                </div>

            </div>
        </section>
    );
}

export default Contact;
