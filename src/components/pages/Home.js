import React from 'react';
import '../CSS/home.css';
import bg from '../assets/bg.svg';
import wy from '../assets/wy.svg';

export default function Home() {
    return (
        <>
            <div className="parallax-wrapper">
                <header>
                    <img src={bg} alt={bg} className='background' />
                    <img src={wy} alt={wy} className='logo' />
                    <h1 className="title">Will Yazdani</h1>
                    <h2 className="subtitle">Web Developer. Designer. Photographer.</h2>
                </header>
                <section className='about'>
                    <h3>01.About Me</h3>
                    Hey there, my name is Will Yazdani. I'm a front-end developer based in Minnesota. I've always been interested in tech and art, so I naturally gravitated towards web design while in college. This curiosity lead me to find out my love for coding web pages. I'm also a photographer and I love to shoot and edit photos. Please take a look at my portfolio see some of my work.
                </section>
                <div className='project-wrapper'>
                    <section className='projects'>
                        <h3>02.Projects</h3>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>Parallax Gallery</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>FullStackJack</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>Mental Health Check</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </section>
                </div> 
                <section className='contact-wrapper'>
                <h3>03.Contact</h3>
                I am currently seeking out front end development positions, either remote or in the Twin Cities area. Feel free to reach out with any offers, opportunities or if you just want to chat. - Will
                    <div className='contact-container'>
                        <div className='contact-card'>
                            <a id="links" href="https://www.linkedin.com/in/will-yazdani/">LINKEDIN</a><br/>
                            <a id="links" href="https://github.com/WillYazdani">GITHUB</a><br/>
                            <a id="links" href="https://leetcode.com/willyazdani/">LEETCODE</a><br/>
                        </div>    
                        <form className='contact-form'>
                            <label>Name</label>
                            <input type='text' />
                            <label>Email</label>
                            <input type='text' />
                            <label>Message</label>
                            <textarea></textarea>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>    
                </section> 
            </div>
        </>   
    );
};