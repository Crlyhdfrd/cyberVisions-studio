import "./resume.scss";

function Resume() {
  return (
    <section className="ResSection">
      <h2 className="ResHeader">Resume</h2>
      <div className="ResContainer">
        <div className="ResSummaryContainer">
          <p className="ResSummary">
            I am a full stack web developer with a background in customer service.
            I have a passion for problem solving and a love for learning new technologies.
            I am a quick learner and a team player.
            I am looking for a position where I can use my skills to create innovative and user-friendly applications.
            I am proficient in HTML, CSS, Javascript, and React.
            I have experience with Node.js, Express, MySQL, MongoDB, and RESTful APIs.
            I have a strong understanding of responsive design and accessibility.
            I am a creative thinker and a detail-oriented developer.
            I am excited to bring my skills to a team that values collaboration and creativity.
            I am eager to grow as a developer and to contribute to projects that make a positive impact.
            I am looking forward to working with a team that is passionate about creating high-quality applications,
            dedicated to creating innovative and user-friendly applications, values creativity and collaboration.
          </p>
          <button className="Download">Download</button>
        </div>
        <div className="ResSkills">
          <h3>Skills</h3>
          <ul id="Skills">
            <li>Customer Service</li>
            <li>Communication</li>
            <li>Independent Working</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Attention to Detail</li>
            <li>Organization</li>
          </ul>
          <h3>Languages</h3>
          <ul id="Languages">
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
          <h3>Frameworks & Libraries</h3>
          <ul id="FL">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>JQuery</li>
            <li>Inquirer</li>
            <li>SASS</li>
            <li>Sequalize</li>
            <li>Fetch</li>
          </ul>
          <h3>Other Technologies</h3>
          <ul id="Other">
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>RESTful APIs</li>
            <li>Insomnia</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;