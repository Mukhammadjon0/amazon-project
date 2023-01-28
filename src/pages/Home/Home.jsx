import React from "react";
import Banner from "../../Components/Banner/Banner";
import { notebooks } from "../../datas/datas";
import Computers from "../Computers/Computers";
import "./Home.css";
function Home() {
  return (
    <div className="">
      <Banner />

      <div className="computers_cards">
        {notebooks.map((item) => (
          <Computers key={item.id} item={item} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
