import { useState } from "react";
// import { SliderData } from "./SliderData";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

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
    <section className="slider">
      <KeyboardDoubleArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <KeyboardDoubleArrowRightIcon
        className="right-arrow"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && <>
            <img
              src={slide.imageUrl}
              alt=""
              height={180}
              className="image"
            />

            <div className="d-flex align-items-center justify-content-center gap-4 mt-2 text-center">
              <div>
                <p className="mb-0" style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>Market Price</p>
                <p className="mb-0" style={{ color: "black", fontSize: "13px", fontWeight: "bold" }}>₹ {slide.marketPrice}</p>
              </div>

              <div>
                <p className="mb-0" style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>FPO Price</p>
                <p className="mb-0" style={{ color: "black", fontSize: "13px", fontWeight: "bold" }}>₹ {slide.fpoPrice}</p>
              </div>
            </div>
          </>}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
