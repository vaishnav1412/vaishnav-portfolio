import {
  FiExternalLink,
  FiStar,
} from "react-icons/fi";
import "./achivements.scss";

const Achievements = ({ achievements, testimonials }) => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <span className="section-subtitle">Recognition</span>
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="title-underline" />
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p className="achievement-issuer">{achievement.issuer}</p>
              <p className="achievement-date">{achievement.date}</p>
              {achievement.description && (
                <p className="achievement-description">
                  {achievement.description}
                </p>
              )}
              {achievement.credential && (
                <a href={achievement.link} className="credential-link">
                  View Credential <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h3 className="testimonials-title">What People Say</h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="star-filled" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;