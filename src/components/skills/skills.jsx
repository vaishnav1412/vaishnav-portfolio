import {
  FiLayout,
  FiServer,
  FiDatabase,
  FiCpu,
  FiPenTool,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";
import "./skills.scss";

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-subtitle">My expertise</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="title-underline" />
      </div>

      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">
              {category === "frontend" && <FiLayout />}
              {category === "backend" && <FiServer />}
              {category === "database" && <FiDatabase />}
              {category === "devops" && <FiCpu />}
              {category === "design" && <FiPenTool />}
              {category === "tools" && <FiCode />}
              {category === "testing" && <FiCheckCircle />}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="skills-grid">
              {skillList.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;