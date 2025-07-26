import { NavLink } from "react-router-dom";
import {
  Home,
  DollarSign,
  MessageSquare,
  Activity,
  User,
  Calendar,
  Users,
  BookOpen,
  Utensils,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: <Home size={20} /> },
  { to: "/students", label: "Students", icon: <Users size={20} /> },
  { to: "/teachers", label: "Teachers", icon: <BookOpen size={20} /> },
  { to: "/event", label: "Event", icon: <Calendar size={20} /> },
  { to: "/finance", label: "Finance", icon: <DollarSign size={20} /> },
  { to: "/food", label: "Food", icon: <Utensils size={20} /> },
  { to: "/user", label: "User", icon: <User size={20} /> },
  { to: "/chat", label: "Chat", icon: <MessageSquare size={20} /> },
  { to: "/latest-activity", label: "Lastest Activity", icon: <Activity size={20} /> },
];

export default function Sidebar() {
  return (
    <aside
      className="bg-[#5B4FFF] text-white flex flex-col justify-between"
      style={{
        width: "220px",
        minWidth: "220px",
        height: "100vh",
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    >
      <div>
        <div className="flex items-center gap-3 p-6 pb-4 border-b border-white/20">
          <div className="bg-[#FF6A3A] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-xl">
            A
          </div>
          <h1 className="text-xl font-bold tracking-wide">Akademi</h1>
        </div>
        <nav className="flex flex-col gap-1 mt-6 px-2">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-l-2xl text-base font-medium transition ${
                  isActive
                    ? "bg-white text-[#5B4FFF] font-bold shadow-sm"
                    : "text-white hover:bg-white/10"
                }`
              }
            >
              <span className={"flex items-center"}>{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="px-3 pb-6 text-xs text-white/70">
        <div className="mb-1 font-semibold">Akademi – School Admission Dashboard</div>
        <div>
          Made with <span className="text-red-400">♥</span> by Peterdraw
        </div>
      </div>
    </aside>
  );
}
