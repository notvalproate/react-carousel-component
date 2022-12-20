import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import "./CarouselButtons.css"

function Carousel(props) {
  const length = props.items.length;
  const actualLength = props.items.length + 2;

  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(-(100 / (actualLength)));
  const [indicators, setIndicators] = useState(props.items.map((item, index) => { 
    if(index === 0){
      return (
        <li key={index} className="dot dot-active" onClick={() => goToItem(index)}/>
      )
    }
    return (
      <li key={index} className="dot" onClick={() => goToItem(index)}/>
    )
  }))

  const wrapperRef = useRef();

  const items = [props.items[length - 1], ...props.items, props.items[0]];

  const carouselStyle = {
    margin: props.margin,
    height: props.height,
    maxHeight: props.maxHeight,
    width: `${parseInt(props.width) * (((props.buttonWidth * 2) + 100)/ 100)}${props.width.replace(/\d+/, '')}`,
    maxWidth: `${parseInt(props.maxWidth) * (((props.buttonWidth * 2) + 100)/ 100)}${props.maxWidth.replace(/\d+/, '')}`,
    borderRadius: props.borderRadius,
    backgroundColor: props.bgColor
  }
  
  const windowStyle = {
    overflow: "hidden",
    order: "2",
    height: props.height,
    maxHeight: props.maxHeight,
    width: props.width,
    maxWidth: props.maxWidth,
    borderRadius: props.borderRadius
  }

  const wrapperStyle = {
    width: `${parseInt(props.width) * (length + 2)}${props.width.replace(/\d+/, '')}`,
    transform: `translateX(${translateValue}%)`
  }

  const nextItem = () => {
    wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
    setTranslateValue(translateValue - (100 / actualLength));

    if (activeIndex === (length - 1)) {
      setActiveIndex(0);
      updateIndicators(0);
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setTranslateValue(-((100) / actualLength));
      }, props.transitionLength);
    }
    else {
      setActiveIndex(activeIndex + 1);
      updateIndicators(activeIndex + 1);
    }
  }

  const prevItem = () => {
    wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
    setTranslateValue(translateValue + (100 / actualLength));

    if (activeIndex === 0) {
      setActiveIndex(length - 1);
      updateIndicators(length - 1);
      setTimeout(() => {
        wrapperRef.current.style.transition = "none";
        setTranslateValue(-((100 * length) / actualLength));
      }, props.transitionLength);
    }
    else {
      setActiveIndex(activeIndex - 1);
      updateIndicators(activeIndex - 1);
    }
  }

  const goToItem = (i) => {
    console.log(i);
    wrapperRef.current.style.transition = `transform ${props.transitionLength}ms cubic-bezier(.15,.52,.29,.97)`;
    setActiveIndex(i);
    setTranslateValue(- (100 * (i + 1) / actualLength));
    updateIndicators(i);
  }

  const updateIndicators = (i) => {
    setIndicators((props.items.map((item, index) => { 
      if(index === i){
        return (
          <li key={index} className="dot dot-active" onClick={() => goToItem(index)}/>
        )
      }
      return (
        <li key={index} className="dot" onClick={() => goToItem(index)}/>
      )
    })))
  }

  return (
    <div className="carousel-container">
      <div className="carousel-main" style={carouselStyle}>
        <div className="carousel-window" style={windowStyle}>
          <div className="carousel-wrapper" ref={wrapperRef} style={wrapperStyle}>
            {items.map((item, index) => {
              return (
                <div key={index} className="item-style">
                  {item}
                </div>
              )
            })}
          </div>
        </div>
        <button className="carousel-button prev" onClick={prevItem}><i className="arrow left" style={{ borderColor: props.arrowColor }} /></button>
        <button className="carousel-button next" onClick={nextItem}><i className="arrow right" style={{ borderColor: props.arrowColor }} /></button>
      </div>
      <ul className="indicator-style">
        {indicators}
      </ul>
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
  arrowColor: PropTypes.string,
  buttonWidth: PropTypes.number,
  bgColor: PropTypes.string,
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
  arrowColor: "rgb(189, 189, 189)",
  buttonWidth: 8,
  bgColor: "rgb(255, 255, 255, 0)",
  items: [
    <img src="./test.png" alt="img1" loading="lazy" />,
    <img src="https://source.unsplash.com/category/nature" alt="img2" loading="lazy" />,
    <img src="https://source.unsplash.com/category/fashion" alt="img3" loading="lazy" />,
    <img src="https://source.unsplash.com/category/animals" alt="img4" loading="lazy" />,
    <img src="https://source.unsplash.com/category/kanva" alt="img5" loading="lazy" />
  ]
}

export default Carousel;