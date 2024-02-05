import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-text-container"> 
            <h1>Contact Us</h1>
            <p>Got questions? We're here to help!</p>
            </div>
            <div className="contact-info">
                <p>Email:</p>
                <h1>hi@pointifyapp.com</h1>
            </div>
        </footer>
    );
};

export default Footer;
