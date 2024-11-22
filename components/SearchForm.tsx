import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const SearchForm = () => {
  return (
    <div className="relative hidden lg:block w-[350px] shadow-sm">
      <MagnifyingGlassIcon 
        width={24} 
        height={24} 
        className="absolute top-[9px] right-4 dark:text-slate-50" 
      />

      <input
        type="text"
        placeholder="Search"
        className="
          w-full 
          rounded-full 
          border 
          border-slate-200
          dark:border-slate-600
          py-2 
          pl-5 
          pr-12 
          text-dark 
          focus:border-primary 
          focus:outline-none 
          dark:border-dark-4 
          dark:bg-slate-700
          dark:text-white 
          dark:focus:border-primary 
        "
      />
    </div>
  );
};

export default SearchForm;
