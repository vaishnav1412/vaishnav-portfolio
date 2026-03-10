import {
  FiExternalLink,
  FiGithub,
  FiChevronRight,
} from "react-icons/fi";
import "./projects.scss";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-subtitle">My work</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline" />
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div
                className="project-overlay"
                style={{ background: project.gradient }}
              >
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more">
        <button className="btn-outline">
          View All Projects <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;