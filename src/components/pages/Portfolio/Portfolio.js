import React from 'react';
import jobBoard from './job-board.jpg';
import covidTest from './covid-test.jpg';
import textEditor from './coding.jpeg';
import weatherDashboard from './rain.jpg';


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
          <a href="https://protected-taiga-32909.herokuapp.com/" target='_blank' rel="noreferrer">
            <img className="project 1" src={jobBoard} alt="Job Board" />
          </a>

          <a href="https://maestroluu.github.io/Covid19-Testing-Site-Locator/" >
            <img src={covidTest} alt="Covid Test" />
          </a>

          <a href="https://maestroluu.github.io/Weather-Dashboard/" >
            <img src={weatherDashboard} alt="Weather Dashboard" />
          </a>

          <a href="https://young-gorge-61076.herokuapp.com/" >
            <img src={textEditor} alt="Text Editor" />
          </a>
      </div>
    </div>
  );
}
