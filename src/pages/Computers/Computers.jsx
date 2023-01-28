import React from "react";
import { useNavigate } from "react-router-dom";
import "./Computers.css";
function Computers({ image, title, rating, voice, lefts, price, id }) {
  const navigate = useNavigate();

  const getDetail = () => {
    navigate(`details/${id}`);
  };
  return (
    <div onClick={getDetail} className="computers_card">
      <img onClick={getDetail} src={image} alt="computers" />
      <div className="comp_info">
        <h3>{title}</h3>
        <div className="ratings">
          <img src={rating} alt="ratings" />
          <span>{voice}</span>
        </div>
        <div className="prices">
          <sup>$</sup>
          <h2>{price}</h2>
          <sup>00</sup>
        </div>
        <p>{lefts}</p>
      </div>
    </div>
  );
}

export default Computers;
