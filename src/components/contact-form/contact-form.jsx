import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import "./contact-form.scss";

const Contact = ({ personalInfo }) => {
  const [formStatus, setFormStatus] = useState("idle");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    emailjs
      .sendForm(
        "service_r4sro34",
        "template_2egmzy4",
        form.current,
        "8tTvQBJgHITTp6LZH"
      )
      .then(
        () => {
          setFormStatus("success");
          form.current.reset();

          setTimeout(() => {
            setFormStatus("idle");
          }, 3000);
        },
        (error) => {
          console.error(error);
          setFormStatus("idle");
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-subtitle">Get in touch</span>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="title-underline"></div>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Have a project in mind?</h3>
          <p>
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out!
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div>
                <span className="contact-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-value">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="contact-value">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links-large">
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
            <a href={personalInfo.social.instagram} target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary submit-btn"
              disabled={formStatus !== "idle"}
            >
              {formStatus === "idle" && (
                <>
                  <FiSend /> Send Message
                </>
              )}

              {formStatus === "sending" && (
                <>
                  Sending...
                </>
              )}

              {formStatus === "success" && (
                <>
                  <FiCheckCircle /> Message Sent!
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;