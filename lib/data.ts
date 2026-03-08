import { BanknoteArrowDown, CircleGauge, LayoutDashboardIcon, LogOut } from "lucide-react";
import { TChartData, TSidebarData } from "./types";

export const sidebarData: TSidebarData[] = [
  { id: 1, name: 'Dashboard', path: '/dashboard', icon: LayoutDashboardIcon },
  { id: 2, name: 'Analytics', path: '/dashboard/analytics', icon: CircleGauge },
  { id: 3, name: 'Transactions', path: '/dashboard/transactions', icon: BanknoteArrowDown },
  { id: 4, name: 'Logout', path: '/dashboard/logout', icon: LogOut },
]

export const expenseData: TChartData[] = [
  { name: "Food", value: 10000 },
  { name: "Transport", value: 5000 },
  { name: "Entertainment", value: 2000 },
  { name: "Shopping", value: 6000 },
];