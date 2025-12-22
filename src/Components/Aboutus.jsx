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

        {/* MISSION & VISION SECTION */}
      <section className="mission-vision-section">

        <h2 className="section-title">Our Mission & Vision</h2>

        <div className="mv-container">

          <div className="mv-card">
            <h3>Mission</h3>
            <p>
              To empower businesses and innovators by delivering scalable,
              transformative, and future-ready technology solutions that drive
              measurable impact.
            </p>
          </div>

          <div className="mv-card">
            <h3>Vision</h3>
            <p>
              To become a global leader in digital innovation, fostering a world
              where ideas evolve into breakthrough solutions that shape industries
              and uplift communities.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutUs;
