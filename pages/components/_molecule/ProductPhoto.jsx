import React, { useState } from "react";

export default function ProductPhoto() {
  // Images for rings
  const ringImages = [
    "/plus-band-ring-1.webp",
    "/plus-band-ring-2.webp",
    "/plus-band-ring-3.webp",
  ];

  // State to track the index of the main image
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Function to handle click on smaller images
  const handleImageClick = (index) => {
    setMainImageIndex(index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Display the main image */}
      <div
        className="w-full h-[60vh] bg-[#cdcdcd] rounded-[12px]"
        style={{
          backgroundImage: `url('${ringImages[mainImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-full flex gap-4">
        {/* Render all ring images */}
        {ringImages.map((image, index) => (
          <div
            key={index}
            className={`h-[200px] w-full bg-[#cdcdcd] rounded-[12px] ${
              index === mainImageIndex ? "opacity-50" : ""
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
