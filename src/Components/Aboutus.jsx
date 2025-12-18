import { motion } from "framer-motion";
import "./AboutUs.css";
import whoWeAreImg from "../assets/working.avif";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <a href="/contact" className="hero-cta">
</a>

          <h1>
            <span className="brand">SYNTIARO</span>
          </h1>
          <h2 className="hero-subtitle">
            Empowering <span>Innovation</span> Through <span>Technology</span>
          </h2>
          <p className="hero-text">
            At <strong>SYNTIARO</strong>, we transform ideas into digital realities.
          </p>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="who-section">
        <div className="who-container">

          <motion.div
            className="who-image"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={whoWeAreImg} alt="Who We Are" />
          </motion.div>

          <motion.div
            className="who-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Who We Are</h2>
          
            <p>
              <strong>SYNTIARO</strong> is a dynamic IT services company focused on
              building intelligent, scalable, and future-ready digital solutions.
              We help businesses innovate, grow, and transform through technology.
            </p>
            <p>
              Founded with a vision to empower enterprises, we deliver IT
              solutions that drive efficiency, competitiveness, and long-term
              success in the digital age.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission-vision">
        <div className="mv-header">
          <h2>Mission & Vision</h2>
          <span className="underline center"></span>
        </div>

        <div className="mv-grid">

          <motion.div
            className="mv-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Our Mission</h3>
            <p>
              Our mission is to revolutionize industries by delivering
              cutting-edge, integrated solutions that empower growth,
              innovation, and transformation.
            </p>
            <p>
              We strive to uplift <strong>Agriculture, Education, Healthcare</strong>,
              and emerging sectors through technology-driven excellence.
            </p>
          </motion.div>

          <motion.div
            className="mv-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Our Vision</h3>
            <p>
              Our vision is to lead the future of global innovation by creating
              a connected, intelligent ecosystem that transforms how industries
              operate, people engage, and businesses evolve.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
