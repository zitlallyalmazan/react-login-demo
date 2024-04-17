import React, { useState, useEffect } from 'react';
import './styles.css';

const TIMER_DURATION = 30; // Timer duration in seconds

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [countdownColor, setCountdownColor] = useState('black');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft === 0) {
                    clearInterval(timer);
                    // Timer has expired, you can handle what happens next here
                }
                return prevTimeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleColorChange = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random color
        setCountdownColor(randomColor);
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
            <button onClick={handleColorChange}>Change color</button>
        </div>
    );
};

export default Countdown;
