"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

import { Headernavbar } from "./components/header";
import { HomePage } from "./pages/home/page";
import { AboutSection } from "./pages/about/page";
import { SkillsSection } from "./pages/skills/page";
import { ExperienceAndProjectsSection } from "./pages/experience/page";
import { EducationCertifications } from "./pages/education/page";
import BlogSection from "./blogs/page";

import { Footer } from "./components/footer";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much user scrolled
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page_js">
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "5px",
          background: "linear-gradient(90deg, #ff8a00, #e52e71)", // Adjust color
          zIndex: 9999,
          transition: "width 0.2s ease-out",
        }}
      ></div>

      <Headernavbar />
      <HomePage />
      <AboutSection />
      <SkillsSection />
      <ExperienceAndProjectsSection />
      <EducationCertifications />
      <BlogSection />
      <Footer />
    </div>
  );
}
