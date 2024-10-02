import React from 'react';
import './HomePage.css';
import Header from './Header';
import Hero from './Hero';
import MainContent from './MainContent';
import Footer from './Footer';  // Change this to match the actual file name casing

function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <Hero />
            <MainContent />
            <Footer />
        </div>
    );
}

export default HomePage;

