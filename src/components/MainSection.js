import React from 'react';
import './css/MainSection.css';
import { ButtonSignUp } from './ButtonSignUp'

const MainSection = () => {
    return (
        <div className="main-container">
            <video src="/videos/airpot.mp4" autoPlay loop muted />
            <div className="main-body">
            <h1>Flight Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <ButtonSignUp className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</ButtonSignUp>
                <ButtonSignUp className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Trailer <i className="far fa-play-circle"></i></ButtonSignUp>
            </div>
            </div>
        </div>
    )
}

export default MainSection
