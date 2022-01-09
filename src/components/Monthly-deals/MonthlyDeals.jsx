import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import Discover from "../Discover/Discover";

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
    <Container className="monthly-deals-wrapper">
      <div className="monthly-deals-header-container">
        <span className="monthly-deals-header">Monthly Deals</span>
        <div className="heading-line"></div>
      </div>
      <div className="monthly-deals-grid">
        {MonthlyDealsData.map((item) => {
          return (
            <div key={item.id} className="monthly-deals-content-wrapper">
              <div className="monthly-deals-img">
                <img src={`../assets/${item.image}.jpg`} alt="" />
              </div>
              <div className="monthly-deals-content">
                <div>
                  <h4 className="monthly-deals-item-title">{item.name}</h4>
                  <span className="monthly-deals-items-discount">
                    {item.discount}
                  </span>
                </div>
                <div className="monthly-deals-disount">
                  <del className="del-price">{item.prevPrice}</del>
                  <h4 className="current-price">{item.currentPrice}</h4>
                </div>
                <div className="add-to-cart">
                  <div className="wishlist">
                    <span>
                      <BsHeart fill="#D84728" size={16} />
                    </span>
                  </div>
                  <button className="add-to-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default MonthlyDeals;
