import "./header.scss";

function Header() {
  return (
    <section className="headerSection">
      <p className="branding">Sean Brown - Full Stack Developer</p>
      <nav className="headerNav">
        <a className="navItem" href="#aboutMe">
          About Me
        </a>
        <a className="navItem" href="#portfolio">
          Portfolio
        </a>
        <a className="navItem" href="#contact">
          Contact
        </a>
        <a className="navItem" href="#resume">
          Resume
        </a>
      </nav>
    </section>
  );
}

export default Header;