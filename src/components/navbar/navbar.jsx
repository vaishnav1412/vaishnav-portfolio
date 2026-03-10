import { useState } from "react";
import {
  FiDownload,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import "./navbar.scss";

const Navigation = ({ 
  isDarkMode, 
  setIsDarkMode, 
  activeSection, 
  scrollToSection,
  personalInfo 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">VVM</span>
          <span className="logo-dot">.</span>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {[
            "home",
            "about",
            "skills",
            "projects",
            "contact",
          ].map((item) => (
            <li key={item}>
              <button
                className={`nav-link ${activeSection === item ? "active" : ""}`}
                onClick={() => handleScrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          <a href={personalInfo.resume} className="resume-btn" download>
            <FiDownload /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;