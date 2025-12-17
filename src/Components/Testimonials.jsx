import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Adam Kiani",
    role: "PTA Academy",
    text: `SYNTIARO boosted our market reach by 50%. Their gym trainer learning platform exceeded expectations, was delivered on time, and communication was seamless.`,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    name: "John Byrnes",
    role: "CAPS",
    text: `SYNTIARO expanded our market reach. Their mobile solution in Android/iOS & PHP was excellent and delivered on time. It was a fantastic experience!`,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Mohammad Hammour",
    role: "Amnly",
    text: `SYNTIARO doubled our market reach. Their online insurance and invoicing solution was innovative, on time and within budget.`,
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 4,
    name: "Samantha Lee",
    role: "EduCore",
    text: `SYNTIARO transformed our LMS experience. Their dedication to intuitive design and timely delivery made all the difference. Highly recommended!`,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Carlos Mendes",
    role: "Finovate",
    text: `With SYNTIARO, our banking app launch was seamless. Their team provided 24/7 support and built exactly what we envisioned.`,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 6,
    name: "Aisha Khan",
    role: "MediSmart",
    text: `SYNTIARO delivered a HIPAA-compliant healthcare platform in record time. Their innovation and responsiveness are unmatched.`,
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Testimonials = () => {
  // Duplicate testimonials for infinite loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonials-wrapper">
      <h2 className="testimonials-title">Testimonials</h2>
      <h3 className="testimonials-subtitle">
        Over a Decade of Delivering Innovative AI and Software Solutions
      </h3>

      <div className="slider-container">
        <div className="slider-track">
          {allTestimonials.map((t, index) => (
            <div className="testimonials-card" key={index}>
              <p className="testimonials-text">“{t.text}”</p>
              <div className="testimonials-user">
                <img src={t.image} alt={t.name} className="testimonials-avatar" />
                <div className="testimonials-user-info">
                  <h4 className="testimonials-name">{t.name}</h4>
                  <p className="testimonials-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
