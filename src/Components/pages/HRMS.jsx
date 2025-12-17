import React from "react";
import Img1 from "../../assets/Agriculture/10.png";
import "./HRMS.css";
import GetInTouch from "../GetInTouch";

const HRMS = () => {
  return (
    <div className="hrms-details">
      <h2>Human Resource Management System (HRMS)</h2>
      <div className="hrms-content">
        <div className="hrms-text">
          <p>
            Our HRMS solution helps organizations manage their human capital efficiently—from recruitment to retirement—streamlining every aspect of employee lifecycle management.
          </p>
          <ul>
            <li><strong>Employee Records:</strong> Centralized database for personal and professional details</li>
            <li><strong>Attendance & Leave Management:</strong> Real-time tracking, approvals, calendar views</li>
            <li><strong>Payroll Automation:</strong> Accurate salary calculations, tax deductions, payslips</li>
            <li><strong>Performance Management:</strong> Goal setting, appraisals, feedback</li>
            <li><strong>Recruitment & Onboarding:</strong> Job posting, applicant tracking, offer letters</li>
            <li><strong>Self-Service Portal:</strong> Employees can update profiles, request leaves, and more</li>
          </ul>
          <p>
            Our system empowers HR teams to make data-driven decisions, reduce administrative work, and improve employee satisfaction.
          </p>
        </div>
        <div className="hrms-images">
          <img src={Img1} alt="HRMS 1" />
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

export default HRMS;
