'use client'

import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  textColor: string;
  onClick?: () => void;
}

const DynamicCard= ({ title, children, className, textColor, onClick }: CardProps) => {
  return (
    <div
      className={`
        bg-white 
        shadow-md 
        rounded-lg 
        p-4 
        ${className} 
        ${onClick && "cursor-pointer"}
      `}
      onClick={onClick}
    >
      <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default DynamicCard;
