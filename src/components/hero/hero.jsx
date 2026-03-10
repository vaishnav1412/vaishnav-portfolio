import {
  FiSend,
  FiBriefcase,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import "./hero.scss";

const Hero = ({ personalInfo, scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="gradient-orb orb1" />
        <div className="gradient-orb orb2" />
        <div className="gradient-orb orb3" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="greeting">👋 Hello, I'm</span>
          <h1 className="name">{personalInfo.name}</h1>
          <h2 className="title">{personalInfo.title}</h2>

          <div className="typing-container">
            <span className="static-text">I build </span>
            <span className="dynamic-text">
              exceptional digital experiences
            </span>
          </div>

          <p className="bio">{personalInfo.bio}</p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              <FiSend /> Hire Me
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("projects")}
            >
              <FiBriefcase /> View Work
            </button>
            <a href={personalInfo.resume} className="btn-outline" download>
              <FiDownload /> Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiGithub />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiLinkedin />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiTwitter />
            </a>
            <a
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={personalInfo.avatar} alt={personalInfo.name} />
            <div className="experience-badge">
              <span className="years">2+</span>
              <span className="text">Years Experience</span>
            </div>
            <div className="projects-badge">
              <span className="count">30+</span>
              <span className="text">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scroll-indicator"
        onClick={() => scrollToSection("about")}
      >
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;