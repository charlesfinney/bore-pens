import React from 'react';
import './Footer.css';
import twitterIcon from '../assets/img/icon-x.png';
import facebookIcon from '../assets/img/icon-facebook.png';
import instagramIcon from '../assets/img/icon-instagram.png';
import tiktokIcon from '../assets/img/icon-tiktok.png';
import youtubeIcon from '../assets/img/icon-youtube.png';
import logo from '../assets/img/logo192.png'; // Logo importieren

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Gerhard Bóre Logo" className="footer-logo" />
            <div className="footer-content">
                <h2>Gerhard Bóre Atelier</h2>
                <p>123 Handwerkerstraße, Kunststadt, Stiftland 54321</p>
                <p>Telefonnummer: +1 (555) 123-4567 (Kundenservice)</p>
                <p>Füllfederhalter-Atelier Öffnungszeiten:</p>
                <p>9:00 Uhr - 18:00 Uhr Montag bis Freitag, geschlossen an Wochenenden und Feiertagen</p>
                
                
                <div className="footer-buttons">
                    <button className="footer-button">Treffen planen</button>
                    <button className="footer-button">Kontaktieren Sie uns</button>
                    <button className="footer-button">FAQ</button>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links">
                    <a href="/sitemap">Sitemap</a>
                    <a href="/language">Sprache</a>
                    <a href="/FAQ">FAQ</a>
                </div>
            </div>
            <div className="social-media-wrapper">
                <div className="social-media">
                    <a href="/#" aria-label="Twitter"><img src={twitterIcon} alt="Twitter" /></a>
                    <a href="#" aria-label="Facebook"><img src={facebookIcon} alt="Facebook" /></a>
                    <a href="#" aria-label="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
                    <a href="#" aria-label="TikTok"><img src={tiktokIcon} alt="TikTok" /></a>
                    <a href="#" aria-label="YouTube"><img src={youtubeIcon} alt="YouTube" /></a>
                </div>
                <div className="copyright">
                    <p class="copyright">©2024 Gerhard Bóre Handgefertigte Füllfedern und Pfeifen. Alle Rechte vorbehalten.</p>
   
                </div>
            </div>
        </footer>
    );
};

export default Footer;