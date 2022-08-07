import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import '../CSS/home.css';
import bg from '../assets/bg.svg';
import wy from '../assets/wy.svg';
import Carousel from '../elements/carousel';
import Modal from '../elements/modal';
import Modal2 from '../elements/modal2';
import Modal3 from '../elements/modal3';

export default function Home() {

    // SETTING MODALS

    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    const [modalOpen2, setModalOpen2] = useState(false)
    const close2 = () => setModalOpen2(false)
    const open2 = () => setModalOpen2(true)

    const [modalOpen3, setModalOpen3] = useState(false)
    const close3 = () => setModalOpen3(false)
    const open3 = () => setModalOpen3(true)

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

                    {/* MODALS */}

                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={() => null}
                    >
                        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}></Modal>}
                    </AnimatePresence>

                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={() => null}
                    >
                        {modalOpen2 && <Modal2 modalOpen={modalOpen2} handleClose={close2}></Modal2>}
                    </AnimatePresence>

                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={() => null}
                    >
                        {modalOpen3 && <Modal3 modalOpen={modalOpen3} handleClose={close3}></Modal3>}
                    </AnimatePresence>

                    <div className='projects-container'>

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
                            onClick={() => (modalOpen2 ? close2() : open2())}
                        >
                            <h4 className='project-title'>FullStack Jack</h4>
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
                            onClick={() => (modalOpen3 ? close3() : open3())}
                        >
                            <h4 className='project-title'>Mental Health Check</h4>
                            <p className='project-description'>
                            This app provides the user with a quick and easy way to evaluate their mental health and gives them resources to help their current situation.
                            </p>
                        </motion.button>
                    
                    </div>

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