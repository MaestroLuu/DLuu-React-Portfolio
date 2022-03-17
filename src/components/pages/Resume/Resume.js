import React from "react";
import UpdatedResume from "./resume.pdf";

export default function Resume() {
  return (
    <div className="d-flex justify-content-center">
      <h2>Resume</h2>
      <a href={UpdatedResume} download>
        Download Resume
      </a>
      <div>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript ES6+</li>
          <li>JQuery</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>MUI</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Express</li>
          <li>NodeJS</li>
          <li>Handlebars</li>
          <li>Inquirer</li>
          <li>Insomnia</li>
          <li>Apollo Sandbox</li>
          <li>Postman</li>
          <li>GraphQL</li>
          <li>Jest</li>
        </ul>
      </div>
    </div>
  );
}
