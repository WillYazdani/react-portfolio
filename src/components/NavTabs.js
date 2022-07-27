import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../components/CSS/navtabs.css';

function NavTabs() {
  return (
    <ul className="nav nav-tabs" id="navbar">
      <li className="nav-item" id="navhome">
        <Link 
          to="/folio"
          id="home"
        >
          WILL YAZDANI
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/folio"
          id="folio"
        >
          PROJECTS
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          id="about"
        >
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          id="contact"
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
