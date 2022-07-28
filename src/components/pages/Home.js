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
                    <h1 className="title">
                        Will Yazdani
                    </h1>
                </header>
                <section className='about'>
                    <h3>01.About Me</h3>
                    Hey there! My name is Will Yazdani. I'm a front-end developer based in Minnesota. I enjoy designing creative and functional web apps. I specialize in HTML, CSS JavaScript, and React. I'm currently looking for a full-time remote position. Feel free to check out my work and contact me if you're interested in working together.
                </section>
                <div className='project-wrapper'>
                    <section className='projects'>
                        <h3>02.Projects</h3>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>Project 1</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>Project 2</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className='project-container'>
                            <div className='project-card'>
                                <h4>Project 3</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
        
    );
};