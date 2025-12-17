import React, { useState, useEffect } from "react";
import axios from "axios";
import "./innovation.css";
import GetInTouch from "../Components/GetInTouch";
import { FiUpload, FiCheckCircle, FiAward, FiUsers, FiZap, FiDollarSign} from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const InnovationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [activeTab, setActiveTab] = useState("form");

  useEffect(() => {
    animateCounters();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
      let count = 0;
      const target = +counter.getAttribute('data-count');
      const increment = target / speed;

      const updateCounter = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a PDF file only");
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.target);

  if (pdfFile) {
    formData.append("pdfFile", pdfFile); 
  }

  try {
    await axios.post("http://localhost:8080/api/innovation", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
      e.target.reset();
      setPdfFile(null);
    }, 10000);
  } catch (error) {
    console.error("Error submitting idea:", error);
    setIsSubmitting(false);
    alert("There was an error submitting your idea.");
  }
};
  return (
    <div className="innovation-portal">
      {/* Hero Section */}
      <section className="innovation-hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            <span>Transform Your </span>
            <span className="gradient-text">Innovative Ideas</span>
            <span> Into Reality</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Join our innovation ecosystem where ideas meet opportunity, expertise, and funding
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-cta"
          >
            <button 
              onClick={() => document.getElementById("innovation-form").scrollIntoView({ behavior: 'smooth' })}
              className="cta-button"
            >
              Submit Your Idea Now
            </button>
          </motion.div>
        </div>
        <div className="hero-graphic">
          <div className="graphic-element idea-bulb"></div>
          <div className="graphic-element network-lines"></div>
        </div>
      </section>

      {/* Value Proposition Section  */}
      <section className="value-proposition-section">
        <div className="section-header">
          <h2>Why Share Your Ideas With Us?</h2>
          <p>We provide more than just a platform - we offer a complete innovation ecosystem</p>
        </div>
        
        <div className="value-cards">
          <motion.div 
            whileHover={{ y: -10 }}
            className="value-card"
          >
            <div className="card-icon">
              <FiDollarSign size={32} />
            </div>
            <h3>Funding Access</h3>
            <p>Get connected with our network of investors and funding partners for promising ideas</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="value-card"
          >
            <div className="card-icon">
              <FaHandshake size={32} />
            </div>
            <h3>Partnership Potential</h3>
            <p>Successful ideas may qualify for co-development partnerships with equity stakes</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="value-card"
          >
            <div className="card-icon">
              <FiUsers size={32} />
            </div>
            <h3>Expert Network</h3>
            <p>Access to mentors, industry experts, and technical resources to refine your idea</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="value-card"
          >
            <div className="card-icon">
              <FiAward size={32} />
            </div>
            <h3>Recognition</h3>
            <p>Top innovators receive public recognition and awards for their contributions</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="innovation-stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number" data-count="247">0</div>
            <div className="stat-label">Ideas Submitted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="89">0</div>
            <div className="stat-label">Ideas Implemented</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="42">0</div>
            <div className="stat-label">Innovators Recognized</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="15">0</div>
            <div className="stat-label">Startups Launched</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2>Our Innovation Process</h2>
          <p>From idea submission to implementation - here's how it works</p>
        </div>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Submit Your Idea</h3>
            <p>Fill out our simple form with details about your innovation</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Initial Review</h3>
            <p>Our team evaluates your submission within 7 business days</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Deep Dive</h3>
            <p>For promising ideas, we schedule a detailed discussion</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Implementation</h3>
            <p>Selected ideas move to development with our support</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="section-header">
          <h2>Innovation Success Stories</h2>
          <p>See how other innovators have transformed their ideas with our support</p>
        </div>
        
        <div className="story-cards">
          <div className="story-card">
            <div className="story-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" }}></div>
            <div className="story-content">
              <h3>Eco-Friendly Packaging</h3>
              <p>Sarah's biodegradable packaging solution is now used by 3 major retailers</p>
              <div className="story-meta">
                <span>Implemented: 2022</span>
                <span>Reduced plastic waste by 40%</span>
              </div>
            </div>
          </div>
          
          <div className="story-card">
            <div className="story-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" }}></div>
            <div className="story-content">
              <h3>AI-Powered Recruitment</h3>
              <p>James developed an AI tool that reduces hiring bias and improves candidate matching</p>
              <div className="story-meta">
                <span>Implemented: 2021</span>
                <span>Used by 50+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="innovation-form" className="innovation-form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Ready to Share Your Innovation?</h2>
            <p>Fill out the form below and our innovation team will review your submission</p>
          </div>
          
          {activeTab === "form" && (
            <form className="innovation-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group floating">
                  <input type="text" name="name" id="name" required placeholder="Name" />
                  
                  
                </div>

                <div className="form-group floating">
                  <input type="email" name="email" id="email" required placeholder="Email" />

                </div>

                <div className="form-group floating">
                  <input type="tel" name="mobile" id="mobile" required placeholder="Mobile Number" />

                </div>

                <div className="form-group floating">
                  <input type="text" name="address" id="address" required placeholder="Address" />

                </div>

                <div className="form-group floating">
                  <input type="text" name="education" id="education" required placeholder="Education" />

                </div>

                <div className="form-group floating">
                  <input type="text" name="ideaTitle" id="ideaTitle" required placeholder="Idea Title" />

                </div>

                <div className="form-group floating form-full">
                  <textarea name="ideaDescription" id="ideaDescription" rows="5" required placeholder="Description"></textarea>

                </div>

                <div className="form-group form-full">
                  <label className="file-upload-label">
                    <input type="file" accept=".pdf" onChange={handleFileChange} />
                    <div className="file-upload-content">
                      <div className="upload-icon">
                        <FiUpload size={24} />
                      </div>
                      <div className="upload-text">
                        {pdfFile ? (
                          <>
                            <div className="file-name">{pdfFile.name}</div>
                            <div className="file-hint">Click to change file</div>
                          </>
                        ) : (
                          <>
                            <div className="file-name">Upload PDF Document</div>
                            <div className="file-hint">Detailed documentation (PDF only, max 5MB)</div>
                          </>
                        )}
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-footer">
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FiCheckCircle size={18} />
                      Submit Innovation
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
          
          
          
          {submitSuccess && (
            <div className="success-message">
              <div className="success-checkmark">
                <div className="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                </div>
              </div>
              <h3>Innovation Submitted Successfully!</h3>
              <p>We've received your idea and will review it shortly. You'll receive a confirmation email with your submission ID.</p>
              <div className="success-id">
                Submission ID: <span>INN-{Math.floor(Math.random() * 1000000)}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      

      {/* Get in Touch Section */}
      <section className="get-in-touch-section">
        <GetInTouch />
      </section>
    </div>
  );
};

export default InnovationForm;