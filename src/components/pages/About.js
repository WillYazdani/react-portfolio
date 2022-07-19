import React from 'react';
import '../../components/CSS/about.css';
import me from '../assets/me.jpg';

export default function About() {
  return (
    <div id="about-wrapper">
      <h1>About Me</h1>
      <div id="about-me">
        <img src={me} alt="me" id="me" />
        <p>
          Hey there! My name is Will Yazdani. I'm a front-end developer based in Minnesota. I enjoy designing creative and functional web apps. I specialize in HTML, CSS JavaScript, and React. I'm currently looking for a full-time remote position. Feel free to check out my work and contact me if you're interested in working together.<br></br>

          <br></br>-Will
        </p>
      </div>
    </div>
  );
}
