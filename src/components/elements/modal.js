import {motion} from 'framer-motion';
import slideOut from '../elements/slideOut';

export default function Modal(){
    return(
        <motion.div
            className="modal"
            initial={{x: "100vw"}}
            animate={{x: 0}}
            exit={{x: "100vw"}}
            transition={{duration: 0.5}}
        >
            <motion.div className="modal-content">
                <motion.div className="modal-header">
                    <h2>Modal Header</h2>
                    <motion.button
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
                        
                        onClick={() => null}
                    >
                        Sample
                    </motion.button>
                </motion.div>
                <motion.div className="modal-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisi vel consectetur interdum, nisl nisi
                        aliquam nisi, euismod consectetur nisi nisi euismod
                        consectetur.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
        
                    
    )
}