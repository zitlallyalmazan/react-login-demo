import React, { useState, useEffect } from 'react';
import './styles.css';

const TIMER_DURATION = 30;

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);

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

    return (
        <div className="countdown">
            <h2>Timer</h2>
            <div className="content">
                <div className="box">
                    <div className="value">{timeLeft}</div>
                    <span className="label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
