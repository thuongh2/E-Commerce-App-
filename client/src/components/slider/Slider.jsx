import React, { useState } from "react";
import "./slider.css";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { sliderItems } from "../../data.js";
import styled from "styled-components";


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  // mỗi khi ấn chuyển trang sẽ chuyển  props.slideIndex * -100 vw chuyển qua màn hình
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slideContainer">
      <div className="arrow left" onClick={() => handleSlide("left")}>
        <ChevronLeftOutlinedIcon />
      </div>
      {/* image */}
     <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) => (
          <div className="slide">
            <div className="imageContainer">
              <img className="image" src={item.img} alt="" />
            </div>
            <div className="infoContainer">
              <h1>{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="">SHOW NOW</button>
            </div>
          </div>
        ))}
      </Wrapper>

      {/* end */}
      <div className="arrow right" onClick={() => handleSlide("right")}>
        <ChevronRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
