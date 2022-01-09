import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MapleSeriesData = [
  {
    id: 0,
    title: "Way Kambas Maple",
    price: "Rs 1280.000",
    imgSrc: "maple-series",
  },
  {
    id: 1,
    title: "Kaili",
    price: "Rs 950.000",
    imgSrc: "maple-series",
  },
  {
    id: 2,
    title: "Sunda",
    price: "Rs 1170.000",
    imgSrc: "maple-series",
  },
];

function Series() {
  return (
    <Container className="featured-product-wrapper">
      <Row>
        <Col xs={12} md={4} className="maple-series">
          <div className="featured-product-heading">
            <span>Maple Series</span>
            <div className="heading-line"></div>
          </div>
          {MapleSeriesData.map((item) => {
            return (
              <div key={item.id} className="maple-product-container">
                <div className="maple-product-img">
                  <img src={`../assets/${item.imgSrc}.png`} alt="" />
                </div>
                <div className="maple-product-content">
                  <h5 className="product-name">{item.title}</h5>
                  <p className="product-price">{item.price}</p>
                </div>
              </div>
            );
          })}
        </Col>
        <Col xs={12} md={4} className="maple-series">
          <div className="featured-product-heading">
            <span>Ebony Series</span>
            <div className="heading-line"></div>
          </div>
          {MapleSeriesData.map((item) => {
            return (
              <div key={item.id} className="maple-product-container">
                <div className="maple-product-img">
                  <img src={`../assets/${item.imgSrc}.png`} alt="" />
                </div>
                <div className="maple-product-content">
                  <h5 className="product-name">{item.title}</h5>
                  <p className="product-price">{item.price}</p>
                </div>
              </div>
            );
          })}
        </Col>
        <Col xs={12} md={4} className="maple-series">
          <div className="featured-product-heading">
            <span>Featured</span>
            <div className="heading-line"></div>
          </div>
          {MapleSeriesData.map((item) => {
            return (
              <div key={item.id} className="maple-product-container">
                <div className="maple-product-img">
                  <img src={`../assets/${item.imgSrc}.png`} alt="" />
                </div>
                <div className="maple-product-content">
                  <h5 className="product-name">{item.title}</h5>
                  <p className="product-price">{item.price}</p>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
      <div className="see-more-btn-wrapper">
        <div className="see-more-line"></div>
        <div className="see-more-btn-div">
          <button>See More</button>
        </div>
      </div>
    </Container>
  );
}

export default Series;
