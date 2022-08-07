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
                    <h2 className='modal-title'>ReactJack</h2>
                    <h3 className='modal-tech'>
                        Technologies: HTML, CSS, React<br/>
                        Roll: Front End Developer
                    </h3>
                <motion.div className="modal-body">
                    <p>
                        Ilorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <a className='project-links' href='https://github.com/WillYazdani'>Live Demo</a>
                    <a className='project-links' href='https://github.com/WillYazdani'>Github</a>
                </motion.div>
            </motion.div>
        </motion.div>
        
                    
    )
}