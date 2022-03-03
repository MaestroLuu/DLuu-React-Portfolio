import React from 'react';
import jobBoard from './job-board.jpg';
import covidTest from './covid-test.jpg';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
            <a href="https://protected-taiga-32909.herokuapp.com/">
                <img src={jobBoard} alt="Job Board" />
            </a>

             <a href="https://maestroluu.github.io/Covid19-Testing-Site-Locator/" className="portfolio-item">
                <img src={covidTest} alt="Covid Test" />
            </a>

             <a href="https://maestroluu.github.io/Weather-Dashboard/" className="portfolio-item">
                <img src="/assets/images/Weather-Dashboard/rain.jpg" alt="Weather Dashboard" />
            </a>
        </div>
    </div>
  );
}
