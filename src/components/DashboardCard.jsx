import { Users, Calendar, BookOpen, Utensils } from "lucide-react";

const iconMap = {
  students: <Users className="text-blue-600" />,
  teachers: <BookOpen className="text-pink-500" />,
  events: <Calendar className="text-yellow-500" />,
  foods: <Utensils className="text-purple-500" />,
};

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-2xl flex items-center gap-4">
      <div className="p-3 bg-gray-100 rounded-full">{iconMap[icon]}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
