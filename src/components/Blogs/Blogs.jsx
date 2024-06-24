import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headers from "../../components/Headers/Headers";
import Navbar from "../../components/Navbar/Navbar";
import BlogsContent from "../../components/Blogs/BlogsContent";
function Blogs() {
  const [menu, setMenu] = useState("blogs");
  // prop driling
  return (
    <>
      <div>
        <div>
          <Navbar menu={menu} setMenu={setMenu} />
        </div>
        <div>
          <BlogsContent />
        </div>
      </div>
    </>
  );
}

export default Blogs;
