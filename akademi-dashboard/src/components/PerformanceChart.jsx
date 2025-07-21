import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", thisWeek: 20, lastWeek: 35 },
  { month: "Feb", thisWeek: 50, lastWeek: 65 },
  { month: "Mar", thisWeek: 90, lastWeek: 75 },
  { month: "Apr", thisWeek: 60, lastWeek: 40 },
  { month: "May", thisWeek: 30, lastWeek: 60 },
  { month: "Jun", thisWeek: 70, lastWeek: 85 },
  { month: "Jul", thisWeek: 100, lastWeek: 95 },
  { month: "Aug", thisWeek: 60, lastWeek: 70 },
  { month: "Sep", thisWeek: 30, lastWeek: 45 },
  { month: "Oct", thisWeek: 80, lastWeek: 90 },
  { month: "Nov", thisWeek: 65, lastWeek: 75 },
  { month: "Dec", thisWeek: 55, lastWeek: 60 },
];

export default function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="thisWeek"
          stroke="#facc15"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="lastWeek"
          stroke="#fb923c"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
