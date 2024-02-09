import React from "react";
import "./FeaturesSection.css";
import pointifyPopup from "../assets/images/pointify-popup-checkout.png";
import pointifyWidget from "../assets/images/pointify-widget.png"
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Image will slide in when 50% of it is visible
  });

  return (
    <section className="features-section">
      <h2 id="features-header">Extension Features</h2>
      <div ref={ref} className={`image-container ${inView ? "active" : ""}`}>
        <img src={pointifyPopup} alt="Pointify Popup Checkout" />
      </div>
      <img src={pointifyWidget} alt="Mobile Specific Widget" className="mobile-image" />
      <div className="feature-text">
        <h2 className="features-title">Smart Card Selector</h2>
        <p>
          With the ability to choose from 500+ credit cards globally, Pointify
          analyzes your active credit card benefits to recommend the best credit
          card to use for each purchase. Say goodbye to missed rewards and hello
          to optimized savings!
        </p>
        <h2 className="features-title">Real-Time Notifications</h2>
        <p>
          Compatiable with 5000+ online merchants, our browser extension subtly
          notifies you at checkout to ensure you're always a click away from
          smarter spending.
        </p>
        <h2 className="features-title">Mobile App Coming Soon</h2>
        <p>
          Our innovative location-based technology will revolutionize your
          shopping experience. Whether you're dining out, filling up your tank,
          or hitting the mall, Pointify will be your personal finance concierge,
          alerting you to the best card to use at the point of sale.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
