import "./header.scss";

function Header() {
  return (
    <section className="headerSection">
      <p className="branding">Sean Brown - Full Stack Developer</p>
      <nav className="headerNav">
        <a className="navItem" href="#aboutSection">
          About Me
        </a>
        <a className="navItem" href="#portfolioSection">
          Portfolio
        </a>
        <a className="navItem" href="#contactSection">
          Contact
        </a>
        <a className="navItem" href="#resumeSection">
          Resume
        </a>
      </nav>
    </section>
  );
}

export default Header;
