
// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <img src="/logo192.png" alt="Bore Fountain pens" />
            <h1>Welcome to Bore fountain pens</h1>
            <p>Web site for handcrafted Gerhart Bore Fountain pens.</p>
            <div className={`cafe-color-box ${isBlue ? 'cafe-blue' : 'cafe-red'}`}></div>
            <button className="cafe-button" onClick={toggleColor}>Change Color</button>
        </div>
    );
};

export default HomePage;

