'use client'

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
}

const DynamicButtonII: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  className,
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold focus:outline-none";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-200",
    outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DynamicButtonII;
