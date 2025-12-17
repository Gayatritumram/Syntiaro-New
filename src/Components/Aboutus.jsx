import React, {useEffect, useRef } from "react";
import "./Aboutus.css";
import Testimonials from "./Testimonials";

import WWA from "../Components/WWA";
import Homeserv from "./homeService";
import bgVideo from "../assets/bgvideo1.mp4"
import GetInTouch from "../Components/GetInTouch";
import AIMLComp from "./AIMLComp";

const Aboutus = () => {


  const heroRef = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  return (
    <div className="about-page">
      {/* Hero Section */}
   <section className="hero-section" style={{ position: "relative", overflow: "hidden" }}>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source src={bgVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay content */}
  <div
    className="hero-overlay fade-up"
    ref={heroRef}
    style={{
      position: "relative",
      zIndex: 1,
      backgroundColor: "transparent", // Optional: Add overlay directly here
      padding: "2rem 1rem",
      textAlign: "center",
      color: "#fff",
    }}
  >
    <h1 className="fade-up">Empowering Innovation Through Technology</h1>
    <p className="fade-up">
      At SYNTIARO, we transform ideas into digital realities.
    </p>
  </div>
</section>

      {/* Who We Are Section */}
      <section className="wwa-section fade-up">
        <WWA />
      </section>

      {/* Mission + Vision Section */}
      <section className="mission-vision">
        <div className="mv-card fade-up">
          <h3>Our Mission</h3>
          <p>
            Our mission is to revolutionize industries by delivering cutting-edge, integrated solutions that empower growth, innovation, and transformation. We strive to uplift Agriculture, Education, Health Care, and Banking sectors
          </p>
        </div>
        <div className="mv-card fade-up">
          <h3>Our Vision</h3>
          <p>
            Our vision is to lead the future of global innovation by creating a connected, intelligent ecosystem that transforms the way industries operate, people engage, and businesses evolve.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section >
      <Homeserv/>
      <AIMLComp/>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonial-section fade-up">
        <div className="testimonial-column fade-up">
          <Testimonials />
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="get-section fade-up">
        <GetInTouch />
      </section>
    </div>
  );
};

export default Aboutus;
