import React, { useState } from 'react';
import Modal from '../Modal'
import datelime from '../assets/dateLime.png'
import fsj from "../assets/fsj.jpg"

import '../../components/CSS/folio.css';

export default function Folio() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  return (
    <div id="wrapper">
      <div id="projects">
        <button onClick={() => setIsOpen1(true)}>
          DATELIME
        </button>
          <Modal id="modal1" open={isOpen1} onClose={() => setIsOpen1(false)}>
           <h1>DateLime</h1>
           <img src={datelime} alt="datelime" id="datelime" />
           <p>Role: Front End Developer
            <br></br>
            Technologies: HTML, CSS, JavaScript
            <br></br>
            This is an app that pairs movies and recipes based on the user!
           </p>
          </Modal>
        <button onClick={() => setIsOpen2(true)}>
        FULLSTACK JACK
        </button>
          <Modal id="modal2" open={isOpen2} onClose={() => setIsOpen2(false)}>
          <h1>FullStack Jack</h1>
           <img src={fsj} alt="fsj" id="fsj" />
           <p>Role: Front End Developer
            <br></br>
            Technologies: HTML, CSS, JavaScript, Handlebars, jQuery, Express, Node.js, MySQL
            <br></br>
            Play Blackjack and get a high score!
           </p>
          </Modal>
        <button onClick={() => setIsOpen3(true)}>
        TBD
        </button>
          <Modal id="modal3" open={isOpen3} onClose={() => setIsOpen3(false)}>
           TBD
          </Modal>
      </div>
    </div>
  );
}
