import React, { useState } from "react";

function ImageUploader({ onChange }) {
  const [previews, setPreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    onChange(files);
  };

  return (
    <div className="space-y-3">
      <label className="block text-gray-300 font-medium">Upload Images</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="block w-full text-gray-200 bg-[#151820] border border-gray-700 rounded-md p-2 cursor-pointer focus:border-indigo-500"
      />
      {previews.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {previews.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Preview ${i}`}
              className="w-24 h-24 object-cover rounded-md border border-gray-700"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
