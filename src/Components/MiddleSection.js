import React from 'react';
import './MiddleSection.css'; 
import pointifyCardSelected from "../assets/images/pointify-card-selected.png";
import pointifyLogin from "../assets/images/pointify-login.png";
import pointifyJoin from "../assets/images/pointify-join.png";

const MiddleSection = () => {
    return (
        <section className="middle-section">
            <img id="img-1"src={pointifyLogin} alt="Pointify Login Page" />
            <img src={pointifyCardSelected} alt="Pointify Credit Card Selection Page" />
            <h2 className="middle-title">Pointify isn't just a web extension; it's your financial 
            companion. Pointify makes the most of your spending habits by intuitively recommending 
            the best credit card for each transaction. No more missed rewards or cashback 
            opportunities—just seamless savings tailored to your lifestyle.
            </h2>
        </section>
    );
};

export default MiddleSection;