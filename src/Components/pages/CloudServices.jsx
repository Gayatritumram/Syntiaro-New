import React from "react";
import Img1 from "../../assets/Agriculture/20.png";
import "./CloudServices.css";
import GetInTouch from "../GetInTouch";

const CloudServices = () => {
  return (
    <div className="cloud-service-container">
      <h2 className="cloud-service-title">Cloud Services</h2>
      <div className="cloud-service-content">
        <div className="cloud-service-text">
          <p>
            Unlock the power of the cloud with our end-to-end cloud services. Whether you're looking to migrate, optimize, or manage your infrastructure on the cloud, we provide tailored solutions for every business size.
          </p>
          <ul>
            <li><strong>Cloud Migration:</strong> Seamless transition of your data, apps, and workloads to the cloud</li>
            <li><strong>Infrastructure as a Service (IaaS):</strong> Scalable and secure cloud infrastructure solutions</li>
            <li><strong>Platform as a Service (PaaS):</strong> Rapid development and deployment capabilities</li>
            <li><strong>Cloud Storage & Backup:</strong> Reliable data backup and recovery on cloud platforms</li>
            <li><strong>DevOps & Automation:</strong> Streamline workflows using cloud-native DevOps tools</li>
            <li><strong>Multi-Cloud & Hybrid Strategy:</strong> Flexible integration with AWS, Azure, Google Cloud & more</li>
          </ul>
          <p>
            Stay competitive with scalable, cost-effective, and agile cloud environments designed to grow with your business.
          </p>
        </div>
        <div className="cloud-service-images">
          <img src={Img1} alt="Cloud Services" />
        </div>
      </div>

    <div className="get">
        {/* Get in Touch Section */}
      <section>
        <GetInTouch />
      </section>
       </div>
    </div>
  );
};

export default CloudServices;
