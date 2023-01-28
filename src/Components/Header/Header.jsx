import React from "react";
import "./Header.css";
import Logo from "../../Assats/Images/logo.png";
import { Link } from "react-router-dom";
import Usa from "../../Assats/Images/usa.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
function Header() {
  return (
    <header>
      {/* header left ================================== */}
      <div className="header_left">
       <Link to="/"> <img width={"120px"} src={Logo} alt="logo" /></Link>
        <div className="location_place">
          <HiOutlineLocationMarker className="location_icon" />
          <div className="location_text">
            <p>Deliver to</p>
            <b>Uzbekistan</b>
          </div>
        </div>
      </div>
      {/* header center =================================== */}
      <div className="header_center">
        <button className="categoryBtn">
          All<IoMdArrowDropdown className="arrow_icon" />
        </button>

        <input type="text" />
        <button className="searchBtn">
          <HiOutlineSearch className="search_icon" />
        </button>
      </div>
      {/* header right ===================================== */}
      <div className="header_right">
        <div className="language">
          <p>English</p>
          <div className="flag">
            <img width={"20px"} src={Usa} alt="usa flag" />
            <IoMdArrowDropdown className="arrow_icon" />
          </div>
        </div>
        <div className="login">
          <p>Hello, sign in</p>
          <b>
            Account & List <IoMdArrowDropdown className="arrow_icon" />
          </b>
        </div>
        <div className="returns">
          <p>Returns</p>
          <b>& Orders</b>
        </div>
        <div className="basket">
          <p>0</p>
          <RiShoppingCartLine className="basket_icon"/>
          <sup>Cart</sup>

        </div>
      </div>
    </header>
  );
}

export default Header;
