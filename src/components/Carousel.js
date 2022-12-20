import React, { useState, useRef} from 'react';
import PropTypes from 'prop-types';
import "./CarouselButtons.css"

function Carousel(props) {
  const length = props.items.length;
  const actualLength = props.items.length + 2;

  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(-(100 / (actualLength)));

  const wrapperRef = useRef();

  const Items = [props.items[length - 1], ...props.items, props.items[0]];  

  const carouselStyle = {
    // overflow: "hidden",
    margin: props.margin,
    position: "relative",
    height: props.height,
    maxHeight: props.maxHeight,
    width: props.width,
    maxWidth: props.maxWidth,
    borderRadius: props.borderRadius
  }

  const wrapperStyle = {
    display: "flex",
    width: `${parseInt(props.width) * (length + 2)}${props.width.replace(/\d+/, '')}`,
    height: "100%",
    transform: `translateX(${translateValue}%)` 
  }

  const itemStyle = {
    display: "inline-flex",
    overflow: "hidden",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
  
  const nextItem = () => {
    if (activeIndex === (length - 1)) {
      setActiveIndex(0);
      wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
      setTranslateValue(translateValue - (100 / actualLength));
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setTranslateValue(-((100)/ actualLength));
      }, props.transitionLength);
    } 
    else {
      setActiveIndex(activeIndex + 1);
      wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
      setTranslateValue(translateValue - (100 / actualLength));
    }
  }

  const prevItem = () => {
    if (activeIndex === 0) {
      setActiveIndex(length - 1);
      wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
      setTranslateValue(translateValue + (100 / actualLength));
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setTranslateValue(-((100 * length)/ actualLength));
      }, props.transitionLength);
    } 
    else {
      setActiveIndex(activeIndex - 1);
      wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
      setTranslateValue(translateValue + (100 / actualLength));
    }
  }

  return (
    <div className="carousel" style={carouselStyle}>
      <div className="carousel-wrapper" ref={wrapperRef} style={wrapperStyle}>
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

Carousel.propTypes = {
  margin: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  borderRadius: PropTypes.string,
  transitionLength: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.element)
}

Carousel.defaultProps = {
  margin: "20px",
  width: "30vw",
  maxWidth: "1280px",
  height: "35vh",
  maxHeight: "720px",
  borderRadius: "0px",
  transitionLength: 250,
  items: [
    <img src="./test.png" alt="img1" loading="lazy"/>,
    <img src="https://source.unsplash.com/category/nature" alt="img2" loading="lazy"/>,
    <img src="https://source.unsplash.com/category/fashion" alt="img3" loading="lazy"/>,
    <img src="https://source.unsplash.com/category/animals" alt="img4" loading="lazy"/>,
    <img src="https://source.unsplash.com/category/kanva" alt="img5" loading="lazy"/>
  ]
}

export default Carousel;