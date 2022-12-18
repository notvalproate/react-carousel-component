import React, { useState } from 'react';
import "./CarouselButtons.css"

function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const carouselStyle = {
    position: "relative",
    height: `${props.height}px`,
    width: `${props.width}px`
  }

  const wrapperStyle = {
    display: "flex",
    width: `${props.width * props.items.length}px`,
    height: "100%",
    transform: `translateX(${translateValue}%)` 
  }

  const itemStyle = {
    display: "inline-flex",
    justifyContent: "center",
    height: `${props.height}px`,
    width: `${props.width}px`
  }

  const nextItem = () => {
    if (activeIndex === props.items.length - 1) {
      setActiveIndex(0);
      setTranslateValue(0);
    } 
    else {
      setActiveIndex(activeIndex + 1);
      setTranslateValue(translateValue - (100 / props.items.length));
    }
  }

  const prevItem = () => {
    if (activeIndex === 0) {
      setActiveIndex(props.items.length - 1);
      setTranslateValue(-100 + (100 / props.items.length));
    } 
    else {
      setActiveIndex(activeIndex - 1);
      setTranslateValue(translateValue + (100 / props.items.length));
    }
  }

  return (
    <div className="carousel" style={carouselStyle}>
      <div className="carousel-wrapper" style={wrapperStyle}>
        {props.items.map((item) => {
          return (
            <div style={itemStyle}>
              {item}
            </div>
          )
        })}
      </div>
      <button className="carousel-button prev" onClick={prevItem}><i className="arrow left"/></button>
      <button className="carousel-button next" onClick={nextItem}><i className="arrow right"/></button>
    </div>
  );
}

export default Carousel;
