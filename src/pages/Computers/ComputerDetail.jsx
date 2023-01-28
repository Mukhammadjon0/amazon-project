import React from "react";
import { Link, useParams } from "react-router-dom";
import { notebooks } from "../../datas/datas";
import "./ComputerDetail.css";
function ComputerDetail() {
  const { id } = useParams();
  const computer = notebooks.find((item) => item.id === Number(id));
  return (
    <div className="computer_detail">
      <img src={computer.image} alt="notebook" />
      <div className="desc">
        <h1>{computer.title}</h1>
        <Link>Visit the Acer Store</Link>
        <div className="ratings">
          <img src={computer.rating} alt="ratings" />
          <span>{computer.voice}</span>
        </div>
        <span>
          Price: <h1>{computer.price}</h1>
        </span>
        <h1>
          Brand: <span>{computer.brand}</span>
        </h1>
        <h1>
          Color: <span>{computer.color}</span>
        </h1>
        <h4>About this item</h4>
        <p>{computer.desc}</p>
      </div>
    </div>
  );
}

export default ComputerDetail;
