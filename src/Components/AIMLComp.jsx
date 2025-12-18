import React, { useEffect } from "react";
import "./AIMLComp.css";
import aiGraphic from "../assets/AIML2.jpg";

const AIMLCommentary = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-left, .reveal-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aiml-container">
      {/* Header */}
      <div className="aiml-header">
        <h1>AI & ML: Skills That Shape Your Future</h1>
        <p className="aiml-subtitle">
          From smart recommendations to real-world impact — AI is already everywhere.
        </p>
      </div>

      <div className="aiml-content">
        {/* INFO CARD */}
        <div className="aiml-main-card reveal-left">
          <h3>🤖 What AI & ML Really Mean</h3>

          <p>
            Ever wondered how Netflix predicts what you’ll watch next or how your
            phone completes your sentences? <strong>That’s Machine Learning in action.</strong>
          </p>

          <p>
            Artificial Intelligence (AI) and Machine Learning (ML) are no longer
            buzzwords — they are transforming industries worldwide, from
            healthcare and agriculture to finance and e-commerce.
          </p>

          <p>
            AI doesn’t replace humans; it empowers them. By automating routine
            tasks and uncovering insights from data, AI enables people to focus on
            creativity, strategy, and innovation.
          </p>

          <p>
            The future belongs to <strong>human–AI collaboration</strong> —
            where intelligence meets intuition.
          </p>
        </div>

        {/* IMAGE */}
        <div className="aiml-image reveal-right">
          <img src={aiGraphic} alt="AI and ML Illustration" />
        </div>
      </div>
    </section>
  );
};

export default AIMLCommentary;
