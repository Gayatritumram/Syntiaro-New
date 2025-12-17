// Education.js
import React from "react";
import Img1 from "../../assets/Agriculture/2.png";
import "./Education.css";
import GetInTouch from "../GetInTouch";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-heading">Education Solutions</h2>
      <div className="education-content">
        <div className="education-text">
          <p>
            Education is the cornerstone of societal progress. Our digital education solutions help institutions modernize and personalize learning experiences.
          </p>
          <ul>
            <li><strong>Learning Management Systems (LMS):</strong> Interactive and user-friendly platforms</li>
            <li><strong>e-Learning Content:</strong> Multimedia-rich courses, quizzes, and assessments</li>
            <li><strong>Student Information Systems:</strong> Attendance, grading, and academic tracking</li>
            <li><strong>Virtual Classrooms:</strong> Real-time collaboration tools for teaching</li>
            <li><strong>Performance Analytics:</strong> Data-driven insights for educators and students</li>
            <li><strong>Mobile Learning:</strong> Seamless access to content on smartphones and tablets</li>
          </ul>
          <p>
            Our education technology solutions make learning accessible, measurable, and impactful across all age groups.
          </p>
        </div>
        <div className="education-images">
          <img src={Img1} alt="Education 1" />
        </div>
      </div>

       <div className="get">
        {/* Get in Touch Section */}
      <section>
        <GetInTouch />
      </section>
       </div>
    </div>
  );
};

export default Education;
