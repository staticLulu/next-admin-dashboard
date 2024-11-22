"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { AvatarIcon, DashboardIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      icon: (
        <DashboardIcon width={20} height={20} />
      ),
      label: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: (
        <AvatarIcon width={20} height={20} />
      ),
      label: "Profile",
      route: "/profile",
    },
    {
      icon: (
        <PersonIcon width={20} height={20} />
      ),
      label: "Users",
      route: "/users",
    },
    {
      icon: (
        <GearIcon width={20} height={20} />
      ),
      label: "Settings",
      route: "/settings",
    },
  ];

  const title = menuItems.find((i: any) => i.label);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          menuItems={menuItems}
        />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} title={title?.label as any}/>

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
