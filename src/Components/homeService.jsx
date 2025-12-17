import React, { useState, useEffect } from "react";
import "../Components/homeService.css";
import Img1 from "../assets/Agriculture/Agri.png";
import Img2 from "../assets/Agriculture/Edu.png";
import Img3 from "../assets/Agriculture/Health.png";
import Img5 from "../assets/Agriculture/Bank.jpg";
import Img14 from "../assets/Agriculture/HRMS.jpg";
import Img15 from "../assets/Agriculture/CRM.jpg";
import Img18 from "../assets/Agriculture/DropShip.jpg";
import Img19 from "../assets/Agriculture/ITConl.jpg";
import Img20 from "../assets/Agriculture/DesktopSupp.jpg";
import Img22 from "../assets/Agriculture/CloudServ.jpg";
import { useNavigate } from "react-router-dom";

const HomeService = () => {
  const services = [
    {
      title: "Agriculture",
      img: Img1,
      description: (
        <>
          <p>
            Agriculture is the cornerstone of human civilization—encompassing the cultivation of land, crop production, and animal rearing to sustain global populations.
          </p>
          <ul>
            <li><strong>Crop Production:</strong> Wheat, rice, pulses, fruits, and vegetables</li>
            <li><strong>Animal Husbandry:</strong> Dairy farming, poultry, and fisheries</li>
            <li><strong>Organic & Sustainable Practices:</strong> Eco-friendly and soil-conserving methods</li>
            <li><strong>Precision Agriculture:</strong> Leveraging IoT, AI, and data analytics for smarter farming</li>
          </ul>
          <p>
            Our digital solutions empower farmers with advanced tools for automation, real-time weather forecasting, and personalized crop advisory—driving efficiency and sustainability in modern agriculture.
          </p>
        </>
      ),
    },
    {
      title: "Education",
      img: Img2,
      description: (
        <>
          <p>
            We design robust digital education platforms that empower institutions, educators, and learners across the globe.
          </p>
          <ul>
            <li><strong>Learning Management Systems (LMS):</strong> Centralized course delivery and progress tracking</li>
            <li><strong>Virtual Classrooms:</strong> Real-time collaboration, live sessions, and interactive tools</li>
            <li><strong>Assessment Tools:</strong> Online exams, instant results, and verifiable digital certificates</li>
            <li><strong>Gamified & Adaptive Learning:</strong> Personalized experiences that boost engagement and retention</li>
          </ul>
          <p>
            Our innovative solutions make education more engaging, inclusive, and measurable—enabling continuous learning anytime, anywhere.
          </p>
        </>
      ),
    },
    {
      title: "Healthcare",
      img: Img3,
      description: (
        <>
          <p>
            We develop secure, scalable, and compliant digital health platforms aligned with HIPAA and international healthcare standards.
          </p>
          <ul>
            <li><strong>Telemedicine:</strong> Virtual consultations and remote patient monitoring</li>
            <li><strong>Patient Portals:</strong> Access to health records, prescriptions, and communication tools</li>
            <li><strong>Hospital Information Systems (HIS):</strong> Streamlined management of clinical, administrative, and financial workflows</li>
            <li><strong>Integrated Services:</strong> Appointment scheduling, billing, and insurance processing</li>
          </ul>
          <p>
            Our solutions empower healthcare providers to enhance patient care, improve operational efficiency, and embrace digital transformation.
          </p>
        </>
      ),
    },

    {
      title: "Banking",
      img: Img5,
      description: (
        <>
          <p>
            We modernize banking operations through innovative, secure, and scalable fintech solutions tailored to evolving customer and regulatory needs.
          </p>
          <ul>
            <li><strong>Mobile & Internet Banking:</strong> Seamless digital access to financial services</li>
            <li><strong>Digital Wallets & UPI Integration:</strong> Fast, secure, and user-friendly payment systems</li>
            <li><strong>KYC, AML & Fraud Detection:</strong> Automated compliance and real-time risk mitigation</li>
            <li><strong>Loan Processing Automation:</strong> Accelerated approvals and end-to-end workflow management</li>
          </ul>
          <p>
            Our banking solutions are built for high performance, data protection, and full regulatory compliance—empowering financial institutions to deliver trusted digital experiences.
          </p>
        </>
      ),
    },
    {
      title: "HRMS",
      img: Img14,
      description: (
        <>
          <p>
            Our Human Resource Management System (HRMS) solutions streamline employee lifecycle management, enhance efficiency, and support data-driven decision-making.
          </p>
          <ul>
            <li><strong>Onboarding & Digital Documentation:</strong> Simplified hiring workflows and paperless records</li>
            <li><strong>Attendance, Leave & Shift Management:</strong> Real-time tracking and flexible scheduling</li>
            <li><strong>Payroll Automation:</strong> Accurate salary processing with built-in tax and compliance handling</li>
            <li><strong>Performance & Appraisal:</strong> Goal tracking, reviews, and feedback analytics</li>
          </ul>
          <p>
            We empower HR teams with intelligent automation, real-time insights, and seamless integrations—driving productivity and employee engagement.
          </p>
        </>
      ),
    },
    {
      title: "CRM",
      img: Img15,
      description: (
        <>
          <p>
            Enhance customer engagement and drive sales growth with our intelligent CRM platforms—built to manage relationships, automate workflows, and deliver personalized experiences.
          </p>
          <ul>
            <li><strong>Lead Management:</strong> Tools for lead generation, qualification, and nurturing</li>
            <li><strong>Email & Campaign Automation:</strong> Targeted outreach with real-time performance tracking</li>
            <li><strong>Customer Interaction History:</strong> Unified view of communications and activity logs</li>
            <li><strong>Sales Pipeline & Analytics:</strong> Visualize deals, track conversions, and optimize performance</li>
          </ul>
          <p>
            Our CRM solutions empower teams to build stronger relationships, streamline processes, and accelerate business growth.
          </p>
        </>
      ),
    },
    {
      title: "Drop Shipping",
      img: Img18,
      description: (
        <>
          <p>
            Build and scale your online business effortlessly with our end-to-end drop shipping platform—designed for automation, growth, and zero inventory risk.
          </p>
          <ul>
            <li><strong>Multi-Vendor Marketplace:</strong> Onboard multiple sellers and expand product offerings</li>
            <li><strong>Automated Order Management:</strong> Streamlined order processing from purchase to delivery</li>
            <li><strong>Real-time Inventory Sync:</strong> Avoid stockouts and overselling with live product updates</li>
            <li><strong>Sales & Revenue Analytics:</strong> Track performance, trends, and optimize profits</li>
          </ul>
          <p>
            Our solution empowers entrepreneurs to launch scalable e-commerce ventures with minimal overhead and maximum operational efficiency.
          </p>
        </>
      ),
    },
   {
      title: "IT Consulting",
      img: Img19,
      description: (
        <>
          <p>
            Drive innovation and operational excellence with our expert IT consulting services—tailored to align technology with your business goals.
          </p>
          <ul>
            <li><strong>Technology Stack:</strong> Scalable, future-ready solutions built for performance</li>
            <li><strong>Security Audits :</strong> Identify vulnerabilities and strengthen cybersecurity posture</li>
            <li><strong>Digital Transformation Roadmaps:</strong> Strategic planning for sustainable innovation</li>
            <li><strong>Infrastructure Optimization:</strong> Streamline IT environments for cost efficiency </li>
          </ul>
          <p>
            From strategy to execution, we help you build a secure, scalable, and resilient IT ecosystem that fuels business success.
          </p>
        </>
      ),
    },
    {
      title: "Desktop Support",
      img: Img20,
      description: (
        <>
          <p>
            Keep your business operations running smoothly with our reliable and responsive desktop support services—designed to resolve issues quickly and enhance end-user productivity.
          </p>
          <ul>
            <li><strong>Software Installation:</strong> Fast resolution of application and system issues</li>
            <li><strong>Helpdesk Assistance:</strong> Real-time support to address user queries and technical challenges</li>
            <li><strong>System Maintenance:</strong> Regular health checks, patching, and performance optimization</li>
            <li><strong>Data Recovery:</strong> Protect critical information with secure backup and fast recovery solutions</li>
          </ul>
          <p>
            Our expert support team helps you reduce downtime, maintain system integrity, and ensure a productive work environment.
          </p>
        </>
      ),
    },
    {
      title: "Cloud Services",
      img: Img22,
      description: (
        <>
          <p>
            Harness the full potential of cloud computing to scale operations, enhance security, and drive innovation—faster and more efficiently.
          </p>
          <ul>
            <li><strong>Multi-Cloud Expertise:</strong> Deployment and management across AWS and Google Cloud</li>
            <li><strong>Cloud Migration:</strong> Seamless transitions with minimal disruption and controlled spending</li>
            <li><strong>Serverless Architecture:</strong> Accelerate development with scalable, event-driven systems</li>
            <li><strong>Data Storage & Backup Recovery:</strong> Secure, redundant solutions for business continuity</li>
          </ul>
          <p>
            Our cloud services help you achieve cloud-native agility, reduce infrastructure overhead, and ensure high availability with enterprise-grade reliability.
          </p>
        </>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLearnMore = (title) => {
    const path = title.toLowerCase().replace(/\s+/g, "");
    navigate(`/${path}`);
  };

  // Auto-slide every 4 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  return (
    <div className="homeService-page">
      <h2 className="homeService-heading">Key Services</h2>

      <div
        className="homeService-tabs"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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

      <div className="homeService-content">
        <div className="homeService-text">
          <h3>{services[activeTab].title}</h3>
          {services[activeTab].description}
          <p
            className="learn-more"
            onClick={() => handleLearnMore(services[activeTab].title)}
            style={{ cursor: "pointer", color: "#007BFF" }}
          >
            Learn More ➜
          </p>
        </div>
        <div className="homeService-image">
          <img src={services[activeTab].img} alt={services[activeTab].title} />
        </div>
      </div>
    </div>
  );
};

export default HomeService;
