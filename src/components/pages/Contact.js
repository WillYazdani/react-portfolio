import React, {useState} from 'react';
import validator from '../../utils/validator';
import "../CSS/contact.css";


export default function Contact() {

  return (
    <div id="contact-wrapper">
      <div id="contact-form">
      <h1>Contact Me</h1>
        <form>
          <label>Name:</label><br></br>
          <input type="text" name="name" placeholder="Name" />
          <br></br>
          <label>Email:</label><br></br>
          <input type="email" name="email" placeholder="Email" />
          <br></br>
          <label>Message:</label><br></br>
          <textarea name="message" placeholder="Message"></textarea><br></br>
          <button type="submit">Send</button>
          <a href="../assets/will-yazdani-resume-2022.docx" download>Download My Resume</a>
        </form>
      </div>
    </div>
  );
}
