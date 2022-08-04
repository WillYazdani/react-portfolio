import {motion} from 'framer-motion';
import Modal from '../elements/modal';


export default function SlideOut(){
const slideOut = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            damping: 25
        }
    },
    exit: {
        x: '100vw',
    }
}}