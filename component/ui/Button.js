import React from "react";
import clsx from "clsx";

const Button = ({ variant = "default", className, children, ...props }) => {
  const baseStyles =
    "inline-flex items-center px-4 py-2 rounded-xl font-medium transition duration-200";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
