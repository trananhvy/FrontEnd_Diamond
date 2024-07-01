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
import ServiceContent from "./components/ServiceContent/ServiceContent";
import IntroNaturalDiamond from "./components/Education/IntroNaturalDiamond";
import IntroLabDiamond from "./components/Education/IntroLabDiamond";
import CusProfile from "./components/CusPage/CusProfile";
import { FormDataProvider } from "./components/AuthContext/FormDataContext";
import ListService from "./components/CusPage/ListService";
import ListServiceOfManager from "./components/Manage/ListServiceOfManager";
import ListOfStaff from "./components/Manage/ListOfStaff";
import VStaffProfile from "./components/Valuating Staff/VStaffProfile";
import CSStaffProfile from "./components/Consulting Staff/CStaffProfile";
import ListServiceCS from "./components/Consulting Staff/ListServiceCS";
import ListServiceVS from "./components/Valuating Staff/ListServiceVS";
import ManagePage from "./components/Manage/ManagaPage";
import NavbarOfManager from "./components/Manage/NavbarOfManager";
import ManagerProfile from "./components/Manage/ManageProfile";
import ValuatingStaffPage from "./components/Valuating Staff/VStaffPage";
import CStaffPage from "./components/Consulting Staff/CStaffPage";
import VStaffPage from "./components/Valuating Staff/VStaffPage";
import WhyCertificateDiamond from "./components/DiamondCheck/WhyCertificateDiamond";
function App() {
  return (
    <>
      <AuthProvider>
        <FormDataProvider>
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
                  element={<WhyCertificateDiamond />}
                />
                <Route path="overviewedu" element={<OverviewForEducation />} />
                <Route path="overviewser" element={<OverViewForService />} />
                <Route path="overviewval" element={<OverviewForValuation />} />
                <Route path="intronatural" element={<IntroNaturalDiamond />} />
                <Route path="introlab" element={<IntroLabDiamond />} />
                <Route path="services" element={<Services />} />
                <Route path="serviceslab" element={<ServiceContent />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="calculate" element={<Calculate />} />
                <Route path="diamondcheck" element={<DiamondCheck />} />
                <Route path="userprofile" element={<CusProfile />} />
                <Route path="listServiceOfVS" element={<VStaffProfile />} />
                <Route path="listServiceOfCS" element={<CSStaffProfile />} />
                <Route path="listservice" element={<ListService />} />
                <Route path="listserviceM" element={<ListServiceOfManager />} />
                <Route path="liststaff" element={<ListOfStaff />} />
                <Route path="managePage" element={<ManagePage />} />
                <Route path="managePageProfile" element={<ManagerProfile />} />
                <Route path="navbarM" element={<NavbarOfManager />} />
                <Route path="liststaffcs" element={<ListServiceCS />} />
                <Route path="liststaffvs" element={<ListServiceVS />} />
                <Route path="vsPage" element={<VStaffPage />} />
                <Route path="vsProfile" element={<VStaffProfile />} />
                <Route path="csProfile" element={<CSStaffProfile />} />
                <Route path="csPage" element={<CStaffPage />} />
              </Routes>
            </Router>
          </div>
        </FormDataProvider>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
