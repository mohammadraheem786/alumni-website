import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  ariaLabel,
  type = "button",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 ${className}`}
    aria-label={ariaLabel || children}
  >
    {children}
  </button>
);

export default Button;
