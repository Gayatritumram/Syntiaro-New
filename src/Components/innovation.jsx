import React, { useState, useEffect } from "react";
import axios from "axios";
import "./innovation.css";
import GetInTouch from "../Components/GetInTouch";
import {
  FiUpload,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

/* ✅ HERO IMAGE IMPORT */
import heroBg from "../assets/gradient-blue-banner.jpg";

const InnovationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    animateCounters();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll(".stat-number");
    const speed = 200;

    counters.forEach((counter) => {
      let count = 0;
      const target = +counter.getAttribute("data-count");
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
    if (pdfFile) formData.append("pdfFile", pdfFile);

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
      }, 8000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("There was an error submitting your idea.");
    }
  };

  return (
    <div className="innovation-portal">
      {/* ================= HERO ================= */}
      <section
        className="innovation-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Transform Your{" "}
            <span className="gradient-text">Innovative Ideas</span> Into Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Join Syntiaro’s innovation ecosystem where ideas meet opportunity,
            expertise, and growth.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="cta-button"
            onClick={() =>
              document
                .getElementById("innovation-form")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Submit Your Idea
          </motion.button>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="value-proposition-section">
        <div className="section-header">
          <h2>Why Share Your Ideas With Syntiaro?</h2>
          <p>A complete ecosystem to support innovation from idea to impact</p>
        </div>

        <div className="value-cards">
          <div className="value-card">
            <div className="card-icon">
              <FiDollarSign size={28} />
            </div>
            <h3>Funding Access</h3>
            <p>Connect with investors and funding partners</p>
          </div>

          <div className="value-card">
            <div className="card-icon">
              <FaHandshake size={28} />
            </div>
            <h3>Partnerships</h3>
            <p>Opportunities for co-development and collaboration</p>
          </div>

          <div className="value-card">
            <div className="card-icon">
              <FiUsers size={28} />
            </div>
            <h3>Expert Network</h3>
            <p>Guidance from mentors and industry experts</p>
          </div>

          <div className="value-card">
            <div className="card-icon">
              <FiAward size={28} />
            </div>
            <h3>Recognition</h3>
            <p>Visibility and rewards for impactful ideas</p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="innovation-stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number" data-count="247">0</div>
            <span>Ideas Submitted</span>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="89">0</div>
            <span>Ideas Implemented</span>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="42">0</div>
            <span>Innovators Recognized</span>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="15">0</div>
            <span>Startups Launched</span>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="innovation-form" className="innovation-form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Submit Your Innovation</h2>
            <p>Tell us about your idea and we’ll take it forward</p>
          </div>

          {!submitSuccess ? (
            <form className="innovation-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input name="name" required placeholder="Full Name" />
                <input name="email" type="email" required placeholder="Email" />
                <input name="mobile" required placeholder="Mobile Number" />
                <input name="education" required placeholder="Education" />
                <input name="ideaTitle" required placeholder="Idea Title" />

                <textarea
                  name="ideaDescription"
                  required
                  placeholder="Describe your idea"
                  rows="5"
                />

                <label className="file-upload-label">
                  <input type="file" accept=".pdf" onChange={handleFileChange} />
                  <div>
                    {pdfFile ? pdfFile.name : "Upload PDF (optional)"}
                  </div>
                </label>
              </div>

              <button className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Innovation"}
              </button>
            </form>
          ) : (
            <div className="success-message">
              <FiCheckCircle size={48} />
              <h3>Innovation Submitted Successfully</h3>
              <p>Our team will review your idea shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* ================= GET IN TOUCH ================= */}
      <GetInTouch />
    </div>
  );
};

export default InnovationForm;
