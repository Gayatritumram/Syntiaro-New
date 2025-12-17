import React from "react";
import "./CourseCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import NavPage from "./NavPage";
import Footer from "./Footer";

const CourseCard = ({ title, subtitle, headerImg, cards = [] }) => {
  return (
    <div>
      <div className="main-container">
        {/* Header Section */}
        <div className="header">
          <img src={headerImg} alt="Header" className="header-img" />
          <div className="header-overlay">
            <h1>{title}</h1>
            <p>
              <span className="text-orange">Home</span> – {subtitle}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-container">
          <div className="card-grid">
            {cards.length > 0 ? (
              cards.map((item, index) => (
                <Card key={index} className="course-card">
                  <Card.Img variant="top" src={item.imgPath} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary" as={Link} to={item.enquiryLink}>
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No courses available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
