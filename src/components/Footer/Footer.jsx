import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row>
          <Col className="footer-col">
            <div>
              <img
                className="footer-logo"
                src="../assets/footer-logo.jpg"
                alt=""
              />
            </div>
            <div className="footer-address">
              <h5 className="footer-header">Address</h5>
              <div className="footer-address-option">
                <p>Store & Office</p>
                <p>JI. Setrasari Kulon IIIm No. 10-12,</p>
                <p>Sukarasa, Sukasari, Bandung</p>
                <p>Jawa Barat, Indonesia 40152</p>
              </div>
            </div>
            <div className="footer-office-hour">
              <h5 className="footer-header">Office Hour</h5>
              <div>
                <p>Monday - Sunday</p>
                <p>10.00 - 18.00</p>
              </div>
            </div>
          </Col>
          <Col className="footer-col">
            <div>
              <div>
                <h4 className="footer-title-header">Get in touch</h4>
                <div className="heading-line"></div>
              </div>
              <div className="footer-social">
                <div>
                  <h5 className="footer-header">Phone</h5>
                  <p> 022-20277564</p>
                </div>
                <div>
                  <h5 className="footer-header">Service Center</h5>
                  <p> 022-20277564</p>
                </div>
                <div>
                  <h5 className="footer-header">Customer Service</h5>
                  <p> 022-20277564</p>
                </div>
              </div>
              <div className="footer-social-icons">
                <div>
                  <span>
                    <FaFacebookF fill="#D84728" />
                  </span>
                </div>
                <div>
                  <span>
                    <AiOutlineInstagram fill="#D84728" size={20} />
                  </span>
                </div>
                <div>
                  <span>
                    <ImTwitter fill="#D84728" size={18} />
                  </span>
                </div>
                <div>
                  <span>
                    <GrYoutube fill="#D84728" size={18} />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col className="footer-col">
            <div className="useful-links">
              <div>
                <h4 className="footer-title-header">Useful Link</h4>
                <div className="heading-line"></div>
              </div>
              <div>
                <p>Warranty & Complaints</p>
                <p>Order & Shipping</p>
                <p>Tracking Order</p>
                <p>About Us</p>
                <p>Repair</p>
                <p>Terms</p>
                <p>FAQ</p>
              </div>
            </div>
          </Col>
          <Col className="footer-col">
            <div>
              <div>
                <h4 className="footer-title-header">Campaign</h4>
                <div className="heading-line"></div>
              </div>
              <div>
                <p>Warranty & Complaints</p>
                <p>Order & Shipping</p>
                <p>Tracking Order</p>
                <p>About Us</p>
                <p>Repair</p>
                <p>Terms</p>
                <p>FAQ</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
