import React from "react";
import clsx from "clsx";

function TextArea({ value, onChange, placeholder, className, ...props }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={clsx(
        "w-full bg-[#151820] text-gray-100 placeholder-gray-400 rounded-md p-3 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all duration-200",
        className
      )}
      rows="5"
      {...props}
    ></textarea>
  );
}

export default TextArea;
