import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import Prices from "./components/Prices/Prices";
import Blogs from "./components/Blogs/Blogs";
import Calculate from "./components/Calculate/Calculate";
import DiamondCheck from "./components/DiamondCheck/DiamondCheck";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login /> : <></>}
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="prices" element={<Prices />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="calculate" element={<Calculate />} />
            <Route path="diamondcheck" element={<DiamondCheck />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
