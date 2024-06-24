import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
function BlogsContent() {
  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <Card style={{ width: "18rem", marginTop: "100px" }}>
            <Card.Img
              variant="top"
              src="src/assets/_131645031_d10d71e34674172c87ced0aefe68d21116ef20c80_0_4595_31772000x1383.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginTop: "100px" }}>
            <Card.Img
              variant="top"
              src="src/assets/_131645031_d10d71e34674172c87ced0aefe68d21116ef20c80_0_4595_31772000x1383.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginTop: "100px" }}>
            <Card.Img
              variant="top"
              src="src/assets/_131645031_d10d71e34674172c87ced0aefe68d21116ef20c80_0_4595_31772000x1383.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default BlogsContent;
