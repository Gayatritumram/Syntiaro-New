import React, { useState } from "react";
import axios from "axios";
import "../Components/career.css";
import noOpeningsImage from "../assets/no-job.jpg";
import GetInTouch from "../Components/GetInTouch";

const Career = () => {
  const [modal, setModal] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: ""
  });

  const toggleModal = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Apply validation logic
    if (name === "name") {
      // Allow only letters and space
      const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyLetters }));
    } else if (name === "contactNumber") {
      // Allow only digits and max 10 characters
      const onlyNumbers = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
    } else {
      // Allow normal behavior for email and message
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/career", formData);
      if (res.status === 200) {
        setSuccessPopup(true);
        setFormData({ name: "", contactNumber: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Form submission failed", err);
    }
  };

  return (
    <>
      <section className="careerpage-section">
        <div className="careerpage-header">
          <h1 className="careerpage-title">
            <span className="normal-text">Careers at </span>
            <span className="careerpage-glow-text">SYNTIARO</span>
          </h1>
          <p>Be a part of innovation and excellence.</p>
        </div>

        <div className="careerpage-body">
          <div className="careerpage-left">
            <h2>Why Join Us?</h2>
            <ul className="careerpage-why-list">
              <li><strong>Real-World Projects:</strong> Gain practical experience on live projects.</li>
              <li><strong>Mentorship:</strong> Learn from experienced developers and designers.</li>
              <li><strong>Skill Development:</strong> Work with cutting-edge technologies.</li>
              <li><strong>Networking:</strong> Connect with like-minded professionals.</li>
              <li><strong>Career Opportunities:</strong> Potential for full-time roles post-internship.</li>
            </ul>
            <button className="careerpage-openings-btn" onClick={toggleModal}>See Current Openings</button>
          </div>

          <div className="careerpage-right">
            <form className="careerpage-form" onSubmit={handleSubmit}>
              <h2>Contact with Us</h2>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                maxLength="10"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {modal && (
        <div className="careerpage-popup-overlay" onClick={toggleModal}>
          <div className="careerpage-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="careerpage-popup-close" onClick={toggleModal}>✕</button>
            <img src={noOpeningsImage} alt="No Openings" className="careerpage-popup-image" />
          </div>
        </div>
      )}

      {successPopup && (
        <div className="careerpage-popup-overlay" onClick={() => setSuccessPopup(false)}>
          <div className="careerpage-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="careerpage-popup-close" onClick={() => setSuccessPopup(false)}>✕</button>
            <p style={{ textAlign: "center", fontSize: "16px" }}>
              Form submitted successfully!
            </p>
          </div>
        </div>
      )}

      {/* Get in Touch Section */}
      <section>
        {/* <GetInTouch /> */}
      </section>
    </>
  );
};

export default Career;
