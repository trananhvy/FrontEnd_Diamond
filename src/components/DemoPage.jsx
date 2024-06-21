import React, { useContext, useState } from "react";
import { UserContext } from "./CalculateContext/CalculateContent1";

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
      <h2>Fair Price Estimate</h2>
      <p>$4980</p>
      <p>Selected Origin: {selectedOrigin}</p>
      <p>Selected Shape: {selectedShape}</p>
      <p>Selected Clarity: {selectedClarity}</p>
      <p>Selected Color: {selectedColor}</p>
      <p>Selected carat: {carat}</p>
    </div>
  );
};

export default DemoPage;
