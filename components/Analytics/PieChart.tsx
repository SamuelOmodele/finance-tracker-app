"use client";

import { CATEGORY_BG_COLORS } from "@/lib/data";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type DataItem = {
  name: string;
  value: number;
};

interface Props {
  data: DataItem[];
}

type PieLabelProps = {
  value?: number;
};

export default function AnalyticsPieChart({ data }: Props) {

  const renderCustomizedLabel = ({ value }: PieLabelProps) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    if (!value || total === 0) return "0%";

    const percentValue = (value / total) * 100;
    const percent = percentValue.toFixed(1);

    if (percentValue < 5) return "";

    return `${percent}%`;
  };

  return (
    <div className="w-full h-75 text-sm">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={CATEGORY_BG_COLORS[item.name]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}