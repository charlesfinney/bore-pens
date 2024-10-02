import React from 'react';
import './Header.css';
import logo from '../assets/img/logo192.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Gerhard Bóre Logo" className="logo" />
                <span className="slogan">"Le bois qui écrit" Das Holz, das schreibt</span>
            </div>
            <nav className="header-right">
                <ul>
                    <li><a href="#home">Startseite</a></li>
                    <li><a href="#products">Produkte</a></li>
                    <li><a href="#about">Über uns</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;