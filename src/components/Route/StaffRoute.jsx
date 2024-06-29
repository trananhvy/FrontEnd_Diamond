import Layout from "../Layout/Layout";

function HomeRoute() {
  return (
    <Routes>
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
      <Route path="vsPage" element={<ValuatingStaffPage />} />
      <Route path="vsProfile" element={<VStaffProfile />} />
      <Route path="csProfile" element={<CSStaffProfile />} />
      <Route path="csPage" element={<CStaffPage />} />
    </Routes>
  );
}
