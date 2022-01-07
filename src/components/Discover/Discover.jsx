import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const discoverItem = [
  {
    id: 0,
    heading: "Luxurious",
    headingBold: "Eyewear",
    desc: "Using built-in Bootstrap classes and components",
    imgName: "eyeglass",
  },
  {
    id: 1,
    heading: "Luxurious",
    headingBold: "Eyewear",
    desc: "Using built-in Bootstrap classes and components",
    imgName: "eyeglass",
  },
];

function Discover() {
  return (
    <Container>
      <Row>
        {discoverItem.map((item) => {
          return (
            <Col key={item.id} className="discover-col">
              <div>
                <span>{item.heading}</span> <span>{item.headingBold}</span>
              </div>
              <div>{item.desc}</div>
              <div>
                <a href="">Discover Now</a>
              </div>
              <div>
                <img
                  className="discover-img"
                  src={`../assets/${item.imgName}.png`}
                  alt=""
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Discover;
