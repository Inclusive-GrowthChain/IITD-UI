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
      {SliderContent.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={slide.image} alt='lac image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;