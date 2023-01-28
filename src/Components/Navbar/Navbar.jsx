import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu} from "react-icons/ai";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="nav_left">
      <NavLink className={"navLinks"} to={"/"}>
        <AiOutlineMenu className={"menu_icon"} /> All
      </NavLink>
      <NavLink className={"navLinks"} to={"/"}>Today's Deals</NavLink>
      <NavLink className={"navLinks"} to={"/"}>Customer Service</NavLink>
      <NavLink className={"navLinks"} to={"/"}>Registry</NavLink>
      <NavLink className={"navLinks"} to={"/"}>Gift Cards</NavLink>
      <NavLink className={"navLinks"} to={"/"}>Sell</NavLink>
      </div>
      <div className="nav_right">
        <NavLink className={"navLinks"} to={"/"}>Shop top categories</NavLink>
      </div>
      
    </nav>
  );
}

export default Navbar;
