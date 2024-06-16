import "./portfolio.scss";
import portfolioData from "./portfolioData";
import Project from "./Project.jsx";

function Portfolio() {
  return (
    <section id="portfolioSection" className="PortSection">
      <h2 className="PortHeader">Portfolio</h2>
      <div className="PortContainer">
        {portfolioData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
