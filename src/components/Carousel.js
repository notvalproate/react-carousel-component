import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "./CarouselButtons.css"

function Carousel(props) {
  const length = props.items.length;
  const actualLength = props.items.length + 2;

  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(-(100 / (actualLength)));

  const wrapperRef = useRef();

  const Items = [props.items[length - 1], ...props.items, props.items[0]];

  const buttonStyle = {
    width: `${parseInt(props.width) * 0.08}${props.width.replace(/\d+/, '')}`
  }

  const carouselStyle = {
    margin: props.margin,
    position: "relative",
    height: props.height,
    maxHeight: props.maxHeight,
    width: `${parseInt(props.width) * 1.16}${props.width.replace(/\d+/, '')}`,
    maxWidth: `${parseInt(props.maxWidth) * 1.16}${props.width.replace(/\d+/, '')}`,
    borderRadius: props.borderRadius
  }
  
  const windowStyle = {
    overflow: "hidden",
    position: "relative",
    left: `${parseInt(props.width) * 0.08}${props.width.replace(/\d+/, '')}`,
    height: props.height,
    maxHeight: props.maxHeight,
    width: props.width,
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
    wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
    setTranslateValue(translateValue - (100 / actualLength));

    if (activeIndex === (length - 1)) {
      setActiveIndex(0);
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setTranslateValue(-((100) / actualLength));
      }, props.transitionLength);
    }
    else {
      setActiveIndex(activeIndex + 1);
    }
  }

  const prevItem = () => {
    wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
    setTranslateValue(translateValue + (100 / actualLength));

    if (activeIndex === 0) {
      setActiveIndex(length - 1);
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setTranslateValue(-((100 * length) / actualLength));
      }, props.transitionLength);
    }
    else {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div className="carousel" style={carouselStyle}>
      <div className="carousel-window" style={windowStyle}>
        <div className="carousel-wrapper" ref={wrapperRef} style={wrapperStyle}>
          {Items.map((item, index) => {
            return (
              <div key={index} style={itemStyle}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
      <button className="carousel-button prev" onClick={prevItem} style={buttonStyle}><i className="arrow left" /></button>
      <button className="carousel-button next" onClick={nextItem} style={buttonStyle}><i className="arrow right" /></button>
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
  maxWidth: "100vw",
  height: "35vh",
  maxHeight: "100vh",
  borderRadius: "0px",
  transitionLength: 250,
  items: [
    <img src="./test.png" alt="img1" loading="lazy" />,
    <img src="https://source.unsplash.com/category/nature" alt="img2" loading="lazy" />,
    <img src="https://source.unsplash.com/category/fashion" alt="img3" loading="lazy" />,
    <img src="https://source.unsplash.com/category/animals" alt="img4" loading="lazy" />,
    <img src="https://source.unsplash.com/category/kanva" alt="img5" loading="lazy" />
  ]
}

export default Carousel;