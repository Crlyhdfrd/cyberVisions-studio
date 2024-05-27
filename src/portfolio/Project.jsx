import GitHubIcon from "../assets/github.svg?react";
import LinkIcon from "../assets/link.svg?react";

function Project({ key, project }) {
  return (
    <div key={key} className="PortItem">
      <div className="PortImageContainer">
        <img className="PortImage" src={project.image} alt={project.title} />
      </div>
      <h3 className="PortTitle">{project.title}</h3>
      <p className="PortSubtitle">{project.subtitle}</p>
      <div className="PortIcons">
        <a className="PortIcon" href={project.github} target="_blank">
          <GitHubIcon />
        </a>
        <a className="PortIcon" href={project.live} target="_blank">
          <LinkIcon />
        </a>
      </div>
    </div>
  );
}

export default Project;