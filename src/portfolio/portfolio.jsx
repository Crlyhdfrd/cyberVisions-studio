import "./portfolio.scss";
import portfolioData from "./portfolioData";

function About() {
  return (
    <section className="PortSection">
      <h2 className="PortHeader">Portfolio</h2>
      <div className="PortContainer">
        {portfolioData.map((project, index) => (
          <PortItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function PortItem({ key, project }) {
  return (
    <div key={key}
      className="PortItem">
      <img className="PortImage" src={project.image} alt={project.title} />
      <h3 className="PortTitle">{project.title}</h3>
      <p className="PortSubtitle">{project.subtitle}</p>
    </div>
  );
} 

export default About;
