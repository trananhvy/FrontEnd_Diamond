import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
import DiamondComponent from "../../components/DiamondComponent/DiamondComponent";
function Home() {
  const [category, setCategory] = useState("All");
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <div>
        <Headers />
      </div>
      <div>
        <DiamondComponent category={category} setCategory={setCategory} />
      </div>
    </>
  );
}

export default Home;
