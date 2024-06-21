import React, { useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
function Education() {
  const [menu, setMenu] = useState("education");
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>
      <div style={{ marginTop: "200px" }}></div>
    </>
  );
}

export default Education;
