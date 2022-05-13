import React from 'react';
import '../components/CSS/navtabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" id="navbar">
      <li className="nav-item" id="navhome">
        <a
          href="#home"
          id="home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          WILL YAZDANI
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          id="folio"
          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          FOLIO
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          id="about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          ABOUT
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          id="contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          CONTACT
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          id="resume"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          RESUME
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
