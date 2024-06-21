import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Education from "./components/Education/Education";
import Blogs from "./components/Blogs/Blogs";
import Calculate from "./components/Calculate/Calculate";
import DiamondCheck from "./components/DiamondCheck/DiamondCheck";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services/Services";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import Footer from "./components/Footer/Footer";
import CalculateContent from "./components/CalculateContext/CalculateContent1";
import OverviewForEducation from "./components/Overview/OverviewForEducation";
import OverViewForService from "./components/Overview/OverviewForService";
import OverviewForValuation from "./components/Overview/OverviewForValuation";
import OverviewForGIACertificateCheck from "./components/Overview/OverviewForCheck";
import ServiceForLabDiamond from "./components/ServiceContent/ServiceForLabDiamond";
function App() {
  return (
    <>
      <AuthProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="education" element={<Education />} />
              <Route path="calculate" element={<CalculateContent />} />
              <Route
                path="overviewcheck"
                element={<OverviewForGIACertificateCheck />}
              />
              <Route path="overviewedu" element={<OverviewForEducation />} />
              <Route path="overviewser" element={<OverViewForService />} />
              <Route path="overviewval" element={<OverviewForValuation />} />
              <Route path="services" element={<Services />} />
              <Route path="serviceslab" element={<ServiceForLabDiamond />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="calculate" element={<Calculate />} />
              <Route path="diamondcheck" element={<DiamondCheck />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
