import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Define the constant list of diamonds with images
const DIAMOND_LIST = [
  {
    id: 1,
    name: "Round Cut",
    carat: 1.0,
    img: "src/assets/1.avif",
    detail:
      "A round cut diamond is one of the most popular and classic diamond shapes, known for its brilliant sparkle and timeless appeal. It is the most prevalent diamond shape and has been in high demand for centuries.\n\nThe round cut diamond, as the name suggests, is cut into a round shape with 58 facets, or flat polished surfaces, that are carefully positioned to maximize the stone's brilliance and fire. These facets are strategically placed to allow light to enter the diamond, reflect off the internal surfaces, and then refract back out, creating a dazzling display of brilliance.",
  },
  {
    id: 2,
    name: "Oval Cut",
    carat: 1.2,
    img: "src/assets/2.avif",
    detail:
      "The oval cut diamond is a popular and elegant diamond shape known for its elongated, elliptical shape. It is a modified brilliant cut that retains many of the desirable characteristics of the round cut, while offering a unique and elongated appearance.\n\nThe oval cut diamond is characterized by its symmetrical shape and rounded ends. It typically has 56 to 58 facets, similar to the round cut diamond, which are strategically arranged to maximize brilliance and sparkle. The elongated shape of the oval cut creates an illusion of greater size, making it a popular choice for those seeking a larger-looking diamond.",
  },
  {
    id: 3,
    name: "Pear Cut",
    carat: 1.5,
    img: "src/assets/3.avif",
    detail:
      "The pear cut diamond, also known as the teardrop cut, is a unique and elegant diamond shape that combines the qualities of both the round brilliant and marquise cuts. The pear cut gets its name from its distinctive shape, resembling a teardrop with a rounded end and a pointed end.\n\nThe pear cut diamond features 58 facets, carefully arranged to maximize the stone's brilliance and fire. The rounded end of the diamond is similar to the round cut, with a large and polished facet known as the 'table' that allows light to enter and reflect within the stone. The pointed end, resembling the marquise cut, adds a touch of elegance and uniqueness to the diamond.",
  },
  {
    id: 4,
    name: "Emerald Cut",
    carat: 1.1,
    img: "src/assets/4.webp",
    detail:
      "The emerald cut diamond is a timeless and elegant diamond shape known for its rectangular or square shape with cropped corners. Unlike other diamond cuts that prioritize brilliance, the emerald cut is designed to showcase the diamond's clarity and color, as well as its unique 'hall of mirrors' effect.\n\nThe emerald cut diamond features a step-cut faceting pattern, which consists of long, rectangular facets that run parallel to the diamond's edges. These facets create a beautiful interplay of light and dark planes within the diamond, resembling a hall of mirrors effect. This distinct faceting style gives the emerald cut its signature look and enhances the diamond's inherent clarity and color.",
  },
  {
    id: 5,
    name: "Cushion Cut",
    carat: 1.3,
    img: "src/assets/5.avif",
    detail:
      "The cushion cut diamond is a popular and romantic diamond shape known for its soft, square or rectangular shape with rounded corners. It combines the elegance of a classic shape with a touch of vintage charm, making it a sought-after choice for engagement rings and other fine jewelry.\n\nThe cushion cut diamond features large facets and a pillow-like appearance, hence its name. It is designed to maximize brilliance and fire, creating a beautiful display of light. With its rounded corners and curved edges, the cushion cut offers a softened and romantic aesthetic.",
  },
  {
    id: 6,
    name: "Marquise Cut",
    carat: 1.3,
    img: "src/assets/6.avif",
  },
  {
    id: 7,
    name: "Asscher Cut",
    carat: 1.3,
    img: "src/assets/8.avif",
  },
  {
    id: 8,
    name: "Heart Cut",
    carat: 1.3,
    img: "src/assets/6.avif",
  },
  {
    id: 9,
    name: "Princess Cut",
    carat: 1.3,
    img: "src/assets/6.avif",
  },
];

// Styles as JavaScript objects
const styles = {
  diamondComponent: {},
  diamondMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  diamondMenuH1: {
    color: "#49557e",
    fontSize: "36px",
    fontWeight: "700",
    marginLeft: "40px",
  },
  diamondMenuText: {
    maxWidth: "60%",
    color: "#808080",
    marginLeft: "40px",
  },
  diamondMenuContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0 40px",
    position: "relative",
  },
  diamondMenuList: {
    display: "flex",
    gap: "30px",
    textAlign: "center",
    margin: "20px 0",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none", // For Internet Explorer and Edge
  },
  diamondItem: {
    display: "inline-block",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "200px",
  },
  diamondImage: {
    width: "7.5vw",
    minWidth: "80px",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "0.2s",
  },
  hr: {
    margin: "10px 0px",
    height: "2px",
    backgroundColor: "#49557e",
    border: "none",
  },
  active: {
    border: "2px solid #49557e",
    padding: "2px",
  },
  scrollButton: {
    cursor: "pointer",
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#49557e",
  },
};

export function DiamondComponent() {
  const [category, setCategory] = useState(null);
  const menuRef = useRef(null);

  // If category is null, default to the first element's name
  const selectedCategory = category || DIAMOND_LIST[0].name;

  const handleScroll = (direction) => {
    const menu = menuRef.current;
    if (menu) {
      if (direction === "left") {
        menu.scrollLeft -= 200; // Adjust the scroll amount as needed
      } else if (direction === "right") {
        menu.scrollLeft += 200; // Adjust the scroll amount as needed
      }
    }
  };

  return (
    <div>
      <div style={styles.diamondMenu}>
        <h1 style={styles.diamondMenuH1}>Diamond List</h1>
        <p style={styles.diamondMenuText}>
          A diamond is a gemstone that is prized for its brilliance and beauty.
          It is a transparent crystal made of carbon atoms arranged in a
          specific lattice structure. The most common shape for a cut diamond is
          the round brilliant, which features a circular outline and a large
          number of facets that maximize its sparkle and light reflection.
        </p>
        <div style={styles.diamondMenuContainer}>
          <button
            style={styles.scrollButton}
            onClick={() => handleScroll("left")}
          >
            {"<"}
          </button>
          <div ref={menuRef} style={styles.diamondMenuList}>
            {DIAMOND_LIST.map((item) => (
              <div key={item.id} style={styles.diamondItem}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    ...styles.diamondImage,
                    ...(selectedCategory === item.name ? styles.active : {}),
                  }}
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.name ? DIAMOND_LIST[0].name : item.name
                    )
                  }
                />
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
          <button
            style={styles.scrollButton}
            onClick={() => handleScroll("right")}
          >
            {">"}
          </button>
        </div>
        <hr style={styles.hr} />
      </div>
      <div>
        {selectedCategory && (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {DIAMOND_LIST.filter((item) => item.name === selectedCategory).map(
              (item) => (
                <div
                  key={item.id}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "200px", borderRadius: "100px" }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "500", fontSize: "16px" }}>
                      Name: {item.name}
                    </p>
                    <p style={{ fontWeight: "500", fontSize: "16px" }}>
                      Carat: {item.carat}
                    </p>
                    <p style={{ fontWeight: "500", fontSize: "16px" }}>
                      Detail: {item.detail}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DiamondComponent;
