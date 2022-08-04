import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import '../CSS/home.css';
import bg from '../assets/bg.svg';
import wy from '../assets/wy.svg';
import Carousel from '../elements/carousel';
import Modal from '../elements/modal';

export default function Home() {

    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    return (
        <>
            <div className="parallax-wrapper">

                {/* HERO */}

                <header>
                    <img src={bg} alt={bg} className='background' />
                    <img src={wy} alt={wy} className='logo' />
                    <h1 className="title">Will Yazdani</h1>
                    <h2 className="subtitle">Web Developer. UX/UI Designer.</h2>
                </header>

                {/* ABOUT SECTION */}

                <section className='about'>
                    <h3>01.About Me</h3>
                    <p>Hey there, my name is Will Yazdani. I'm a front-end developer based in Minnesota. I've always been interested in tech and art, so I naturally gravitated towards web design while in college. This curiosity lead me to find out my love for coding. Take a look at section 02 to see some of my work and feel free to contact me in section 03.
                    </p>
                    <h3>Skills:</h3>
                    <Carousel></Carousel>
                </section>

                {/* PROJECTS SECTION */}
                
                <section className='projects'>
                    <h3>02.Projects</h3>

                    <motion.button
                        className = "project-button"
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            }
                        }}
                        whileTap={{
                            scale: 0.95,
                            transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            }
                        }}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                        <h4 className='project-title'>Parallax Gallery</h4>
                        <p className='project-description'>
                        Parallax Gallery is a simple gallery that uses parallax scrolling to create a 3D effect.
                        </p>
                    </motion.button>
                    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}></Modal>}
                    <motion.button
                        className = "project-button"
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            }
                        }}
                        whileTap={{
                            scale: 0.95,
                            transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            }
                        }}
                        onClick={() => null}
                    >
                        <h4 className='project-title'>ReactJack</h4>
                        <p className='project-description'>
                        Learn to play BlackJack with this fully functional online version.
                        </p>
                    </motion.button>
                    <motion.button
                        className = "project-button"
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            }
                        }}
                        whileTap={{
                            scale: 0.95,
                            transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            }
                        }}
                        onClick={() => null}
                    >
                        <h4 className='project-title'>Mental Health Check</h4>
                        <p className='project-description'>
                        This app provides the user with a quick and easy way to evaluate their mental health and gives them resources to help their current situation.
                        </p>
                    </motion.button>

                </section>
                
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
                        </div>  
                    </div>    
                </section>

            </div>
        </>   
    );
};