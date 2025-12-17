// components/Caro.jsx
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Components/caro.css";

const Caro = ({ carouselItems }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const goToPrevious = () => {
    const prevIndex = index === 0 ? carouselItems.length - 1 : index - 1;
    setIndex(prevIndex);
  };

  const goToNext = () => {
    const nextIndex = index === carouselItems.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  };

  // 🔁 Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="custom-carousel-container" data-aos="fade-up">
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} fade>
        {carouselItems?.length > 0 ? (
          carouselItems.map((item, idx) => (
            <Carousel.Item key={idx} data-aos="fade-up">
              <div
                className="caro-background"
                style={{ backgroundImage: `url(${item.imgPath})` }}
              >
                <div className="caro-overlay">
                  <div className="caro-content">
                    {/* You can add text/buttons here if needed */}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <div className="caro-background">
              <p>No items available</p>
            </div>
          </Carousel.Item>
        )}
      </Carousel>

      {/* Custom controls */}
      <div className="custom-control-bar" data-aos="fade-up">
        <button className="custom-control-btn" onClick={goToPrevious}>
          &lt;
        </button>

        <div className="custom-indicators">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              className={`custom-indicator ${idx === index ? "active" : ""}`}
              onClick={() => setIndex(idx)}
            >
              •
            </button>
          ))}
        </div>

        <button className="custom-control-btn" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Caro;
