import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import useColorMode from "../hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleBaseClasses = `
    absolute left-0.5 top-1/2 z-1 h-9.5 w-9.5 -translate-y-1/2 rounded-full 
    bg-white transition-transform duration-300 ease-in-out dark:bg-dark-3
  `;

  const iconBaseClasses = `
    relative z-10 flex h-9.5 w-full max-w-9.5 items-center justify-center
  `;

  return (
    <div
      onClick={() =>
        typeof setColorMode === "function" &&
        setColorMode(colorMode === "light" ? "dark" : "light")
      }
      className="
        relative 
        z-10 
        flex 
        h-10 
        w-[96px] 
        cursor-pointer 
        items-center 
        gap-2.5 
        shadow-sm 
        rounded-full 
        bg-gray-3 
        p-[5px] 
        text-dark 
        dark:bg-slate-700 
        dark:text-white 
        border 
        border-slate-200 
        dark:border-slate-600
      "
    >
      {/* Toggle Slider */}
      <div
        className={`${toggleBaseClasses} ${
          colorMode === "dark" ? "translate-x-[51px]" : "translate-x-[3px]"
        }`}
      />
      
      {/* Icons */}
      <span className={iconBaseClasses}>
        <SunIcon width={20} height={20} />
      </span>
      <span className={iconBaseClasses}>
        <MoonIcon width={20} height={20} />
      </span>
    </div>
  );
};

export default DarkModeSwitcher;
