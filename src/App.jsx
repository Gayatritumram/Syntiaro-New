import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Service from "./Components/service";
import Aboutus from "./Components/Aboutus";
import Footer from "./Layouts/Footer";
import NavPage from "./Layouts/NavPage";
import Innovation from "./Components/innovation";
import Career from "./Components/Career";
import EnquiryPopup from "./Components/EnquiryPopup";
import CourseEnquiry from "./Components/Courses/CourseEnquiry";
import UBS from "./Components/product/ubs";
import LMS from "./Components/product/lms";
import POS from "./Components/product/pos";
import ScrollToTop from "./ScrollToTop"; 
import "./App.css";
import "./Components/EnquiryPopup.css";
import WWA from "./Components/WWA"; 
import Agriculture from "./Components/pages/Agriculture";
import Education from "./Components/pages/Education";
import HealthCare from "./Components/pages/HealthCare";
import Banking from "./Components/pages/Banking";
import HRMS from "./Components/pages/HRMS";
import CRM from "./Components/pages/CRM";
import DropShipping from "./Components/pages/DropShipping";
import ITConsulting from "./Components/pages/ITConsulting";
import DesktopSupport from "./Components/pages/DesktopSupport";
import CloudServices from "./Components/pages/CloudServices";
import ServicePage from "./Components/ServicePage";
import TermsAndCondition from "./Components/TermsAndCondition";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Mission from "./Components/Mission";
import Vision from "./Components/Vision";
import ReturnPolicy from "./Components/ReturnPolicy";
import AIMLComp from "./Components/AIMLComp";
import StaffAugmentation from "./Components/StaffAugmentation";

function App() {
  return (
    <>
      <NavPage />
      <ScrollToTop /> 
      <div className="main-content-wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="/Innovation" element={<Innovation />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/enquiry" element={<EnquiryPopup />} />
          <Route exact path="/courseinquiry" element={<CourseEnquiry />} />
          <Route path="/ubs" element={<UBS />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/WWA" element={<WWA />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/education" element={<Education />} />
          <Route path="/healthcare" element={<HealthCare />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/hrms" element={<HRMS />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/dropshipping" element={<DropShipping />} />
          <Route path="/itconsulting" element={<ITConsulting />} />
          <Route path="/desktopsupport" element={<DesktopSupport />} />
          <Route path="/cloudservices" element={<CloudServices />} />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/terms&condition" element={<TermsAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/returnpolicy" element={<ReturnPolicy />} />
          <Route path="/AIMLComp" element={<AIMLComp />} />
          <Route path="/StaffAugmentation" element={<StaffAugmentation />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
