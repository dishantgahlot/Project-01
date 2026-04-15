import React from "react";

function BackgroundSlider() {
  const banners = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
    "https://images.unsplash.com/photo-1478144592103-25e218a04891"
  ];

  return (
    <div className="w-full h-[350px] overflow-hidden relative">

      <div
        className="flex h-full animate-slide"
        style={{ width: `${banners.length * 100}%` }}
      >
        {banners.map((img, i) => (
          <img
            key={i}
            src={`${img}?auto=format&fit=crop&w=1500&q=80`}
            className="w-full object-cover"
          />
        ))}
      </div>

      {/* Gradient */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-100"></div>
    </div>
  );
}

export default BackgroundSlider;