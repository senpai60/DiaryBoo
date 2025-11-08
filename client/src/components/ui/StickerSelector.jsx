import React, { useState } from "react";

// Example sticker library (replace with your PNGs)
const stickers = [
  "/stickers/heart.png",
  "/stickers/sun.png",
  "/stickers/star.png",
  "/stickers/cloud.png",
  "/stickers/flower.png",
];

function StickerSelector({ onSelect }) {
  const [selected, setSelected] = useState([]);

  const handleSelect = (src) => {
    if (selected.includes(src)) {
      const newList = selected.filter((s) => s !== src);
      setSelected(newList);
      onSelect(newList);
    } else if (selected.length < 3) {
      const newList = [...selected, src];
      setSelected(newList);
      onSelect(newList);
    }
  };

  return (
    <div>
      <p className="text-gray-300 font-medium mb-2">
        Choose up to 3 Stickers 🎨
      </p>
      <div className="flex gap-3 flex-wrap">
        {stickers.map((src) => (
          <img
            key={src}
            src={src}
            alt="sticker"
            onClick={() => handleSelect(src)}
            className={`w-14 h-14 object-contain cursor-pointer rounded-md transition-all duration-200 border ${
              selected.includes(src)
                ? "border-indigo-500 bg-[#1C1F26]"
                : "border-gray-700 hover:border-indigo-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default StickerSelector;
