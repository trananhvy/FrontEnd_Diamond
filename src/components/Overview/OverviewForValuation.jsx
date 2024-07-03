import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Content = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Line = styled.div`
  width: 30%;
  height: 2px;
  background-color: white;
  margin: 20px 0;
`;

const Paragraph = styled.p`
  font-size: 25px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Title = styled.h2`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;

const Note = styled.div`
  background-color: gba(255, 255, 255, 0.9) r; /* Tăng độ tương phản */
  color: black; /* Tăng độ tương phản */
  border-radius: 10px; /* Tăng độ bo tròn để trông mềm mại hơn */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.6); /* Thêm hiệu ứng glow */
  max-width: 700px;
  margin-right: 20px;
  padding: 20px; /* Thêm padding để tạo không gian bên trong */
  font-size: 1.2em; /* Tăng kích thước chữ */
  text-align: center; /* Căn giữa văn bản */
  position: relative; /* Để sử dụng z-index */
  z-index: 1000; /* Đảm bảo nó nổi trên các phần tử khác */
`;

function WhyCertificateDiamond() {
  return (
    <div>
      <Navbar />

      <Container>
        <Content>
          <div>
            <h1>The 4 C’s of Diamond Valuation</h1>

            <Paragraph>
              <strong>What is a diamond?</strong> <br />A diamond is the hardest
              natural material. It is formed deep inside the earth. Under a high
              temperature and a high pressure, carbon atoms are pressed
              together. The atoms bond together and become a crystal. With
              (volcano) eruptions or earthquakes, the diamonds come to the
              surface where diamond workers find them. However, when the workers
              find diamonds, they look nothing like the ones you see in the
              jeweler's window. It’s easy to mistake a rough diamond for a
              worthless pebble.
            </Paragraph>
            <img
              src="https://wp.royalcoster.com/wp-content/uploads/2019/02/shutterstock_1050637136.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h1>Which diamonds are valuable?</h1>
            <Paragraph>
              Many diamonds that are found, are of bad quality. About 95% of the
              natural diamonds are unsuitable for jewelry. We only use them for
              industrial purposes, such as certain equipment. But we also use
              them to polish the diamonds that do have good quality. The
              remaining 5% is of good quality. These are the stones that
              eventually end up in jewelry. But its values isn’t decided yet.
            </Paragraph>
            <img
              src="https://wp.royalcoster.com/wp-content/uploads/2020/08/shutterstock_1307925280.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h1>When gets a diamond’s value determined?</h1>
            <Paragraph>
              First, the diamond is polished by a (professional) diamond
              polisher. When he or she sees the rough diamond, he or she has a
              general idea of the diamond’s potential. They make a rough
              estimation of how the diamond will look after it is polished. He
              has an idea about the probable carat, color, clarity and cut.
              However, the diamond’s value is still not decided. When the
              polisher finished the diamond, it’s sent to an (independent)
              certification authority.
            </Paragraph>
            <img
              src="https://cdn.shopify.com/s/files/1/0445/3027/0372/files/shutterstock_688889350.jpg?v=1672308430"
              style={{ width: "100%", height: "100%" }}
            />
            <Paragraph>
              This authority examines the diamond up close. They measure and
              weigh the diamond. They examine its color exactly to determine
              where it falls on the diamond color scale. But they also
              investigate the inclusions with a very detailed microscope.
              Finally, they measure the quality of the craftsmanship. Usually,
              there is more than one person who examines the diamond. It gets
              looked at by multiple people to minimalize error. After that, the
              authority determines the final value of the diamond. Now, it is up
              for sale and can be placed in jewelry. But how do the so-called 4
              C’s determine a diamond’s value? What to the authorities look for?
              We’ll tell you.
            </Paragraph>
            <img
              src="https://cdn.shopify.com/s/files/1/0445/3027/0372/files/shutterstock_1036293814.jpg?v=1672308414"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h1>Carat</h1>
            <Paragraph>
              The first one of the 4 C’s is Carat. Carat is the standard unit of
              weight for diamonds. There is a difference between Carat with a C
              and Karat with a K. Karat with a K is the percentage of gold in a
              mix. Carat with a C is the diamond weight. Carat takes its name
              from the carob seed. These small seeds had a uniform weight of 0.2
              grams. That’s why early diamond traders used them as
              counterweights in their balance scales. In the modern metric, one
              carat still equals 0.2 grams. However, most diamonds sold are
              under one carat. That’s why we have a point system. 100 points is
              equal to 1 carat , 50 a ½ carat , 25 a ¼ carat and so forth.
              Generally, we can say: the bigger the carat, the more expensive
              the diamond. But the value also depends on the other C’s.
            </Paragraph>
            <img
              src="https://cdn.shopify.com/s/files/1/0445/3027/0372/files/shutterstock_1054734593.jpg?v=1672308430"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h1>Color</h1>
            <Paragraph>
              The second C, stands for Color. In the category of white diamonds,
              rule of thumb is: less color equals a higher value. As the diamond
              becomes more yellowish, the value drops. Sometimes we can’t see
              the difference in color with the naked eye. We use ‘master stones’
              to see it. Diamond comes in many colors due to errors in
              crystallization and carbon. For example: brown and yellow diamonds
              are very common.
            </Paragraph>
            <img
              src="https://www.iconicjewelry.com/app/uploads/2017/07/color-of-a-diamond-2923-diamond-color-clarity-chart-2920-x-870-copy.jpg"
              style={{ width: "100%", height: "100%" }}
            />
            <Paragraph>
              However, there are also diamonds with a specific color. We call
              these Fancy Colored diamonds. Fancy colored diamonds are created
              by slight quirks of nature. Every colored diamond has its own
              story. For example, when a bit of boron slips into the carbon
              while it is becoming a diamond. In that case the diamond will not
              become white, but becomes blue instead. A bit of nitrogen makes a
              diamond yellow. Natural Fancies are extremely rare. There have
              been many notable colored diamonds throughout our history. One of
              the most famous ones is the Hope Diamond.
            </Paragraph>
            <img
              src="https://cdn.shopify.com/s/files/1/0445/3027/0372/files/hope-diamond-necklace-2-xlarge.jpg?v=1672308430"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h1>Clarity</h1>
            <Paragraph>
              The Clarity of a diamond tells us something about its purity. The
              4 C’s International grading system was created in the 1940s.
              Before that, a diamond’s purity was basically “without flaw” or
              “with flaw(s)”. We now know there are various degrees of diamond
              clarity. There are many different kind of inclusions. The type and
              amount of inclusions determine the diamond's clarity grade. This
              clarity is based on what we can see with a 10x magnifying loupe.
              That is where the term ‘loupe clean’ comes from flawless and pure.
              Some inclusions such as SI2 up to pique are visible to the naked
              eye. But other inclusions are only visible with a loupe.
            </Paragraph>
            <img
              src="https://wp.royalcoster.com/wp-content/uploads/2019/05/shutterstock_726320632-edit.jpg"
              style={{ width: "100%", height: "100%" }}
            />
            <Paragraph>
              Clarity scale of the GIA (gia.edu), in Europe we use the word
              Pique instead of Included.
            </Paragraph>
          </div>
          <div>
            <h1>Cut</h1>
            <Paragraph>
              The last but not least C stands for cut. This is the way the
              diamond is polished. It is the only one that is influenced by
              humans. The first ones are made by nature, the 4th one by us.
              Diamond cuts can be traced back to the middle ages. The first
              "improvements" on nature's design involved a simple polishing of
              the natural facets. This was called the point cut and dates from
              the mid-14th century; by 15th century, the point cut began to be
              improved upon. Sawing off one half off the diamond would create
              the table cut. By the 17th century the first brilliant cut in
              simple form was fashioned.
            </Paragraph>
            <img
              src="https://cdn.shopify.com/s/files/1/0445/3027/0372/files/Brilliant-Cut-Diamond-Standards2.jpg?v=1672308338"
              style={{ width: "100%", height: "100%" }}
            />
            <Paragraph>
              Clarity scale of the GIA (gia.edu), in Europe we use the word
              Pique instead of Included.
            </Paragraph>
          </div>
          <div>
            <h1>Quality of the cut</h1>
            <Paragraph>
              This is the historical evolution of the modern brilliant, facets
              added to the stone in just the order they were developed through
              the centuries and under the hands of the diamond cutter. The
              skills of the polisher plays a crucial role in this. It is why two
              diamonds with exact the same specifications can be very different
              in look and price. Up to 40% in some cases. The sizes need to be
              polished perfectly to get the perfect brilliance. Not too fat, not
              too skinny, but perfect. It can happen that two diamonds have the
              same specifications but because of the way it is cut, one sparkles
              more than the other. It seems alive. We call this fire or sparkle.
            </Paragraph>
            <img
              src="https://wp.royalcoster.com/wp-content/uploads/2019/09/cut-chart.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h1>Different diamond cuts</h1>
            <Paragraph>
              And then there is a different kind of diamond cut. Even though the
              C for cut refers to the quality of the shape, a diamond can also
              get cut in any shape imaginable. There are round cuts such as the
              brilliant, the Royal 201 and the oval cut. But also rectangular
              cuts such as the princess cut and the radiant cut. And of course,
              there are many more. A great diamond polisher can create any
              diamond cut imaginable. But for the value it is also important to
              make the ratio perfect: not too fat, not too skinny.
            </Paragraph>
            <img
              src="https://wp.royalcoster.com/wp-content/uploads/2020/08/tweezers-highlight.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h1>What determines a diamond’s value?</h1>
            <Paragraph>
              Now you know the 4 C’s of diamond valuation. These four: the
              carat, color, clarity and cut determine a diamond’s value. To
              recap this really quickly: Carat: a higher carat makes a diamond
              more valuable. Color: the whiter the diamond the more valuable it
              is. However, fancy colored diamonds are even worth more than white
              diamonds. Clarity: diamonds with no or little inclusions are more
              valuable than stones with inclusions. Cut: if the polisher cut the
              diamond well, the diamond has a higher value.
            </Paragraph>
            <img
              src="https://wp.royalcoster.com/wp-content/uploads/2020/07/5W3A9507.jpg"
              style={{ width: "100%", height: "100%" }}
            />
            <Paragraph>
              If you want to get an amazing diamond, you have to keep the 4 C’s
              in mind. If you want to learn more about the 4 C’s, book our Royal
              Experience. This is an extensive tour about the history of
              diamonds and how to evaluate them. You also get to see and
              experience the difference between all sorts of diamonds. If you
              like to take a step further, you can also book a Diamond
              Masterclass. This is a 4-hour Masterclass, given by our master
              polishers. You go home with your own polished diamond and a
              certificate of completion.
            </Paragraph>
          </div>
        </Content>
      </Container>
    </div>
  );
}

export default WhyCertificateDiamond;
