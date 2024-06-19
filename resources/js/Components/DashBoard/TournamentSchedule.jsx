import React, { useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "tailwindcss/tailwind.css";

const TournamentSchedule = () => {
  const carouselRef = useRef(null);
 
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.children[0].offsetWidth,
        behavior: "smooth",
      });
    }
  };
  
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.children[0].offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex items-center justify-center h-auto mt-40 text-white bg-gray-900">
      <div className="relative w-full max-w-screen-lg overflow-hidden">
        <div
          {...handlers}
          ref={carouselRef}
          className="flex overflow-x-auto transition-transform duration-300 ease-in-out md:overflow-hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Cards */}
          <div className="flex-none w-64 p-4">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p>Card 1</p>
            </div>
          </div>
        </div>
        {/* Flechas de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-0 hidden px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-r-lg top-1/2 hover:bg-gray-600 md:block"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 hidden px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-l-lg top-1/2 hover:bg-gray-600 md:block"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default TournamentSchedule;
