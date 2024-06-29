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
import CusProfile from "../View/CusProfile/CusProfile";
function HomeRoute() {
  return (
    <Routes>
      <Route path="userprofile" element={<CusProfile />} />
    </Routes>
  );
}
