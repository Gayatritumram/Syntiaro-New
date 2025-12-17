import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/Banerbg3.png"; 
import "../Components/GetInTouch.css"; 

const GetInTouchSection = () => {
  const navigate = useNavigate();

  return (
    <section className="inquiry-section-maiin"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "40vh",
        padding: "10px",
      }}
    >
      <div className="inquiry-content">
      <h2 className="inquiry-heading">With SYNTIARO, Innovate Beyond Limits</h2>
      <button className="get-in-touch-btn" onClick={() => navigate("/career")}>
        Get In Touch
      </button>
      </div>
    </section>
  );
};

export default GetInTouchSection;
