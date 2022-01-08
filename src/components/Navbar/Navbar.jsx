import { Container } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { BsPerson, BsHandbag } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleMenuToggle = () => {
    setShowNav(!showNav);
  };
  return (
    <Container>
      <nav className="main-nav">
        <div className="main-logo">
          <img src="../assets/mainlogo.png" alt="" />
        </div>
        <AiOutlineMenu
          size={24}
          className="menu-icon"
          onClick={handleMenuToggle}
        />

        <div className={`${showNav ? "show-main-mobile" : "main-mobile"}`}>
          <div className="menu-close">
            <MdClose fill="#fff" size={24} onClick={handleMenuToggle} />
          </div>

          <div className="main-nav-links">
            <a href="#">Watches</a>
            <a href="#">Eyewear</a>
            <a href="#">Accessories</a>
            <a href="#">News</a>
          </div>
          <div className="main-search-wrapper">
            <div className="main-search">
              <IoIosSearch size={25} fill="#534f53" />
            </div>

            <div className="main-login">
              <BsPerson size={22} />
              <p>Log In</p>
            </div>
            <div className="main-cart">
              <span>
                <BsHandbag size={20} fill="#534f53" />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
