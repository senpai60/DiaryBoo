import React from "react";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

/**
 * 🧠 Simple, Clean, and Powerful Button
 *
 * Props:
 * - bg (default: "transparent")
 * - activeBg (color on hover/selected)
 * - color (text color)
 * - active (bool → for selected state)
 * - size: "sm" | "md" | "lg"
 * - loading: boolean
 * - disabled: boolean
 * - fullWidth: boolean
 * - leftIcon / rightIcon
 */

const Button = ({
  children,
  bg = "transparent",
  activeBg = "#151820",
  color = "#fff",
  active = false,
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 active:scale-95 border border-transparent",
        sizeStyles[size],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-60 cursor-not-allowed",
        className
      )}
      style={{
        backgroundColor: active ? activeBg : bg,
        color,
        borderColor: active ? activeBg : "transparent",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = activeBg)}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = bg;
      }}
      {...props}
    >
      {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
      {loading && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
      {children}
      {rightIcon && !loading && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
