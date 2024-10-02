import React, { useState } from 'react';
import './Hero.css'; 
import pen from '../assets/img/pen.png';

function Hero() {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="hero">
            <img src={pen} alt="Bore Füllfederhalter" className="responsive-image" />
            <h2>"Das Holz, das schreibt"</h2>
            <p>Webseite für handgefertigte Gerhart Bore Füllfederhalter.</p>
            <div className={`color-box ${isBlue ? 'blue' : 'red'}`}></div>
            <button className="button" onClick={toggleColor}>Farbe ändern</button>
        </div>
    );
}

export default Hero;