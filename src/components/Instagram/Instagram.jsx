import React from "react";
import { Container } from "react-bootstrap";

const InstagramData = [
  {
    id: 0,
    imgSrc: "instagram-one",
  },
  {
    id: 1,
    imgSrc: "instagram-two",
  },
  {
    id: 3,
    imgSrc: "instagram-three",
  },
  {
    id: 4,
    imgSrc: "instagram-four",
  },
  {
    id: 5,
    imgSrc: "instagram-five",
  },
];

function Instagram() {
  return (
    <Container>
      <div className="instagram-title">
        <span className="instagram-heading">Instagram</span>
        <div className="heading-line"></div>
      </div>
      <div className="instagram-gallary">
        {InstagramData.map((item) => {
          return (
            <div key={item.id}>
              <img src={`../assets/${item.imgSrc}.jpg`} alt="" />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Instagram;
