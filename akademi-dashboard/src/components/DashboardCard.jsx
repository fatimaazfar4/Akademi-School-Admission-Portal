export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="text-purple-600 text-3xl">{icon}</div>
    </div>
  );
}
