import React from 'react';
import '../components/CSS/navtabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" id="navbar">
      <li className="nav-item" id="navhome">
        <a
          href="#folio"
          id="home"
          onClick={() => handlePageChange('Folio')}
          className={currentPage === 'Folio' ? 'nav-link active' : 'nav-link'}
        >
          WILL YAZDANI
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#folio"
          id="folio"
          onClick={() => handlePageChange('Folio')}
          className={currentPage === 'Folio' ? 'nav-link active' : 'nav-link'}
        >
          PROJECTS
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
    </ul>
  );
}

export default NavTabs;
