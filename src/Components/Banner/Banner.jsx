import React, { useState } from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../Assats/Images/carousel1.jpg";
import Carousel2 from "../../Assats/Images/carousel2.jpg";
import Carousel3 from "../../Assats/Images/carousel3.jpg";
import Carousel4 from "../../Assats/Images/carousel4.jpg";

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="carouselImg" src={Carousel1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={Carousel2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={Carousel3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg" src={Carousel4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
