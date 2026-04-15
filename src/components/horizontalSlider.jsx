import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HorizontalSection() {
  const scrollRef = useRef(null);

  
  const items = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6",
    "https://picsum.photos/200?random=7",
    "https://picsum.photos/200?random=8",
    "https://picsum.photos/200?random=9",
    "https://picsum.photos/200?random=10"
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-white m-5 p-4 relative">

      {/* Title */}
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-lg font-bold">
          Related to items you've viewed
        </h2>
        <span className="text-blue-600 text-sm cursor-pointer hover:underline">
          See more
        </span>
      </div>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 z-10 hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {items.map((img, index) => (
          <div key={index} className="min-w-[150px] flex-shrink-0">
            <img
              src={img}
              alt="product"
              className="h-40 w-full object-cover rounded cursor-pointer hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 z-10 hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>

    </div>
  );
}

export default HorizontalSection;