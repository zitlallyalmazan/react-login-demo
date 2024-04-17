import React, { useState, useEffect } from 'react';
import './styles.css';
import Explosion from '../explosion.jsx';

const TIMER_DURATION = 30; // Timer duration in seconds

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [countdownColor, setCountdownColor] = useState('black');
    const [showExplosion, setShowExplosion] = useState(false);
    const [explodeClicked, setExplodeClicked] = useState(false);
    const [explodeBeforeTen, setExplodeBeforeTen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft === 0) {
                    clearInterval(timer);
                    if (explodeClicked && !explodeBeforeTen) {
                        
                    }
                } else if (prevTimeLeft === 10 && explodeClicked) {
                    setShowExplosion(true);
                    setExplodeBeforeTen(true);
                    setTimeout(() => {
                        // Redirect the user after showing explosion
                        window.location.href = '/exploded';
                    }, 1000);
                }
                return prevTimeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [explodeClicked, explodeBeforeTen]);

    const handleColorChange = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random color
        setCountdownColor(randomColor);
    };

    const explosion = () => {
        setExplodeClicked(true);
        if (timeLeft >= 10) {
            setShowExplosion(true);
        }
    };

    return (
        <div className="countdown">
            <h2>Timer</h2>
            <div className="content">
                <div className="box">
                    <div className="value" style={{ color: countdownColor }}>{timeLeft}</div>
                    <span className="label">Seconds</span>
                </div>
            </div>
            <div className="button-container">
                <button className="colorchange" onClick={handleColorChange}>Change color</button>
                <button className="explode" onClick={explosion}>Explode</button>
            </div>
            {showExplosion && <Explosion />}
        </div>
    );
};

export default Countdown;