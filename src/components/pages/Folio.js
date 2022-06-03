import React, { useState } from 'react';
import Modal from '../Modal'
import datelime from '../assets/dateLime.png'
import fsj from "../assets/fsj.jpg"
import mhc from '../assets/mhc.PNG'

import '../../components/CSS/folio.css';

export default function Folio() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  return (
    <div id="wrapper">
      <div id="projects">
        <button onClick={() => setIsOpen1(true)}>
          DATELIME
        </button>
          <Modal open={isOpen1} onClose={() => setIsOpen1(false)}>
           <h1>DateLime</h1>
           <img src={datelime} alt="datelime" id="datelime" />
           <p>Role: Front End Developer
            <br></br>
            Technologies: HTML, CSS, Bulma, JavaScript
            <br></br>
            This is an app that pairs movies and recipes based on the user!
           </p>
           <a href="https://github.com/WillYazdani/Seven">GITHUB</a>
           <a href="https://sonarie.github.io/Seven/">LIVE</a>
          </Modal>
        <button onClick={() => setIsOpen2(true)}>
        FULLSTACK JACK
        </button>
          <Modal open={isOpen2} onClose={() => setIsOpen2(false)}>
          <h1>FullStack Jack</h1>
           <img src={fsj} alt="fsj" id="fsj" />
           <p>Role: Front End Developer
            <br></br>
            Technologies: HTML, CSS, Bootstrap, JavaScript, Handlebars, jQuery, Express, Node.js, MySQL
            <br></br>
            Play Blackjack and get a high score!
           </p>
           <a href="https://github.com/WillYazdani/full_stack_jack">GITHUB</a>
           <a href="https://young-atoll-21457.herokuapp.com/">LIVE</a>
          </Modal>
          <button onClick={() => setIsOpen2(true)}>
        MENTAL HEALTH CHECK
        </button>
          <Modal open={isOpen2} onClose={() => setIsOpen2(false)}>
          <h1>FullStack Jack</h1>
           <img src={mhc} alt="mhc" id="mhc" />
           <p>Role: Front End Developer
            <br></br>
            Technologies: MERN Stack, JWT, GraphQL, Apollo, MUI
            <br></br>
            Assess your mental health and get results.
           </p>
           <a href="https://github.com/WillYazdani/mental-health-check">GITHUB</a>
           <a href="https://mhcheck-dev.herokuapp.com/">LIVE</a>
          </Modal>
      </div>
    </div>
  );
};
