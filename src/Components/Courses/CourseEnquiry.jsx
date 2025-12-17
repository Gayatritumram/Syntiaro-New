import React, { useRef, useState, } from "react";
import axios from "axios";
import "../EnquiryPopup.css";
import { useLocation } from "react-router-dom";

const CourseEnquiry = () => {
  const location = useLocation();
  const { courseName = "", pdfFile = "" } = location.state || {};

  const downloadLinkRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    courseName: courseName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      await axios.post("http://localhost:8080/course/add", formData);
      await axios.post("http://localhost:8080/email/sendCourse", formData);
      alert("Enquiry submitted successfully!");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        courseName: courseName,
      });

      // Trigger syllabus download
      if (downloadLinkRef.current) {
        downloadLinkRef.current.click();
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Failed to submit inquiry. Please try again.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>Course Inquiry Form</h3>
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
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            readOnly
          />
          <button type="submit">Submit</button>
        </form>

        {/* Hidden download link */}
        {pdfFile && (
          <a
            href={pdfFile}
            download
            ref={downloadLinkRef}
            style={{ display: "none" }}
          >
            Download
          </a>
        )}
      </div>
    </div>
  );
};

export default CourseEnquiry;
