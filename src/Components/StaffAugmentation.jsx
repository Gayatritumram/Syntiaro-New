import React from "react";
import "./StaffAugmentation.css";
import staffImage from "../assets/Staff.jpg";
import GetInTouch from "../Components/GetInTouch";

const StaffAugmentation = () => {
  return (
    <section className="staff-augmentation-section fade-in">
      <div className="staff-augmentation-container">

        <h1>Staff Augmentation</h1>

        <div className="staff-intro-row">
          <div className="staff-intro-text">
            <p>
              We offer dynamic staff augmentation services designed to help companies scale
              faster with access to pre-vetted, skilled professionals. Whether you’re looking
              for short-term support or building a long-term remote team, we provide flexible,
              on-demand talent tailored to your needs. <br /><br />
              With real-time onboarding support and scalable engagement models, our augmented
              staff seamlessly integrates into your workflows, enabling faster project delivery,
              lower hiring overheads, and better agility. Whether you're a startup looking to
              launch quickly or an enterprise optimizing resources for growth, our augmentation
              model is built to deliver results—faster, smarter, and cost-effectively.
            </p>
          </div>

          <div className="staff-image">
            <img src={staffImage} alt="Staff Augmentation" />
          </div>
        </div>

       <div className="staff-features">
  <h3>What Makes Us Different?</h3>
  <div className="feature-grid">
     <div className="feature-card">🔍 <strong>Quick Talent Access:</strong><br />Deploy experts within 48 hours</div>
    <div className="feature-card">🌐 <strong>Global Reach:</strong><br />Access a diverse talent pool worldwide</div>
    <div className="feature-card">🛠️ <strong>Custom Fit:</strong><br />Talent aligned with your goals and workflows</div>
    <div className="feature-card">💼 <strong>End-to-End Support:</strong><br />From onboarding to ongoing performance</div>
    <div className="feature-card">📈 <strong>Scalable Engagement:</strong><br />Expand or reduce team size anytime</div>
    <div className="feature-card">🕒 <strong>Time Zone Flexibility:</strong><br />Work with professionals in your preferred hours</div>
    <div className="feature-card">🔐 <strong>Secure Collaboration:</strong><br />NDA-backed professionals & data safety</div>
    <div className="feature-card">📣 <strong>Transparent Communication:</strong><br />Weekly updates and performance tracking</div>
  </div>
</div>


       <div className="staff-process">
  <h3>Our Approach</h3>
  <div className="process-grid">
      <div className="process-step">🧠 <strong>Consult:</strong><br />Understand your skill and project needs</div>
    <div className="process-step">🎯 <strong>Match:</strong><br />Source and present top-tier professionals</div>
    <div className="process-step">🚀 <strong>Onboard:</strong><br />Seamless integration into your team</div>
    <div className="process-step">🤝 <strong>Support:</strong><br />Ongoing collaboration and check-ins</div>
    <div className="process-step">📈 <strong>Scale:</strong><br />Expand your team as project needs evolve</div>
    <div className="process-step">🔄 <strong>Retain:</strong><br />Option to convert talent into full-time roles</div>
    <div className="process-step">📊 <strong>Monitor:</strong><br />Track performance and ensure alignment</div>
    <div className="process-step">💡 <strong>Optimize:</strong><br />Refine processes for continuous improvement</div>
  </div>
</div>

      </div>

      {/* Get in Touch Section */}
      <section>
        <GetInTouch />
      </section>
    </section>
  );
};

export default StaffAugmentation;
