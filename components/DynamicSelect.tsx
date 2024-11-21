'use client';

import { Select, SelectItem } from "@nextui-org/react";

interface DynamicSelectProps<T extends { value: string; label: string; icon?: string }> {
  label?: string;
  placeholder?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | undefined;
  data: T[];
  renderItem?: (item: T) => React.ReactNode;
  isRequired?: boolean;
}

export default function DynamicSelectButton<T extends { value: string; label: string; icon?: string }>({
  label,
  placeholder,
  className,
  size,
  data,
  renderItem,
  isRequired,
}: DynamicSelectProps<T>) {
  return (
    <Select
      aria-label={label || placeholder || "Select option"}
      items={data}
      label={label}
      placeholder={`Select ${placeholder}`}
      className={className}
      size={size}
      isRequired={isRequired}
      defaultSelectedKeys={[]}
    >
      {(item: T) => (
        <SelectItem 
          key={item.value} 
          className="bg-white" 
          textValue={item.label} 
        >
          {renderItem ? renderItem(item) : (
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
          )}
        </SelectItem>
      )}
    </Select>
  );
}
