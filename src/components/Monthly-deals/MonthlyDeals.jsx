import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MonthlyDealsData = [
  {
    id: 0,
    image: "monthly-deal",
    name: "Singo Maple",
    discount: "20% Off",
    prevPrice: "Rs 1500.000",
    currentPrice: "Rs 1264.000",
  },
  {
    id: 1,
    image: "monthly-deal",
    name: "Singo Maple",
    discount: "20% Off",
    prevPrice: "Rs 1500.000",
    currentPrice: "Rs 1264.000",
  },
  {
    id: 2,
    image: "monthly-deal",
    name: "Singo Maple",
    discount: "20% Off",
    prevPrice: "Rs 1500.000",
    currentPrice: "Rs 1264.000",
  },
  {
    id: 3,
    image: "monthly-deal",
    name: "Singo Maple",
    discount: "20% Off",
    prevPrice: "Rs 1500.000",
    currentPrice: "Rs 1264.000",
  },
];

function MonthlyDeals() {
  return (
    <Container>
      <div className="monthly-deals-header-container">
        <span className="monthly-deals-header">Monthly</span>
        <span> Deals</span>
      </div>
      <Row>
        {MonthlyDealsData.map((item) => {
          return (
            <Col key={item.id}>
              <div className="monthly-deals-img">
                <img src={`../assets/${item.image}.jpg`} alt="" />
              </div>
              <div className="monthly-deals-content">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.discount}</p>
                </div>
                <div>
                  <del>{item.prevPrice}</del>
                  <h4>{item.currentPrice}</h4>
                </div>
                <div>
                  <button>Add to cart</button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MonthlyDeals;
