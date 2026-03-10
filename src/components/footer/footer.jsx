import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <span className="logo-text">VM</span>
      <span className="logo-dot">.</span>
    </div>

    <p className="footer-text">
      Full-Stack Web Developer passionate about building scalable web
      applications using modern technologies like React, Node.js, and
      MongoDB.
    </p>

    <p className="copyright">
      © {new Date().getFullYear()} Vaishnav V M. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer
