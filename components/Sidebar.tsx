"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ClickOutside from "./ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import SidebarItem from "./SidebarItem";
import { ArrowLeftIcon, TargetIcon } from "@radix-ui/react-icons";
import { Button } from "@nextui-org/button";
import { SidebarProps } from "@/models/sidebar.model";
import { Spinner } from "@nextui-org/react";
import LoadingIndicator from "./LoadingIndicator";

const Sidebar = ({ sidebarOpen, setSidebarOpen, menuItems }: SidebarProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  if (loading) {
    return (
      <LoadingIndicator size="lg" color="danger" className="mt-4" />
    )
  }

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`
          absolute 
          left-0 
          top-0 
          z-9999 
          flex 
          h-screen 
          w-72
          flex-col 
          overflow-y-hidden 
          border-r 
          bg-white 
          border-slate-200
          dark:border-slate-700 
          dark:bg-slate-800
          lg:static 
          lg:translate-x-0 
          ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        <div 
          className="
            flex 
            items-center 
            justify-center 
            gap-2 
            px-6 
            py-5.5 
            lg:py-6.5 
            xl:py-10
          "
        >
          <Link 
            href="/dashboard" 
            className="grid justify-items-center text-2xl font-semibold dark:text-slate-50"
          >
            <TargetIcon 
              width={36} 
              height={36} 
              className="text-[#3B1E54] dark:text-slate-50 mb-2" 
            />
            FINDURTARGET
          </Link>

          <ArrowLeftIcon 
            width={26} 
            height={26} 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="flex lg:hidden"
          />
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-1 px-4 lg:px-6">
            <ul className="mb-6 flex flex-col gap-2">
              {menuItems.map((item, idx) => (
                <SidebarItem
                  key={idx}
                  item={item}
                  pageName={pageName}
                  setPageName={setPageName}
                />
              ))}
            </ul>
          </nav>
        </div>

        <Button 
          className="
            m-5 
            dark:bg-slate-600 
            bg-gray-400/[.30] 
            rounded-lg 
            shadow-sm 
            dark:text-slate-100 
            text-gray-600
          " 
          onClick={handleLogout}
        >
          Logout
        </Button>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
