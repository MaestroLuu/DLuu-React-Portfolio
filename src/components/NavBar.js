import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    return (
      <div className='d-flex justify-content-between'>
      <h1 m>David Luu</h1>
      <ul className="nav nav-tabs d-flex justify-content-end">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}  
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>

      </ul>
      </div>
    );
  }
  
  export default NavBar;
  