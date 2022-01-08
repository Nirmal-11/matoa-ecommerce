import React from "react";
import { Container } from "react-bootstrap";

const ParthnerData = [
  {
    id: 0,
    imgSrc: "partner-one",
  },
  {
    id: 1,
    imgSrc: "partner-two",
  },
  {
    id: 2,
    imgSrc: "partner-three",
  },
  {
    id: 3,
    imgSrc: "partner-four",
  },
  {
    id: 4,
    imgSrc: "partner-five",
  },
  {
    id: 5,
    imgSrc: "partner-six",
  },
  {
    id: 6,
    imgSrc: "partner-seven",
  },
  {
    id: 7,
    imgSrc: "partner-eight",
  },
  {
    id: 8,
    imgSrc: "partner-nine",
  },
  {
    id: 9,
    imgSrc: "partner-ten",
  },
];

function Partners() {
  return (
    <div className="partners">
      <Container className="partner-container">
        <div className="partners-logo">
          {ParthnerData.map((item) => {
            return (
              <div key={item.id}>
                <img src={`../assets/${item.imgSrc}.jpg`} alt="" />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Partners;
