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
                    <h2 className='modal-title'>FullStack Jack</h2>
                    <h3 className='modal-tech'>
                        Technologies: HTML, CSS, JavaScript, Bootstrap, Express, Handlebars, MySQL<br/>
                        Roll: Front-end Developer
                    </h3>
                <motion.div className="modal-body">
                    <p>
                    fullStack Jack is an online version of the popular card game Blackjack. This free version of the game allows you to play against the dealer and earn points by winning hands. Create an account to start accumulating points or just casually play offline. You can compare your scores to other players on the leaderboard.
                    </p>
                    <a className='project-links' href='https://young-atoll-21457.herokuapp.com/'>Live App</a>
                    <a className='project-links' href='https://github.com/WillYazdani/full_stack_jack'>Github</a>
                </motion.div>
            </motion.div>
        </motion.div>
        
                    
    )
}