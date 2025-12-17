import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EnquiryPopup.css";
import { CgClose } from "react-icons/cg";

const EnquiryPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiry: "",
  });

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!popupClosed) {
        setShowPopup(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [popupClosed]);

  const handleClose = () => {
    setShowPopup(false);
    setPopupClosed(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/enquiry", formData);

      if (res.status === 200 || res.status === 201) {
        setSuccessMessage("Enquiry submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          enquiry: "",
        });

        // Close popup after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
          setShowPopup(false);
          setPopupClosed(true);
        }, 3000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting enquiry. Is your backend running?");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={handleClose}>
          <CgClose />
        </button>
        <h3>Inquiry Form</h3>
        <form onSubmit={handleSubmit}>
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
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
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
          <input
            type="text"
            name="enquiry"
            placeholder="Inquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default EnquiryPopup;
