import React from 'react'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>Las aventuras te aguardan...</h1>
            <p>¿Que estas esperando?</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline" 
                    buttonSize="btn--large"
                >
                    Empezar
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary" 
                    buttonSize="btn--large"
                >
                    Mirar triler 
                    <i className='far fa-play-circle' />
                </Button>  
            </div>
        </div>
    )
}

export default HeroSection
