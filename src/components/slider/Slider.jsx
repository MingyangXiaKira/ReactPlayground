import React, { useState } from "react";
const dataSlider = [
  { id: 1, title: "lorem" },
  { id: 2, title: "lorem" },
  { id: 3, title: "lorem" },
  { id: 4, title: "lorem" },
];

const Slider = () => {
  const [slideindex, setSlideIndex] = useState(0);
  const handleNext = () => {
    setSlideIndex((current) => {
      if (current === dataSlider.length - 1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(current + 1);
      }
    });
  };
  const handlePrev = () => {
    setSlideIndex((current) => {
      if (current === 0) {
        setSlideIndex(dataSlider.length - 1);
      } else {
        setSlideIndex(current - 1);
      }
    });
  };
  const dots = new Array(dataSlider.length).fill(0);
  dots[slideindex] = 1;
  return (
    <div className="sliderContainer relative h-96 overflow-hidden">
      {dataSlider.map((item, index) => {
        if (index === slideindex) {
          return (
            <div key={item.id} className="imageContainer object-cover">
              <img src={`Imgs/img${index + 1}.jpg`} />
            </div>
          );
        }
      })}
      <div className="leftArrow absolute left-0 top-1/2 cursor-pointer ">
        <button onClick={handlePrev} className="p-1 bg-blue-200 text-white">
          Prev
        </button>
      </div>
      <div className="rightArrow absolute right-0 top-1/2 cursor-pointer ">
        <button onClick={handleNext} className="p-1 bg-blue-200 text-white">
          Next
        </button>
      </div>

      <div
        className="dotsContainer absolute bottom-0 flex gap-4"
        style={{ left: "calc(50% - 48px)" }}
      >
        {dots.map((item, index) => {
          return (
            <div
              className={`min-w-3 min-h-3 bg-red-200 ${
                item ? "bg-red-600" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
