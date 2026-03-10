import {
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import "./experience.scss";

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span className="section-subtitle">My journey</span>
        <h2 className="section-title">Work Experience</h2>
        <div className="title-underline" />
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="company-header">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="company-logo"
                />
                <div className="company-info">
                  <h3>{exp.company}</h3>
                  <h4>{exp.position}</h4>
                  <div className="company-meta">
                    <span>
                      <FiCalendar /> {exp.period}
                    </span>
                    <span>
                      <FiMapPin /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;