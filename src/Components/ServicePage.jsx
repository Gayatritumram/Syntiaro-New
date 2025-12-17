import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicePage.css";
import Agriculture from "../assets/Agriculture/1.png"
import Education from "../assets/Agriculture/2.png";
import HealthCare from "../assets/Agriculture/3.png";
import Banking from "../assets/Agriculture/5.png";
import HRMS from "../assets/Agriculture/10.png";
import CRM from "../assets/Agriculture/14.png";
import Dropshipping from "../assets/Agriculture/15.png";
import ITConsulting from "../assets/Agriculture/18.png";
import DesktopSupport from "../assets/Agriculture/19.png";
import CloudServices from "../assets/Agriculture/20.png";
import GetInTouch from "../Components/GetInTouch";


const tabsData = [
  {
    id: "evaluation",
    title: "Agriculture",
    route: "agriculture",
    heading:
      "Agriculture is the backbone of our civilization, combining tradition with innovation to feed the world.",
    points: [
      "Crop Production: advanced techniques for wheat, rice, pulses, fruits, and vegetables",
      "Animal Husbandry: integrated systems for dairy, poultry, and fisheries",
      "Organic & Sustainable Farming: eco-friendly practices to preserve soil and resources",
      "Precision Agriculture: real-time monitoring with IoT, AI-based yield prediction, and smart irrigation",
      "Agricultural Marketplaces: platforms connecting farmers to buyers directly",
      "Drone & Satellite Monitoring: field health, pest control, and yield analysis",
    ],
    image: Agriculture,
    footer:
      "We empower the agri-sector with smart technologies, data-driven insights, and direct-to-market platforms to maximize productivity and sustainability.",
  },
  {
    id: "training",
    title: "Education",
    route: "education",
    heading:
      "Revolutionize learning with digital tools that make education inclusive, engaging, and effective.",
    points: [
      "Learning Management Systems (LMS) with real-time tracking and reporting",
      "Virtual Classrooms: live classes, breakout rooms, and interactive whiteboards",
      "Automated Exams & Certifications: AI-proctored tests and instant grading",
      "Gamified Learning: badges, leaderboards, and adaptive content",
      "Mobile Learning Apps: on-the-go access with offline support",
      "Parental Dashboards & Analytics: insights into student performance and progress",
    ],
    image: Education,
    footer:
      "We build future-ready EdTech platforms that enable teachers to teach better and learners to thrive anywhere, anytime.",
  },
  {
    id: "multimodality",
    title: "Health Care",
    route: "healthcare",
    heading:
      "Modern healthcare demands secure, scalable, and intelligent digital platforms.",
    points: [
      "Telemedicine & Remote Consultations: high-definition video and integrated diagnostics",
      "Electronic Health Records (EHR): centralized patient data with role-based access",
      "Hospital Information Systems (HIS): streamline operations, billing, pharmacy, and labs",
      "AI for Diagnostics: early disease detection and treatment recommendations",
      "Appointment Scheduling & Insurance Claim Portals",
      "HIPAA & GDPR Compliance: secure handling of patient data",
    ],
    image: HealthCare,
    footer:
      "From clinics to enterprise hospitals, we digitize care delivery with scalable, secure, and intelligent systems for better outcomes.",
  },
  {
    id: "factuality",
    title: "Banking",
    route: "banking",
    heading:
      "Drive innovation in financial services with secure, seamless, and customer-first digital banking.",
    points: [
      "Mobile & Internet Banking: intuitive interfaces with multi-factor authentication",
      "UPI, Wallets, and Digital Payments Integration",
      "Fraud Detection: AI-powered risk scoring and anomaly tracking",
      "Loan Origination & Credit Scoring Systems",
      "Chatbots & Virtual Assistants for Banking Support",
      "RegTech & Compliance Automation",
    ],
    image: Banking,
    footer:
      "We enable banks and fintechs to launch fast, stay secure, and serve digitally-savvy customers with confidence.",
  },
  {
    id: "generative-ai",
    title: "HRMS",
    route: "hrms",
    heading:
      "Manage people smarter with our AI-powered, cloud-based HR solutions.",
    points: [
      "Employee Onboarding: digital forms, verifications, and orientation workflows",
      "Time & Attendance: biometric and GPS-based tracking",
      "Payroll Automation: compliance-ready with tax calculations and payslips",
      "Employee Self-Service Portals: leave, benefits, and claim management",
      "Performance Reviews: 360-degree feedback and KPI analytics",
      "Remote Work Enablement: productivity tracking and virtual HR desks",
    ],
    image: HRMS,
    footer:
      "Our HRMS reduces admin burden, boosts engagement, and empowers data-driven people decisions.",
  },
  {
    id: "engineering",
    title: "CRM",
    route: "crm",
    heading:
      "Turn leads into loyal customers with our feature-rich CRM platforms.",
    points: [
      "Sales Automation: lead tracking, scoring, and conversion funnels",
      "Omnichannel Communication: email, SMS, WhatsApp, and social messaging",
      "Campaign Management: design, launch, and measure marketing campaigns",
      "Customer Lifecycle Analytics: identify churn risks and upsell opportunities",
      "Customer Service Portals: ticketing and live chat integrations",
      "Third-Party Integrations: connect with ERP, payment gateways, and more",
    ],
    image: CRM,
    footer:
      "Build meaningful relationships and grow faster with data-backed, action-oriented CRM systems.",
  },
  {
    id: "alignment-safety",
    title: "Drop Shipping",
    route: "dropshipping",
    heading:
      "Start your online business with zero inventory and complete automation.",
    points: [
      "Multi-Vendor Marketplace: manage unlimited vendors and product listings",
      "Automated Order Fulfillment: real-time stock sync and logistics tracking",
      "Payment Gateway Integrations: global and local payment options",
      "Customer Review System & Rating Management",
      "Custom Storefronts: SEO-optimized and mobile-responsive themes",
      "Analytics Dashboard: monitor sales, returns, and profit margins",
    ],
    image: Dropshipping,
    footer:
      "We simplify your eCommerce journey with powerful drop shipping tools that grow with your business.",
  },
  {
    id: "data-unification",
    title: "IT Consulting",
    route: "itconsulting",
    heading:
      "Drive growth with expert-led digital transformation and IT strategy.",
    points: [
      "Technology Assessment & Gap Analysis",
      "IT Infrastructure Design: on-premise, hybrid, or cloud-native",
      "Security Consulting: penetration testing, SOC setup, and compliance audits",
      "DevOps Implementation: CI/CD pipelines and agile coaching",
      "Enterprise Architecture & Data Governance",
      "Custom Software Advisory & Vendor Evaluation",
    ],
    image: ITConsulting,
    footer:
      "From startups to enterprises, we architect IT strategies that unlock scale, speed, and security.",
  },
  {
    id: "custom-apps",
    title: "Desktop Support",
    route: "desktopsupport",
    heading:
      "Reliable, responsive desktop support that keeps your workforce productive.",
    points: [
      "Software Installations, Updates & Licensing",
      "Remote & Onsite Troubleshooting",
      "System Security Monitoring: antivirus, firewall, and patch management",
      "Email & Network Configuration",
      "Data Recovery & Backup Solutions",
      "Hardware Diagnostics & Repair Coordination",
    ],
    image: DesktopSupport,
    footer:
      "We provide proactive IT support that prevents issues and keeps your systems running smoothly 24/7.",
  },
  {
    id: "mobile-dev",
    title: "Cloud Services",
    route: "cloudservices",
    heading:
      "Future-proof your business with powerful, secure, and cost-efficient cloud solutions.",
    points: [
      "Cloud Infrastructure Setup: AWS, Azure, GCP",
      "Cloud Migration Services: legacy to cloud, zero data loss",
      "Kubernetes & Docker: containerized application deployment",
      "Serverless Architecture: scale on demand with lower overhead",
      "Data Backup, Archiving & Disaster Recovery Planning",
      "Cloud Cost Optimization & Billing Automation",
    ],
    image: CloudServices,
    footer:
      "Harness the full potential of cloud with optimized architectures, minimal downtime, and predictable costs.",
  },
];


const ServicePage = () => {
  const [activeTab, setActiveTab] = useState("evaluation");
  const navigate = useNavigate();

  const currentTab = tabsData.find((tab) => tab.id === activeTab);

  const handleReadMore = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div>
    <div className="llm-container">
      <div className="sidebar">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="content">
        <div className="llm-box">
          <h2>{currentTab.heading}</h2>
          <ul>
            {currentTab.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
           <img
               src={currentTab.image}
               alt={currentTab.title}
               className="service-image"
             />
          <h3>{currentTab.footer}</h3>
          <button className="btn" onClick={() => handleReadMore(currentTab.route)}>
            Read More →
          </button>
        </div>
      </div>
    </div>
 {/* Get in Touch Section */}
      <section>
        <GetInTouch />
      </section>
</div>
    
  );
};

export default ServicePage;
