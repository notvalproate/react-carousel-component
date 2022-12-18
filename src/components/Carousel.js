import React, { useState } from 'react';
import "./CarouselButtons.css"

function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(-(100 / 3));
  const [Items, setItems] = useState([props.items[props.items.length - 1], props.items[0], props.items[1]]);

  const carouselStyle = {
    position: "relative",
    height: `${props.height}px`,
    width: `${props.width}px`
  }

  const wrapperStyle = {
    display: "flex",
    width: `${props.width * 3}px`,
    height: "100%",
    transform: `translateX(${translateValue}%)` 
  }

  const itemStyle = {
    display: "inline-flex",
    overflow: "hidden",
    justifyContent: "center",
    height: `${props.height}px`,
    width: `${props.width}px`
  }

  const getList = (i) => {
    let middle = i < 0 ? props.items.length - 1 : i % props.items.length;
    let first = (middle - 1) < 0 ? props.items.length - 1 : middle - 1;
    let last = (i + 1) % props.items.length;
  
    const array = [
      props.items[first],
      props.items[middle],
      props.items[last]
    ];
    
    return array;
  }

  const nextItem = () => {
    setItems(getList(activeIndex + 1));

    if (activeIndex === (props.items.length - 1)) {
      setActiveIndex(0);
    } 
    else {
      setActiveIndex(activeIndex + 1);
    }
  }

  const prevItem = () => {
    setItems(getList(activeIndex - 1));

    if (activeIndex === 0) {
      setActiveIndex(props.items.length - 1);
    } 
    else {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div className="carousel" style={carouselStyle}>
      <div className="carousel-wrapper" style={wrapperStyle}>
        {Items.map((item, index) => {
          return (
            <div key={index} style={itemStyle}>
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
