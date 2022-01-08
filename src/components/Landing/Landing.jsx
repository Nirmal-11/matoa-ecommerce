import { Carousel, Container } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";

const sliderData = [
  {
    id: 0,
    sliderImg: "watchlanding",
    sliderCaptionHeading: "Way Kambas Mini Ebony",
    sliderDesc:
      "MATOA Way Kambas - This wood is chosen to respresent the Sumatran Rhino's skin which is designed wih an overlap effect on iots strap to represent Rhino's skin",
  },
  {
    id: 1,
    sliderImg: "watchlanding",
    sliderCaptionHeading: "Way Kambas Mini Ebony",
    sliderDesc:
      "MATOA Way Kambas - This wood is chosen to respresent the Sumatran Rhino's skin which is designed wih an overlap effect on iots strap to represent Rhino's skin",
  },
  {
    id: 2,
    sliderImg: "watchlanding",
    sliderCaptionHeading: "Way Kambas Mini Ebony",
    sliderDesc:
      "MATOA Way Kambas - This wood is chosen to respresent the Sumatran Rhino's skin which is designed wih an overlap effect on iots strap to represent Rhino's skin",
  },
];

const Landing = () => {
  return (
    <Container>
      <Carousel className="slider-item-wrapper">
        {sliderData.map((item) => {
          return (
            <Carousel.Item key={item.id} className="slider-carousel">
              <div className="slider-content-wrapper">
                <img
                  className="d-block slider-img "
                  src={`../assets/${item.sliderImg}.png`}
                  alt=""
                />

                <div className="slider-content">
                  <h3 className="slider-caption-heading">
                    {item.sliderCaptionHeading}
                  </h3>
                  <div className="heading-line"></div>
                  <p className="slider-desc">{item.sliderDesc}</p>
                  <div className="slider-discover">
                    <span className="discover-btn">Discover</span>
                  </div>
                  <div className="slider-btns">
                    <button className="cart-btn">
                      <div>
                        <BsCartPlus className="cart-icon" size={14} />
                        Add to cart
                      </div>
                    </button>
                    <button className="cicil-btn">Cicil</button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Landing;
