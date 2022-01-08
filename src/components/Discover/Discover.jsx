import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const discoverItem = [
  {
    id: 0,
    heading: "Luxurious",
    headingBold: "Eyewear",
    desc: "See the beauty of exotic world with the luxuriois glasses ",
    imgName: "discover-img-one",
  },
  {
    id: 1,
    heading: "Comfortable",
    headingBold: "Watches",
    desc: "Feel the balancing function and beauty in our wooden watches",
    imgName: "discover-img-two",
  },
];

function Discover() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        {discoverItem.map((item) => {
          return (
            <Col key={item.id} className="discover-col">
              <div>
                <span className="discover-heading">{item.heading}</span>{" "}
                <span className="discover-heading-bold">
                  {item.headingBold}
                </span>
              </div>
              <div className="discover-desc">{item.desc}</div>
              <div className="discover-now">
                <span>Discover Now</span>
              </div>
              <div className="discover-img-wrapper">
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
