  import React, { useState } from "react";
  import "../Components/service.css";
  import Img1 from "../assets/Agriculture/1.png";
  import Img2 from "../assets/Agriculture/2.png";
  import Img3 from "../assets/Agriculture/3.png";
  import Img5 from "../assets/Agriculture/5.png";
  import Img14 from "../assets/Agriculture/14.png";
  import Img15 from "../assets/Agriculture/15.png";
  import Img18 from "../assets/Agriculture/18.png";
  import Img19 from "../assets/Agriculture/19.png";
  import Img20 from "../assets/Agriculture/20.png";
  import Img22 from "../assets/Agriculture/22.png";
  import { useNavigate } from "react-router-dom";
  import GetInTouch from "../Components/GetInTouch";

  const Service = () => {
    const services = [
      {
        title: "Agriculture",
        img: Img1,
        description: (
          <>
            <p>
              Agriculture is the foundation of human survival. It involves cultivating soil, growing crops, and raising animals.
            </p>
            <ul>
              <li>Crop Production: wheat, rice, pulses, fruits, vegetables</li>
              <li>Animal Husbandry: dairy, poultry, fisheries</li>
              <li>Organic & Sustainable Farming</li>
              <li>Precision Agriculture using IoT and AI</li>
            </ul>
            <p>Our digital solutions support farmers through automation, weather tracking, and crop advisory systems.</p>
          </>
        ),
      },
      {
        title: "Education",
        img: Img2,
        description: (
          <>
            <p>We build powerful education platforms for institutions and learners globally.</p>
            <ul>
              <li>Learning Management Systems (LMS)</li>
              <li>Virtual Classrooms with Real-time Interaction</li>
              <li>Online Exams, Results & Certificates</li>
              <li>Gamified & Adaptive Learning Tools</li>
            </ul>
            <p>Our solutions make learning fun, accessible, and measurable.</p>
          </>
        ),
      },
      {
        title: "Health Care",
        img: Img3,
        description: (
          <>
            <p>
              We build secure and scalable digital health platforms compliant with HIPAA and global standards.
            </p>
            <ul>
              <li>Telemedicine & Remote Consultations</li>
              <li>Patient Portals & Health Record Management</li>
              <li>Hospital Information Systems (HIS)</li>
              <li>Appointment Booking, Billing & Insurance</li>
            </ul>
            <p>Empowering clinics and hospitals to deliver better care through technology.</p>
          </>
        ),
      },
      {
        title: "Banking",
        img: Img5,
        description: (
          <>
            <p>
              We digitize banking processes with cutting-edge fintech solutions.
            </p>
            <ul>
              <li>Mobile & Internet Banking</li>
              <li>Digital Wallets & UPI Integrations</li>
              <li>Secure KYC, AML, and Fraud Detection Systems</li>
              <li>Loan Processing Automation</li>
            </ul>
            <p>We ensure robust security, scalability, and compliance in every solution.</p>
          </>
        ),
      },
      {
        title: "HRMS",
        img: Img14,
        description: (
          <>
            <p>Our HRMS tools streamline people management and improve productivity.</p>
            <ul>
              <li>Onboarding & Digital Documentation</li>
              <li>Attendance, Leave, and Shift Management</li>
              <li>Payroll with Tax Calculations</li>
              <li>Performance & Appraisal Tracking</li>
            </ul>
            <p>Empowering HR teams with automation and real-time analytics.</p>
          </>
        ),
      },
      {
        title: "CRM",
        img: Img15,
        description: (
          <>
            <p>Manage customer relationships efficiently with our CRM platforms.</p>
            <ul>
              <li>Lead Generation & Qualification Tools</li>
              <li>Email & Campaign Automation</li>
              <li>Customer History & Interaction Tracking</li>
              <li>Sales Pipeline & Conversion Reports</li>
            </ul>
            <p>Boost customer engagement and grow your business faster.</p>
          </>
        ),
      },
      {
        title: "Drop Shipping",
        img: Img18,
        description: (
          <>
            <p>Launch and manage your own online store with our drop shipping platform.</p>
            <ul>
              <li>Multi-Vendor Marketplace</li>
              <li>Automated Order Management</li>
              <li>Real-time Inventory Sync</li>
              <li>Sales & Revenue Analytics</li>
            </ul>
            <p>Expand your business with zero inventory cost and maximum automation.</p>
          </>
        ),
      },
      {
        title: "IT Consulting",
        img: Img19,
        description: (
          <>
            <p>Transform your business through strategic technology consulting.</p>
            <ul>
              <li>Tech Stack & Architecture Design</li>
              <li>Security Audits & Risk Assessments</li>
              <li>Digital Transformation Roadmaps</li>
              <li>Infrastructure Optimization</li>
            </ul>
            <p>We guide you to the most efficient and secure IT ecosystem.</p>
          </>
        ),
      },
      {
        title: "Desktop Support",
        img: Img20,
        description: (
          <>
            <p>Ensure smooth operations with our managed desktop support services.</p>
            <ul>
              <li>Software Installation & Troubleshooting</li>
              <li>Remote Helpdesk Assistance</li>
              <li>System Maintenance & Updates</li>
              <li>Data Backup & Recovery Solutions</li>
            </ul>
            <p>Minimize downtime and improve user productivity with expert support.</p>
          </>
        ),
      },
      {
        title: "Cloud Services",
        img: Img22,
        description: (
          <>
            <p>Leverage the power of the cloud to scale, secure, and innovate.</p>
            <ul>
              <li>AWS, Azure, Google Cloud Solutions</li>
              <li>Cloud Migration & Cost Optimization</li>
              <li>Serverless Architecture & CI/CD</li>
              <li>Data Storage, Backup & Disaster Recovery</li>
            </ul>
            <p>We enable cloud-native growth with maximum efficiency and uptime.</p>
          </>
        ),
      },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();

     const handleLearnMore = (title) => {
    const path = title.toLowerCase().replace(/\s+/g, "");
    navigate(`/${path}`);
  };

    return (
      <div className="services-page">
        <h2 className="service-heading">Key Services</h2>
        <div className="service-tabs">
          {services.map((service, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="service-content">
          <div className="service-text">
            <h3>{services[activeTab].title}</h3>
            {services[activeTab].description}
            <p className="learn-more" onClick={() => handleLearnMore(services[activeTab].title)} style={{ cursor: "pointer", color: "#007BFF" }}>Learn More ➜</p>
          </div>
          <div className="service-image">
            <img src={services[activeTab].img} alt={services[activeTab].title} />
          </div>
        </div>

 {/* Get in Touch Section */}
       <section>
         <GetInTouch />
       </section>
  

      </div>
    );
  };

  export default Service;
