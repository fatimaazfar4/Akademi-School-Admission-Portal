import { NavLink } from "react-router-dom";
import { Home, DollarSign, MessageSquare, Activity, User, Calendar } from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: <Home size={20} /> },
  { to: "/students", label: "Students", icon: <User size={20} /> },
  { to: "/finance", label: "Finance", icon: <DollarSign size={20} /> },
  { to: "/chat", label: "Chat", icon: <MessageSquare size={20} /> },
  { to: "/latest-activity", label: "Activity", icon: <Activity size={20} /> },
  { to: "/user", label: "Users", icon: <User size={20} /> },
  { to: "/event", label: "Events", icon: <Calendar size={20} /> },
];

export default function Sidebar() {
  return (
    <aside
  className="bg-[#5B4FFF] text-white flex flex-col justify-between"
  style={{
    width: "345px",
    height: "1155px",
    opacity: 1,
    transform: "rotate(0deg)",
  }}
>
  <div>
    <div className="p-6 border-b border-white/20">
      <h1 className="text-xl font-bold">Akademi</h1>
    </div>
    <nav className="flex flex-col gap-1 mt-4 px-2">
      {links.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
              isActive
                ? "bg-white/20 text-white"
                : "text-white hover:bg-white/10"
            }`
          }
        >
          {icon}
          {label}
        </NavLink>
      ))}
    </nav>
  </div>

  <div className="p-4 text-xs text-white/70">
    © 2025 Akademi
  </div>
</aside>
  );
}
