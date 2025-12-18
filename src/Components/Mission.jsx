import React, { useEffect } from "react";
import "./Mission.css";
import MissionImage from "../assets/Mission1.png";

const missionPoints = [
  {
    title: "Restaurant Excellence",
    description:
      "Simplifying order management and kitchen coordination with smart POS systems designed for seamless dining experiences.",
  },
  {
    title: "Fashion Forward",
    description:
      "Helping garment stores boost efficiency with inventory control, sales optimization, and a better customer journey.",
  },
  {
    title: "Supermarket Efficiency",
    description:
      "Streamlining supermarket operations through accurate inventory tracking, faster billing, and better insights.",
  },
  {
    title: "Education Enhancement",
    description:
      "Empowering schools and colleges with digital tools for academic management, communication, and engagement.",
  },
  {
    title: "Salon and Spa Bliss",
    description:
      "Optimizing client bookings, schedules, and revenue for a smooth and luxurious salon/spa experience.",
  },
  {
    title: "Sales Team Tracker",
    description:
      "Boosting field team performance with real-time tracking, reporting, and sales monitoring tools.",
  },
];

const Mission = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-left, .reveal-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission-container">
      {/* Left Content */}
      <div className="mission-left reveal-left">
        <h2 className="mission-title">Our Mission</h2>

        <p className="mission-intro">
          Our mission is to deliver transformative technology solutions that
          empower industries such as Agriculture, Education, Health Care,
          Banking, HRMS, CRM, Drop Shipping, IT Consulting, Desktop Support,
          and Cloud Services. We enable smarter operations, enhance
          decision-making, and elevate customer experiences through innovation
          and excellence.
        </p>

        <ul className="mission-list">
          {missionPoints.map((point, index) => (
            <li key={index}>
              <strong>{point.title}:</strong> {point.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <div className="mission-right reveal-right">
        <img src={MissionImage} alt="Mission" className="mission-img" />
      </div>
    </section>
  );
};

export default Mission;
