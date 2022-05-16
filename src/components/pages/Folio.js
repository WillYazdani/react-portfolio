import React, { useState } from 'react';
import Modal from '../Modal'
import datelime from '../assets/dateLime.png'
import fsj from "../assets/fsj.jpg"

import '../../components/CSS/folio.css';

export default function Folio() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)
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
        <button onClick={() => setIsOpen3(true)}>
        PASSGEN
        </button>
          <Modal open={isOpen3} onClose={() => setIsOpen3(false)}>
           TBD
          </Modal>
        <button onClick={() => setIsOpen4(true)}>
        CODE QUIZ
        </button>
          <Modal open={isOpen4} onClose={() => setIsOpen4(false)}>
           TBD
          </Modal>
        <button onClick={() => setIsOpen5(true)}>
        RUN BUDDY
        </button>
          <Modal open={isOpen5} onClose={() => setIsOpen5(false)}>
           TBD
          </Modal>
        <button onClick={() => setIsOpen6(true)}>
        SOCIAL API
        </button>
          <Modal open={isOpen6} onClose={() => setIsOpen6(false)}>
           TBD
          </Modal>
      </div>
    </div>
  );
}
