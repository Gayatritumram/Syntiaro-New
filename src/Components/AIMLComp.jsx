import React from "react";
import "./AIMLComp.css";
import aiGraphic from "../assets/AIML2.jpg"; 

const AIMLCommentary = () => {
  return (
    <section className="aiml-container">
      <div className="aiml-header">
        <h1>🤖 Let's Talk About AI/ML</h1>
        <p className="aiml-subtitle">
          A comment on where Artificial Intelligence and Machine Learning are taking us...
        </p>
      </div>

        <div className="aiml-content">
        <div className="aiml-text">
            <p>
            Ever wonder how Netflix recommends your next binge-worthy show or how your smartphone predicts your sentences? That’s not magic — it’s Machine Learning in action.
            </p>
            <p>
            Artificial Intelligence (AI) and Machine Learning (ML) are no longer just tech buzzwords. They’re actively reshaping industries — from revolutionizing healthcare and agriculture to transforming finance, customer service, and e-commerce.
            </p>
            <p>
            Here's the real advantage: AI isn’t here to replace humans — it's here to empower us. By processing massive amounts of data, identifying hidden patterns, and automating routine tasks, AI allows us to focus on what truly matters: creativity, empathy, and innovation.
            It helps doctors detect diseases earlier and enables farmers to increase crop yield 
            The future of work lies in human-AI collaboration — where intelligence meets intuition.
            </p>
        </div>

        <div className="aiml-image">
          <img src={aiGraphic} alt="AI and ML Illustration" />
        </div>
      </div>
    </section>
  );
};

export default AIMLCommentary;
