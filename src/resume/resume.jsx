import "./resume.scss";

function Resume() {
  return (
    <section className="ResSection">
      <h2 className="ResHeader">Resume</h2>
      <button className="Download">Download</button>
      <div className="ResContainer">
        <p className="ResSummary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="ResSkills">
          <h3>Skills</h3>
          <ul>
            <li>Customer Service</li>
            <li>Communication</li>
            <li>Independent Working</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Teamwork</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
          <h3>Frameworks & Libraries</h3>
          <ul>
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
          <ul>
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
