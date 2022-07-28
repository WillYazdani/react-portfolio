import React from 'react';
import { Link } from "react-router-dom";
import '../components/CSS/navtabs.css';
import wy from '../components/assets/wy.svg';

function NavTabs() {
  return (
    <>
      <ul className="nav nav-tabs" id="navbar">
        <li className="nav-item" id="navhome">
          <Link 
            to="/"
            id="home"
          >
            HOME
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
