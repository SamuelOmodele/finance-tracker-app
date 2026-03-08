"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type DataItem = {
  name: string;
  value: number;
};

interface Props {
  data: DataItem[];
}

const COLORS = [
  "#6DD385",
  "#2868FF",
  "#FAC25F",
  "#8C78E7",
];

export default function SpendingPieChart({ data }: Props) {

  const renderCustomizedLabel = (entry: any) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    if (total === 0) return '0%';

    const percentValue = (entry.value / total) * 100;
    const percent = percentValue.toFixed(1);

    if (percentValue < 5) return '';

    return `${percent}%`;
  };

  return (
    <div className="w-full h-70">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}