import React, { useEffect } from "react";
import "./HeroSection.css";
import pointifyCardSelected from "../assets/images/pointify-card-selected.png";
import pointifyLogin from "../assets/images/pointify-login.png";
import pointifyCardSelect from "../assets/images/pointify-card-select.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

useEffect(() => {
    gsap.to(".image1", {
      x: "-=10%", // Move the image to the left
      rotation: -13, // Rotate left
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  
    gsap.to(".image3", {
      x: "+=10%", // Move the image to the right
      rotation: 13, // Rotate right
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    
    const hoverEffect = (image) => {
      gsap.to(image, {
        y: -10,
        scale: 1.00,
        boxShadow: "10px 10px 30px rgba(0,0,0,0.5)",
        overwrite: 'auto' // Ensure this animation takes precedence when it starts
      });
    };
  
    const resetEffect = (image) => {
      gsap.to(image, {
        y: 0,
        scale: 1,
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        overwrite: 'auto'
      });
    };
  
    // Add hover effect to each image individually
    gsap.utils.toArray('.images-container img').forEach((image) => {
      image.addEventListener('mouseenter', () => hoverEffect(image));
      image.addEventListener('mouseleave', () => resetEffect(image));
    });

  
  }, []);
  
      

  return (
    <header className="hero-section">
      <h1 className="hero-title">Swipe. Save. <br /> Simplify.</h1>
      <p className="hero-subtitle">
        Welcome to Pointify, where every transaction is an opportunity for
        savings. With Pointify, savvy shopping is not just a choice—it's a
        lifestyle. Our innovative browser extension transforms the way you use
        your credit cards, maximizing rewards and savings effortlessly as you
        shop.
      </p>
      <div className="images-container">
        <img src={pointifyLogin} alt="Join Pointify" className="image1" />
        <img src={pointifyCardSelect} alt="Login to Pointify" className="image2" />
        <img src={pointifyCardSelected} alt="Pointify Card Selected" className="image3" />
      </div>
      <button
        className="download-btn"
        onClick={() => {
          /* download logic */
        }}
      >
        DOWNLOAD EXTENSION
      </button>
    </header>
  );
};

export default HeroSection;
