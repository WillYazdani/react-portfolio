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
                    <h2 className='modal-title'>Parallax Gallery</h2>
                    <h3 className='modal-tech'>
                        Technologies: HTML, CSS, Sass, React<br/>
                        Roll: Solo Developer
                    </h3>
                <motion.div className="modal-body">
                    <p>
                        I always wondered when I was taking photos how I could capture more informormation with a single image. If only I could make the view feel as if they were actually in the scene. I stumbled upon a really cool parallax scrolling effect on a website that make me think that I could actually take my photos to the next level and achieve what I had previously dreamed of.
                        <br/><br/>
                        This is a gallery built in react that uses parallax to make the images have a 3D effect. Hover over the images to see the effect. All photos are taken and edited by myself.
                        <br/><br/>
                        App is still in development, prototype will be available soon!
                    </p>
                    <a className='project-links' href='https://github.com/WillYazdani/parallax-gallery'>Github</a>
                </motion.div>
            </motion.div>
        </motion.div>
        
                    
    )
}