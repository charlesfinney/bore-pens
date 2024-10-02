import React from 'react';
import './MainContent.css';
import { FaPen, FaSmoking, FaBriefcase, FaTools, FaGift, FaInfoCircle } from 'react-icons/fa';

// Definition der MainContent-Funktionskomponente
const MainContent = () => {
    // Definition eines Arrays von Kategorieobjekten, jedes mit einem Icon und Titel
    const categories = [
        { icon: <FaPen />, title: "Handgefertigte Stifte" },
        { icon: <FaSmoking />, title: "Kunstvolle Pfeifen" },
        { icon: <FaBriefcase />, title: "Ledertaschen" },
        { icon: <FaTools />, title: "Sonderanfertigungen" },
        { icon: <FaGift />, title: "Geschenksets" },
        { icon: <FaInfoCircle />, title: "Pflege & Wartung" },
        { icon: <FaPen />, title: "Limitierte Auflagen" },
        { icon: <FaSmoking />, title: "Tabak-Mischungen" },
        { icon: <FaBriefcase />, title: "Zubehör" },
        { icon: <FaTools />, title: "Reparaturservice" },
        { icon: <FaGift />, title: "Firmengeschenke" },
        { icon: <FaInfoCircle />, title: "Unsere Handwerkskunst" },
    ];

    // Rückgabe des JSX für die Komponente
    return (
        <div className="main-content">
            {/* Navigationsmenü */}
            <nav className="category-nav">
                <ul>
                    <li><a href="#pens">Stifte</a></li>
                    <li><a href="#pipes">Pfeifen</a></li>
                    <li><a href="#leather">Lederwaren</a></li>
                    <li><a href="#custom">Sonderanfertigungen</a></li>
                    <li><a href="#gifts">Geschenke</a></li>
                    <li><a href="#about">Über uns</a></li>
                </ul>
            </nav>

            {/* Raster von Kategorieelementen */}
            <div className="category-grid">
                {/* Durchlaufen des Kategorie-Arrays, um Kategorieelemente zu erstellen */}
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <div className="category-icon">{category.icon}</div>
                        <div className="category-title">{category.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Exportieren der Komponente, damit sie in anderen Teilen der Anwendung verwendet werden kann
export default MainContent;