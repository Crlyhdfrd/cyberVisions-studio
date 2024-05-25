import "./about.scss"

function About() { 
  return (
    <section className="aboutSection">
      <div className="imageContainer">
        <img
          className="profileImage"
          src="/images/close-up-img.jpg"
          alt="Sean Brown"
        />
      </div>
      <div className="textContainer">
        <h2 className="aboutHeader">About Me</h2>
        <p className="aboutText">
          I am a full stack developer with a passion for creating and building.
          I have experience in a variety of languages and frameworks, and I am
          always looking to learn more. I am currently seeking a position where
          I can continue to grow and develop my skills.
        </p>
      </div>
    </section>
  );
}

export default About;

// 