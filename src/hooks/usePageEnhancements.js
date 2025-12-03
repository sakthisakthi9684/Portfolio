import { useEffect } from "react";

export default function usePageEnhancements() {
    useEffect(() => {
        // Smooth Scroll
        document.documentElement.style.scrollBehavior = "smooth";

        // Scroll Spy (Active navbar highlight)
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll("nav a[data-link]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navLinks.forEach((link) =>
                            link.classList.remove("text-blue-400")
                        );
                        const activeLink = document.querySelector(
                            `nav a[data-link="${entry.target.id}"]`
                        );
                        if (activeLink) activeLink.classList.add("text-blue-400");
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((sec) => observer.observe(sec));

        // Section Reveal Animation
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                    }
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll(".reveal").forEach((el) => {
            revealObserver.observe(el);
        });

        // Scroll progress bar
        const bar = document.getElementById("scroll-progress");
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const progress = (scrollTop / height) * 100;
            bar.style.width = progress + "%";
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
}
