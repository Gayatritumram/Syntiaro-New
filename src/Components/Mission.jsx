import React from "react";
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
  return (
    <section className="mission-container fade-slide-in">
      <div className="mission-left">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-intro">
          Our mission is to deliver transformative technology solutions that empower industries such as Agriculture, Education, Health Care, Banking, HRMS, CRM, Drop Shipping, IT Consulting, Desktop Support, and Cloud Services. We strive to enable smarter operations, enhance decision-making, and elevate customer experiences. Through innovative tools and a commitment to excellence, we bridge the gap between traditional practices and modern efficiency, fostering sustainable growth for our clients and communities.
        </p>
        <ul className="mission-list">
          {missionPoints.map((point, index) => (
            <li key={index}>
              <strong>{point.title}:</strong> {point.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="mission-right fade-slide-in delay">
        <img
          src={MissionImage}
          alt="Mission"
          className="mission-img"
        />
      </div>
    </section>
  );
};

export default Mission;
