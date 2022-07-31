import React from 'react';
import '../CSS/home.css';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';

export default function Carousel() {
    return(
        <div className='carousel-wrapper'>
                        <div className='carousel'>
                            <button className='carousel__button carousel__button--left'>
                                <img src={left} alt={left} className='carousel-button-left' />
                            </button>
                            <div className='carousel__track-container'>
                                <ul className='carousel__track'>
                                    <li className='carousel__slide'>
                                        <img src={html} alt={html} className='carousel__image' />
                                    </li>
                                    <li className='carousel__slide'>
                                        <img src={css} alt={css} className='carousel__image' />
                                    </li>
                                    <li className='carousel__slide'>
                                        <img src={js} alt={js} className='carousel__image' />
                                    </li>
                                </ul>    
                            </div>  
                            <button className='carousel__button carousel__button--right'>
                                <img src={right} alt={right} className='carousel-button-right' /> 
                            </button>
                            <div className='carousel__nav'>
                                <button className='carousel__indicator current-slide' />
                                <button className='carousel__indicator' />
                                <button className='carousel__indicator' />
                            </div> 
                        </div>
                    </div>
    )
}