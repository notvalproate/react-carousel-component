import React, { useState } from 'react';
import "./Carousel.css"

function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const nextSlide = () => {
    if (activeIndex === props.items.length - 1) {
      setActiveIndex(0);
      setTranslateValue(0);
    } 
    else {
      setActiveIndex(activeIndex + 1);
      setTranslateValue(translateValue - (100 / props.items.length));
    }
  }

  const prevSlide = () => {
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
    <div className="carousel" style={{position: "relative", height: `${props.height}px`, width: `${props.width}px`}}>
      <div className="carousel-items" style={{width: `${props.width * props.items.length}px`, height: "100%", transform: `translateX(${translateValue}%)` }}>
        {props.items}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}><i className="arrow left"/></button>
      <button className="carousel-button next" onClick={nextSlide}><i className="arrow right"/></button>
    </div>
  );
}

export default Carousel;
