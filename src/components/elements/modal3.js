import {motion} from 'framer-motion';
import slideOut from '../elements/slideOut';

export default function Modal({handleClose}){
    return(
        <motion.div
            className="modal"
            initial={{x: "100vw"}}
            animate={{x: 0}}
            exit={{x: "100vw"}}
            transition={{duration: 0.5}}
        >
            <motion.button
                className="modal-close"
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
                // close modal on click
                
                onClick={handleClose}
                variants={slideOut}
            >
                Close
            </motion.button>
            <motion.div className="modal-content">
                    <h2 className='modal-title'>Mental Health Check</h2>
                    <h3 className='modal-tech'>
                        Technologies: HTML, CSS, JavaScript, React, MongoDB, Express<br/>
                        Roll: Front-end Developer
                    </h3>
                <motion.div className="modal-body">
                    <p>
                    A mental health quiz app that helps users track their moods using standardized screening tests. Mental Health Check tests users with multiple quiz options to help users understand and identify their feelings. The app is a Progressive Web Application including the ability to take and save quiz results offline. The application uses a React.js front-end with MongoDB and Express.js running the back-end and Node.js as the package manager.
                    </p>
                    <a className='project-links' href='https://mh-check.herokuapp.com/'>Live App</a>
                    <a className='project-links' href='https://github.com/WillYazdani/mental-health-check'>Github</a>
                </motion.div>
            </motion.div>
        </motion.div>
        
                    
    )
}