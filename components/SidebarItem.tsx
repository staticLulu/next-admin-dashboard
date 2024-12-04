'use client'
import Link from "next/link";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  return (
    <li>
      <Link
        href={item.route}
        onClick={handleClick}
        className={`
          ${pageName === item.label.toLowerCase() 
            ? "bg-primary/[0.15] text-primary/80 dark:bg-slate-600 dark:text-slate-100"
            : "text-slate-700 dark:text-slate-100"} 
            group 
            relative 
            flex 
            items-center 
            gap-3 
            rounded-[7px] 
            px-3.5 
            py-3 
            font-medium 
            duration-300 
            ease-in-out
          `
        }
      >
        {item.icon}
        {item.label}
      </Link>
    </li>
  );
};

export default SidebarItem;
