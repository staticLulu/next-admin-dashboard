import { Spinner } from "@nextui-org/react";

const LoadingIndicator = ({
  className, 
  size, 
  color
}:{
  className?: string; 
  size: "lg" | "sm" | "md" | undefined;
  color:  "danger" | "current" | "white" | "default" | "primary" | "secondary" | "success" | "warning" | undefined;
}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spinner size={size} color={color} className={className} />
    </div>
  )
}

export default LoadingIndicator;