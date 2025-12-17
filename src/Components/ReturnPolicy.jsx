import React from "react";
import "./ReturnPolicy.css";
import Return from "../assets/Return.jpg";

const ReturnPolicy = () => {
  return (
    <div className="return-policy-wrapper">
      <div className="banner-container">
        <img src={Return} alt="Return Policy Banner" className="banner-image" />
      </div>
    <div className="policy-container">
      <div className="return-policy-content">
        <h1>RETURN POLICY – SYNTIARO</h1>

        <p>
          At SYNTIARO, we strive to provide the highest quality of service and customer satisfaction.
          This Return Policy outlines the conditions under which s may be issued for subscriptions or services purchased through our platform.
        </p>

        <h2>Subscription Services</h2>
        <p>
          SYNTIARO provides digital services on a subscription or prepaid basis. As such, our services are non-tangible and non-returnable, and thus not eligible for standard returns.
          However, we do offer refunds under specific, limited circumstances as described below.
        </p>

        <h2>Free Trial Period</h2>
        <p>
          If you are a new user, you may be eligible for a free trial period. During this trial, you may cancel your subscription at any time without incurring any charges.
          Once the trial period ends and payment is processed, standard refund conditions apply.
        </p>

  
        <h2>Cancellation Policy</h2>
        <p>
          You may cancel your subscription anytime via your account settings. Upon cancellation:
        </p>
        <ul>
          <li>You will not be charged for the next billing cycle.</li>
          <li>You will continue to have access to services until the end of your current cycle.</li>
          <li>No partial refunds for unused time in the active billing period.</li>
        </ul>

        <h2>Contact Information</h2>
        <p>For refund or cancellation-related support, contact:</p>
        <p><strong>SYNTIARO – Customer Support</strong></p>
        <p>📧 Email: <a href="mailto:support@syntiaro.com">support@syntiaro.com</a></p>
      </div>
    </div>
    </div>
  );
};

export default ReturnPolicy;
