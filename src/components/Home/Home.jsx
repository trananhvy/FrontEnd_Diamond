import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
import DiamondComponent from "../../components/DiamondComponent/DiamondComponent";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [category, setCategory] = useState("All");
  const [menu, setMenu] = useState("home");
  const body = {
    backgroundColor: "#FAF6F0",
  };
  return (
    <>
      <div style={body}>
        <Navbar menu={menu} setMenu={setMenu} />
        <div>
          <Headers />
        </div>

        <DiamondComponent category={category} setCategory={setCategory} />
      </div>
    </>
  );
}

export default Home;
