import { useState, useEffect, useRef } from "react";
import {
  FiChevronRight,
} from "react-icons/fi";

import Navigation from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Contact from "../components/contact-form/contact-form";
import Footer from "../components/footer/footer";
import Blog from "../components/blog/blog";
import Projects from "../components/projects/projects";
import Achievements from "../components/achivements/achivements";
import Skills from "../components/skills/skills";
import Experience from "../components/experiences/experiences";

import skillsData from "../utils/Skills/skills";
import experienceData from "../utils/Experiences/experiences";
import blogPosts from "../utils/Blogs/Blogs";
import projectsData from "../utils/Projects/projects";
import achievementsData from "../utils/Achivements/achivements";
import testimonialsData from "../utils/Testimonials/testimonials";
import personalInfo from "../utils/PersonalDetails/personalDetails";
import "./portfolio.scss";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    achievements: useRef(null),
    contact: useRef(null),
  };

  // Custom cursor effect
  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsCursorVisible(true);
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll
      Object.entries(sections).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    sections[sectionId].current?.scrollIntoView({ behavior: "smooth" });
  };

  // Toggle dark mode — apply .dark on <html> so CSS variables cascade everywhere
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`portfolio ${isDarkMode ? "dark" : "light"}`}>
      {/* Custom Cursor */}
      {isCursorVisible && (
        <div
          className="custom-cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
      )}

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Component */}
      <Navigation 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        personalInfo={personalInfo}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section - Imported Component */}
        <div  ref={sections.home}>
          <Hero  personalInfo={personalInfo} scrollToSection={scrollToSection} />
        </div>

        {/* About Section - Imported Component */}
        <div ref={sections.about}>
          <About personalInfo={personalInfo} />
        </div>

        {/* Skills Section - Imported Component */}
        <div ref={sections.skills}>
          <Skills skills={skillsData} />
        </div>

        {/* Experience Section - Imported Component */}
        {/* <div ref={sections.experience}>
          <Experience experiences={experienceData} />
        </div> */}

        {/* Projects Section - Imported Component */}
        <div ref={sections.projects}>
          <Projects projects={projectsData} />
        </div>

        {/* Achievements Section - Imported Component */}
        {/* <div ref={sections.achievements}>
          <Achievements 
            achievements={achievementsData} 
            testimonials={testimonialsData} 
          />
        </div> */}

        {/* Blog Section - Imported Component */}
        <Blog blogPosts={blogPosts} />

        {/* Contact Section - Imported Component */}
        <div ref={sections.contact}>
          <Contact personalInfo={personalInfo} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${scrollProgress > 20 ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Portfolio;