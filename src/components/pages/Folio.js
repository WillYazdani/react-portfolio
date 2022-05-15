import React, { useState } from 'react';
import Modal from '../Modal'
import '../../components/CSS/folio.css';

export default function Folio() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div id="wrapper">
      <div id="projects">
        <button onClick={() => setIsOpen(true)}>
          DATELIME
        </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
           DateLime
          </Modal>
        <button onClick={() => setIsOpen(true)}>
        FULLSTACK JACK
        </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
           FullStack Jack
          </Modal>
        <button onClick={() => setIsOpen(true)}>
        TBD
        </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
           TBD
          </Modal>
      </div>
    </div>
  );
}
