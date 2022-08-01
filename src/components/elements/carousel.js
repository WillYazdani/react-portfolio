import React, {useRef, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import images from '../JS/images';
import '../CSS/home.css';

export default function Carousel() {


    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    } , []);

    return(
        <div className="carousel-wrapper">
            <motion.div className='carousel' ref={carousel} whileTap={{cursor:'grabbing'}}>
                <motion.div drag ='x' dragConstraints={{right:0, left: -width}} className='inner-carousel'>
                    {images.map(image => {
                        return(
                            <motion.div className='item' key={image}>
                                <img src={image} alt=''/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
            
    )
}