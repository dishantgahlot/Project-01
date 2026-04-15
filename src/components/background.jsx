import React from "react";

function ProductGrid() {

  const sections = [
    {
      title: "Pick up where you left off",
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=200",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200"
      ]
    },
    {
      title: "Buy again",
      images: [
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=200",
        "https://images.unsplash.com/photo-1622445275576-721325763afe?w=200"
      ]
    },
    {
      title: "Continue shopping deals",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
      ]
    },
    {
      title: "Revamp your home",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200",
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=200"
      ]
    }
  ];

  return (
    <div className="px-5 -mt-32 relative z-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {sections.map((section, i) => (
          <div key={i} className="bg-white p-4 shadow-md">

            <h2 className="font-bold mb-3">{section.title}</h2>

            {section.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-2">
                {section.images.map((img, j) => (
                  <img key={j} src={img} />
                ))}
              </div>
            ) : (
              <img src={section.images[0]} />
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductGrid;