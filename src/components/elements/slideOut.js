import {motion} from 'framer-motion';


export default function SlideOut(){
const slideOut = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    },
    exit: {
        x: '100vw',
    }
}}