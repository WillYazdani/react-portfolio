import React from 'react';
import { Link } from "react-router-dom";
import '../components/CSS/navtabs.css';
import wy from '../components/assets/wy.svg';

function NavTabs() {
  return (
    <>
      {/* <div className='icon'></div> */}
      <ul className="nav nav-tabs" id="navbar">
        <li className="nav-item" id="navhome">
          <Link 
            to="/"
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
            to="/contact"
            id="contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
