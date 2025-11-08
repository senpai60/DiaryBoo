import React from "react";
import clsx from "clsx";

/**
 * 🧠 Reusable TextInput Component
 *
 * Props:
 * - value: string (controlled input)
 * - onChange: function (callback)
 * - placeholder: string
 * - fullWidth: boolean
 * - disabled: boolean
 * - variant: "light" | "dark"
 * - className: string (optional)
 */

function TextInput({
  value,
  onChange,
  placeholder = "Type here...",
  fullWidth = false,
  disabled = false,
  variant = "dark",
  className,
  ...props
}) {
  const baseStyles =
    "px-4 py-2 rounded-md border transition-all duration-200 outline-none focus:ring-2";

  const variants = {
    dark: "bg-[#151820] border-gray-700 text-gray-100 placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-500",
    light:
      "bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-400",
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

export default TextInput;
