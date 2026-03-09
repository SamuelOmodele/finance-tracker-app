"use client";

import { CATEGORY_BG_COLORS } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

type DataItem = {
  category: string;
  amount: number;
};

interface Props {
  data: DataItem[];
}

export default function AnalyticsBarChart({ data }: Props) {
  return (
    <div className="w-full min-w-125 h-70 text-sm">
      <ResponsiveContainer width="105%" height="100%">
        <BarChart data={data} className="-ml-5 mt-5">
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="category" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="amount" radius={[6, 6, 0, 0]} barSize={50} activeBar={false}>
            {data.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={CATEGORY_BG_COLORS[item.category]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}