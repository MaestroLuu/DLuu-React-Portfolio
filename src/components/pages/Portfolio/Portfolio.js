/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import jobBoard from './job-board.jpg';
import covidTest from './covid-test.jpg';
import textEditor from './coding.jpeg';
import weatherDashboard from './rain.jpg';
import happyHour from './happy-hour.jpg';
import bookSearch from './book-search.webp';

export default function Portfolio() {
  return (
    <div className='row d-flex justify-content-evenly'>
      <h2 className='text-center'>Portfolio</h2>
      <div className='col-sm-3 shadow p-3 mb-2 mx-1 bg-transparent rounded mt-2'>
        <div className="bg-transparent">
          <a href="https://protected-taiga-32909.herokuapp.com/" target='_blank'>
            <img src={jobBoard} className="card-img-top" alt="Job Board" />
          </a>
          <div className="card-body">
            <p className="card-text">Allows users to search for recently posted jobs and post their own jobs. Users need to sign-up and logged in for access.</p>
            <a href="https://github.com/MaestroLuu/Help-for-Hire" target='_blank'>Help-for-Hire Github Repo</a>
          </div>
        </div>
      </div>

      <div className='col-sm-3 shadow p-3 mb-2 mx-1 bg-transparent rounded mt-2'>
        <div className="bg-transparent">
          <a href="https://maestroluu.github.io/Covid19-Testing-Site-Locator/" target={'_blank'}>
            <img src={covidTest} className="card-img-top" alt="Covid Test" />
          </a>
          <div className="card-body">
            <p className="card-text">Assists users in locating Covid-19 testing facilities in California. Requires users to select city for results to be displayed.</p>
            <a href="https://github.com/MaestroLuu/Covid19-Testing-Site-Locator" target='_blank'>Covid Testing Github Repo</a>
          </div>
        </div>
      </div>

      <div className='col-sm-3 shadow p-3 mb-2 mx-1 bg-transparent rounded mt-3'>
        <div className="bg-transparent" >
          <a href="https://maestroluu.github.io/Weather-Dashboard/" >
            <img src={weatherDashboard} className="card-img-top" alt="Weather Dashboard" />
          </a>
          <div className="card-body">
            <p className="card-text">Simple weather application that allows users to search for cities and display the current and upcoming 3-day forecast.</p>
            <a href="https://github.com/MaestroLuu/Weather-Dashboard" target='_blank'>weather Dashboard Github Repo</a>
          </div>
        </div>
      </div>

      <div className='col-sm-3 shadow p-3 mb-2 mx-1 bg-transparent rounded mt-3'>
        <div className="bg-transparent">
          <a href="https://young-gorge-61076.herokuapp.com/" >
            <img src={textEditor} className='card-img-top' alt="Text Editor" />
          </a>
          <div className="card-body">
            <p className="card-text">Allows clients to code on their browser, save their code periodically, and reloaded when they refresh the page.</p>
            <a href="https://github.com/MaestroLuu/On-the-Go-Coder" target='_blank'>On-the-Go Coder Github Repo</a>
          </div>
        </div>
      </div>

      <div className='col-sm-3 shadow p-3 mb-2 mx-1 bg-transparent rounded mt-3'>
        <div className="bg-transparent">
          <a href="https://desolate-earth-02940.herokuapp.com/" >
            <img src={happyHour} className='card-img-top' alt="Text Editor" />
          </a>
          <div className="card-body">
            <p className="card-text">Allows users to search for restaurants that have happy hour specials near their zipcode.</p>
            <a href="https://github.com/MaestroLuu/Happy-Hour" target='_blank'>Happy Hour Github Repo</a>
          </div>
        </div>
      </div>

      <div className='col-sm-3 shadow p-3 mb-2 mx-1 bg-transparent rounded mt-3'>
        <div className="bg-transparent">
          <a href="https://shielded-basin-97663.herokuapp.com/" >
            <img src={bookSearch} className='card-img-top' alt="Text Editor" />
          </a>
          <div className="card-body">
            <p className="card-text">Allows users to search for books from Google books' API and save them to their user profile for future references.</p>
            <a href="https://github.com/MaestroLuu/Book-Marker" target='_blank'>Book Marker Github Repo</a>
          </div>
        </div>
      </div>

    </div>
  );
}
