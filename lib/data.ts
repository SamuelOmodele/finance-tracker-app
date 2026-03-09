import { BanknoteArrowDown, CircleDollarSign, CircleGauge, LayoutDashboardIcon } from "lucide-react";
import { TSidebarData } from "./types";

export const sidebarData: TSidebarData[] = [
  { id: 1, name: 'Dashboard', path: '/dashboard', icon: LayoutDashboardIcon },
  { id: 2, name: 'Analytics', path: '/dashboard/analytics', icon: CircleGauge },
  { id: 3, name: 'Transactions', path: '/dashboard/transactions', icon: BanknoteArrowDown },
  { id: 4, name: 'Budget', path: '/dashboard/budget', icon: CircleDollarSign },
]

export const CATEGORY_BG_COLORS: Record<string, string> = {
  'Food': "#6DD385",
  'Transport': "#2868FF",
  'Entertainment': "#FAC25F",
  'Shopping': "#8C78E7",
};

export const CATEGORY_TEXT_COLORS: Record<string, string> = {
  'Food': "#3DA355",
  'Transport': "#0848DF",
  'Entertainment': "#FAC25F",
  'Shopping': "#8C78E7",
};

export const categories = ['Food', 'Transport', 'Entertainment', 'Shopping']
