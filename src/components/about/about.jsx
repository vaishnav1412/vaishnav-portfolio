import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCode,
  FiUsers,
  FiCoffee,
  FiCamera,
  FiMusic,
  FiBook,
  FiMonitor,
  FiCpu,
  FiZap,
} from "react-icons/fi";
import {
  FaQuoteLeft,
} from "react-icons/fa";
import "./about.scss";

const About = ({ personalInfo }) => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-subtitle">Get to know me</span>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline" />
      </div>

      <div className="about-content">
        <div className="about-left">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <FiBriefcase />
              </div>
              <div className="stat-info">
                <span className="stat-value">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FiCode />
              </div>
              <div className="stat-info">
                <span className="stat-value">30+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FiUsers />
              </div>
              <div className="stat-info">
                <span className="stat-value">4+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FiCoffee />
              </div>
              <div className="stat-info">
                <span className="stat-value">∞</span>
                <span className="stat-label">Coffee Cups</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <p>
              I am a passionate Full-Stack Web Developer with experience building modern,
              scalable web applications using technologies like React.js, Svelte.js,
              Node.js, Express, MongoDB, and PostgreSQL. I enjoy turning ideas into
              functional digital products that deliver real value to users.
            </p>
            <p>
              I focus on writing clean, maintainable code and building responsive user
              interfaces with tools such as Tailwind CSS and Bootstrap. I also work with
              REST APIs and GraphQL to develop efficient backend services and integrate
              powerful features into web applications.
            </p>
            <p>
              I am always eager to learn new technologies, improve my development skills,
              and build impactful projects. My goal is to create reliable, user-friendly
              applications that solve real-world problems.
            </p>
          </div>

          <div className="personal-info">
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">{personalInfo.email}</span>
              </div>
            </div>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <span className="info-label">Phone</span>
                <span className="info-value">{personalInfo.phone}</span>
              </div>
            </div>
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <span className="info-label">Location</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="interests-section">
            <h3>Interests & Hobbies</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <FiCamera />
                <span>Photography</span>
              </div>
              <div className="interest-item">
                <FiMusic />
                <span>Music</span>
              </div>
              <div className="interest-item">
                <FiBook />
                <span>Reading</span>
              </div>
              <div className="interest-item">
                <FiMonitor />
                <span>Tech</span>
              </div>
              <div className="interest-item">
                <FiCpu />
                <span>AI/ML</span>
              </div>
              <div className="interest-item">
                <FiZap />
                <span>Innovation</span>
              </div>
            </div>
          </div>

          <div className="languages-section">
            <h3>Languages</h3>
            <div className="language-item">
              <span className="language-name">Malayalam</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
          </div>

          <div className="quote-section">
            <FaQuoteLeft className="quote-icon" />
            <p className="quote-text">
              "The only way to do great work is to love what you do."
            </p>
            <p className="quote-author">- Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;