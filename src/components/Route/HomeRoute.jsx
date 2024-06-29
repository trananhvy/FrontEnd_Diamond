import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Education from "../View/Education/Education";
import CalculateContent from "../View/Calculate/CalculateContent";
import OverviewForGIACertificateCheck from "../View/Overview/OverviewForGIACertificateCheck";
import OverviewForEducation from "../View/Overview/OverviewForEducation";
import OverViewForService from "../View/Overview/OverViewForService";
import IntroNaturalDiamond from "../View/IntroNaturalDiamond/IntroNaturalDiamond";
import IntroLabDiamond from "../View/IntroLabDiamond/IntroLabDiamond";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import Calculate from "../View/Calculate/Calculate";
import DiamondCheck from "../DiamondCheck/DiamondCheck";
function HomeRoute() {
  return (
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
      <Route path="intronatural" element={<IntroNaturalDiamond />} />
      <Route path="introlab" element={<IntroLabDiamond />} />
      <Route path="services" element={<Services />} />
      <Route path="serviceslab" element={<ServiceContent />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="calculate" element={<Calculate />} />
      <Route path="diamondcheck" element={<DiamondCheck />} />
    </Routes>
  );
}
