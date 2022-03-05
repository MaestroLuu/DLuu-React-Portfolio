import React from 'react';
import updatedResume from './Updated_Resume-DLUU.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a target="_blank" rel="noreferrer" href={updatedResume} download>Resume Download</a>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript ES6+</li>
        <li>JQuery</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Express</li>
        <li>NodeJS</li>
        <li>Handlebars</li>
        <li>Inquirer</li>
        <li>Insomnia</li>
        <li>Postman</li>
        <li>GraphQL</li>
        <li>Jest</li>
      </ul>
    </div>
  );
}
