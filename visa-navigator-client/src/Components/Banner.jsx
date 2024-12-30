import React, { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    "https://i.ibb.co.com/PzVfwmB/a0fd5d60545707-5a50feec61144.png",
    "https://i.ibb.co.com/qpDTGSx/fbc6e060545707-5a50feec626fd.png",
    "https://i.ibb.co.com/pPgxXps/15b21660545707-5a50feec61523.png",
    "https://i.ibb.co.com/r4Mvp3f/29459e60545707-5a50feec61c70.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide changes every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className={`carousel-item relative w-full  ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img src={slide} className="w-full rounded-lg h-[550px]" alt={`Slide ${index + 1}`} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % slides.length)
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
