import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { ReactNode } from "react";

interface DynamicPopoverProps {
  isOpen: boolean;
  onOpenChange: () => void;
  trigger?: ReactNode;
  title?: string;
  content?: string | ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  popoverClass?: string;
}

export default function DynamicPopover({
  isOpen,
  onOpenChange,
  trigger,
  title,
  content,
  placement,
  popoverClass,
}: DynamicPopoverProps) {
  return (
    <div className="flex flex-col gap-2">
      <Popover
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={placement}
      >
        <PopoverTrigger>
          {trigger}
        </PopoverTrigger>
        <PopoverContent className={`${popoverClass}`}>
            {title && <div className="text-lg font-bold leading-6">{title}</div>}
            {content}
        </PopoverContent>
      </Popover>
    </div>
  );
}
