import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Mon", thisWeek: 80, lastWeek: 65 },
  { name: "Tue", thisWeek: 45, lastWeek: 55 },
  { name: "Wed", thisWeek: 60, lastWeek: 40 },
  { name: "Thu", thisWeek: 70, lastWeek: 30 },
  { name: "Fri", thisWeek: 50, lastWeek: 85 },
  { name: "Sat", thisWeek: 90, lastWeek: 70 },
  { name: "Sun", thisWeek: 60, lastWeek: 50 },
];

export default function FinanceChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="thisWeek" fill="#facc15" radius={[6, 6, 0, 0]} barSize={20} />
        <Bar dataKey="lastWeek" fill="#fb923c" radius={[6, 6, 0, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}
