'use client'

import React from "react";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | undefined;
}

const DynamicButton = ({
  label,
  variant = "primary",
  onClick,
  className,
  disabled,
  size,
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold focus:outline-none";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-white hover:bg-gray-200",
    outline: "border border-green-100 text-white hover:bg-green-600/[.12] bg-green-600/[.70]",
  };

  return (
    <Button
      className={clsx(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {label}
    </Button>
  );
};

export default DynamicButton;
