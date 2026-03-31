import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <span className="footer__logo-text">VM</span>
          <span className="footer__logo-dot">.</span>
        </div>

        <p className="footer__text">
          Full-Stack Web Developer passionate about building scalable web
          applications using modern technologies like React, Node.js, and
          MongoDB.
        </p>

        <div className="footer__divider" />

        <p className="footer__copyright">
          © {new Date().getFullYear()} Vaishnav V M. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer