import { ReactNode } from "react";

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  menuItems: any[];
}