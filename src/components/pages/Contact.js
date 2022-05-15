import React from 'react';
import "../CSS/contact.css";

export default function Contact() {
  return (
    <div id="contact-wrapper">
      <h1>Contact Me</h1>
      <form>
        <label>Name:</label><br></br>
        <input type="text" name="name" placeholder="Name" /><br></br>
        <label>Email:</label><br></br>
        <input type="email" name="email" placeholder="Email" /><br></br>
        <label>Message:</label><br></br>
        <textarea name="message" placeholder="Message"></textarea><br></br>
        <button type="submit">Send</button>
        <button>Download Resume</button>
      </form>
    </div>
  );
}
