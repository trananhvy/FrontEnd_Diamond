import React, { useContext, useState } from "react";
import { UserContext } from "../components/CalculateContext/CalculateContent";

const DemoPage = () => {
  const {
    selectedOrigin,
    selectedShape,
    selectedClarity,
    selectedColor,
    carat,
  } = useContext(UserContext);

  return (
    <div>
      <h2>Demo Page</h2>
      <p>Selected Origin: {selectedOrigin}</p>
      <p>Selected Shape: {selectedShape}</p>
      <p>Selected Clarity: {selectedClarity}</p>
      <p>Selected Color: {selectedColor}</p>
      <p>Selected carat: {carat}</p>
    </div>
  );
};

export default DemoPage;
