import React, { useState, useRef } from "react";
import styled from "styled-components";

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
    detail:
      "The marquise cut diamond is a distinctive and elegant diamond shape, characterized by its elongated, boat-like silhouette with pointed ends. This sophisticated shape combines the brilliance of a classic cut with a unique and timeless charm, making it a favored choice for engagement rings and fine jewelry.",
  },
  {
    id: 7,
    name: "Asscher Cut",
    carat: 1.3,
    img: "src/assets/8.avif",
    detail:
      "The Asscher cut diamond features a step-cut faceting pattern with large, open facets that create a mesmerizing hall-of-mirrors effect. This design emphasizes clarity and luster, resulting in a captivating display of light and brilliance. The cut's high crown and deep pavilion add depth and dimension, enhancing its visual appeal.",
  },
  {
    id: 8,
    name: "Heart Cut",
    carat: 1.3,
    img: "src/assets/6.avif",
    detail:
      "The heart cut diamond features a complex faceting pattern designed to maximize brilliance and fire, creating a stunning display of light. The shape is defined by its rounded lobes, a cleft at the top, and a pointed bottom, all of which must be meticulously crafted to achieve perfect symmetry and balance.",
  },
  {
    id: 9,
    name: "Princess Cut",
    carat: 1.3,
    img: "src/assets/6.avif",
    detail:
      "The princess cut diamond is a modern and elegant diamond shape, recognized for its square or rectangular form with sharp, uncut corners. This cut combines the brilliance of a round cut with a sleek, contemporary aesthetic, making it one of the most popular choices for engagement rings and fine jewelry.",
  },
];

// Styled components
const DiamondMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DiamondMenuH1 = styled.h1`
  color: #49557e;
  font-size: 36px;
  font-weight: 700;
  margin-left: 40px;
`;

const DiamondMenuText = styled.p`
  max-width: 60%;
  color: #808080;
  margin-left: 40px;
`;

const DiamondMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 40px;
  position: relative;
`;

const DiamondMenuList = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
  margin: 20px 0;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none; // For Firefox
  ms-overflow-style: none; // For Internet Explorer and Edge

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DiamondItem = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

const DiamondImage = styled.img`
  width: 7.5vw;
  min-width: 80px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s;
  ${(props) => (props.active ? "border: 2px solid #49557e; padding: 2px;" : "")}
`;

const Hr = styled.hr`
  margin: 10px 0px;
  height: 2px;
  background-color: #49557e;
  border: none;
`;

const ScrollButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: #49557e;
`;

const DiamondDetailContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DiamondDetail = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const DiamondDetailText = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

const DetailImage = styled.img`
  width: 200px;
  border-radius: 100px;
`;

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
      <DiamondMenu>
        <DiamondMenuH1>Diamond List</DiamondMenuH1>
        <DiamondMenuText>
          A diamond is a gemstone that is prized for its brilliance and beauty.
          It is a transparent crystal made of carbon atoms arranged in a
          specific lattice structure. The most common shape for a cut diamond is
          the round brilliant, which features a circular outline and a large
          number of facets that maximize its sparkle and light reflection.
        </DiamondMenuText>
        <DiamondMenuContainer>
          <ScrollButton onClick={() => handleScroll("left")}>
            {"<"}
          </ScrollButton>
          <DiamondMenuList ref={menuRef}>
            {DIAMOND_LIST.map((item) => (
              <DiamondItem key={item.id}>
                <DiamondImage
                  src={item.img}
                  alt={item.name}
                  active={selectedCategory === item.name ? "true" : undefined} // Ensure active is a string
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.name ? DIAMOND_LIST[0].name : item.name
                    )
                  }
                />
                <h2>{item.name}</h2>
              </DiamondItem>
            ))}
          </DiamondMenuList>
          <ScrollButton onClick={() => handleScroll("right")}>
            {">"}
          </ScrollButton>
        </DiamondMenuContainer>
        <Hr />
      </DiamondMenu>
      <div>
        {selectedCategory && (
          <DiamondDetailContainer>
            {DIAMOND_LIST.filter((item) => item.name === selectedCategory).map(
              (item) => (
                <DiamondDetail Detail key={item.id}>
                  <DetailImage src={item.img} alt={item.name} />
                  <div>
                    <DiamondDetailText>Name: {item.name}</DiamondDetailText>
                    <DiamondDetailText>Carat: {item.carat}</DiamondDetailText>
                    <DiamondDetailText>Detail: {item.detail}</DiamondDetailText>
                  </div>
                </DiamondDetail>
              )
            )}
          </DiamondDetailContainer>
        )}
      </div>
    </div>
  );
}

export default DiamondComponent;
