import React from 'react';
import '../CSS/home.css';
import bg from '../assets/bg.svg';
import wy from '../assets/wy.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';

export default function Home() {
    return (
        <>
            <div className="parallax-wrapper">
                {/* HERO */}
                <header>
                    <img src={bg} alt={bg} className='background' />
                    <img src={wy} alt={wy} className='logo' />
                    <h1 className="title">Will Yazdani</h1>
                    <h2 className="subtitle">Web Developer. Designer. Photographer.</h2>
                </header>
                {/* ABOUT SECTION */}
                <section className='about'>
                    <h3>01.About Me</h3>
                    <p>Hey there, my name is Will Yazdani. I'm a front-end developer based in Minnesota. I've always been interested in tech and art, so I naturally gravitated towards web design while in college. This curiosity lead me to find out my love for coding. I'm also a photographer and I love to shoot and edit photos. Please take a look at my portfolio see some of my work.
                    </p>
                    <h3>Skills:</h3>
                    <div className='carousel-wrapper'>
                        <div className='carousel'>
                            <button className='carousel__button carousel__button--left'>
                                <img src={left} alt={left} className='carousel-button-left' />
                            </button>
                            <div className='carousel__track-container'>
                                <ul className='carousel__track'>
                                    <li className='carousel__slide'>
                                        <img src={html} alt={html} className='carousel__image' />
                                    </li>
                                    <li className='carousel__slide'>
                                        <img src={css} alt={css} className='carousel__image' />
                                    </li>
                                    <li className='carousel__slide'>
                                        <img src={js} alt={js} className='carousel__image' />
                                    </li>
                                </ul>    
                            </div>  
                            <button className='carousel__button carousel__button--right'>
                                <img src={right} alt={right} className='carousel-button-right' /> 
                            </button>
                            <div className='carousel__nav'>
                                <button className='carousel__indicator current-slide' />
                                <button className='carousel__indicator' />
                                <button className='carousel__indicator' />
                            </div> 
                        </div>
                    </div>
                </section>
                {/* PROJECTS SECTION */}
                <div className='project-wrapper'>
                    <section className='projects'>
                        <h3>02.Projects</h3>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>Parallax Gallery</h4>
                                <p>
                                    Parallax Gallery is a simple gallery that uses parallax scrolling to create a 3D effect.
                                </p>
                            </div>
                        </div>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>FullStackJack</h4>
                                <p>
                                    Learn to play BlackJack with this fully functional online version.
                                </p>
                            </div>
                        </div>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>Mental Health Check</h4>
                                <p>
                                    This app provides the user with a quick and easy way to evaluate their mental health and gives them resources to help their current situation.
                                </p>
                            </div>
                        </div>
                    </section>
                </div> 
                {/* CONTACT SECTION */}
                <section className='contact-wrapper'>
                <h3>03.Contact</h3>
                I am currently seeking out front end development positions, either remote or in the Twin Cities area. Feel free to reach out with any offers, opportunities or if you just want to chat. - Will
                    <div className='contact-container'>  
                        <form className='contact-form'>
                            <label>Name</label>
                            <input type='text' />
                            <label>Email</label>
                            <input type='text' />
                            <label>Message</label>
                            <textarea></textarea>
                            <button type='submit'>Submit</button>
                        </form>
                        <div className='contact-card'>
                            <a id="links" href="https://www.linkedin.com/in/will-yazdani/">LINKEDIN</a><br/>
                            <a id="links" href="https://github.com/WillYazdani">GITHUB</a><br/>
                            {/* <a id="links" href="https://leetcode.com/willyazdani/">LEETCODE</a><br/> */}
                        </div>  
                    </div>    
                </section> 
            </div>
        </>   
    );
};