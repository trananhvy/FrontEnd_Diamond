import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./CalculateContext/CalculateContent1";
import xml2js from "xml2js";

const DemoPage = () => {
  const {
    selectedOrigin,
    selectedShape,
    selectedClarity,
    selectedColor,
    carat,
  } = useContext(UserContext);

  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/http://www.idexonline.com/DPService.asp?SID=4wp7go123jqtkdyd5f2e&cut=${selectedShape}&carat=${carat}&color=${selectedColor}&clarity=${selectedClarity}&make=Excellent&cert=GIA`
        );

        const parser = new xml2js.Parser();

        parser
          .parseStringPromise(response.data)
          .then((result) => {
            const price = result.pr.price[0]; // Extract the price from the parsed XML
            setPrice(price);
          })
          .catch((err) => {
            console.error("Error parsing XML:", err);
            setPrice("Error parsing price");
          });
      } catch (error) {
        console.error("Error fetching price:", error);
        setPrice("Error fetching price");
      }
    };

    fetchPrice();
  }, [selectedShape, carat, selectedColor, selectedClarity]);

  return (
    <div>
      <h2>Fair Price Estimate</h2>
      <p>{price !== null ? `$${price}` : "Loading price..."}</p>
      <p>Selected Origin: {selectedOrigin}</p>
      <p>Selected Shape: {selectedShape}</p>
      <p>Selected Clarity: {selectedClarity}</p>
      <p>Selected Color: {selectedColor}</p>
      <p>Selected Carat: {carat}</p>
    </div>
  );
};

export default DemoPage;
