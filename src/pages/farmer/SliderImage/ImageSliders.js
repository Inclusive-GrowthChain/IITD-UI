import React, { useState } from 'react';
import { SliderContent } from './SliderContent';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <KeyboardDoubleArrowLeftIcon className='left-arrow' onClick={prevSlide} />
      <KeyboardDoubleArrowRightIcon className='right-arrow' onClick={nextSlide} />
      {SliderContent.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && <>
            <img src={slide.image} alt="lac" className="image" />

            <div className="d-flex align-items-center justify-content-center gap-4 mt-2 text-center">
              <div>
                <p className="mb-0" style={{ color: "#777", fontSize: "14px", fontWeight: "normal" }}>Market Price</p>
                <p className="mb-0" style={{ color: "#777", fontSize: "13px", fontWeight: "normal" }}>{(index + 1) * 500}</p>
              </div>

              <div>
                <p className="mb-0" style={{ color: "#777", fontSize: "14px", fontWeight: "normal" }}>FPO Price</p>
                <p className="mb-0" style={{ color: "#777", fontSize: "13px", fontWeight: "normal" }}>{(index + 1) * 500 - 50}</p>
              </div>
            </div>
          </>}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;