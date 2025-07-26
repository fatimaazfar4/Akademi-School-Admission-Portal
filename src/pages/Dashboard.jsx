// src/pages/Dashboard.jsx
import {
  Calendar,
  Users,
  Briefcase,
  Utensils,
  Plus,
  Mail,
  Search,
  Bell,
  Settings,
} from "lucide-react";
import DashboardCard from "../components/DashboardCard";
import PerformanceChart from "../components/PerformanceChart";
import SchoolCalendar from "../components/SchoolCalendar";
import FinanceChart from "../components/FinanceChart";
import MessagesCard from "../components/MessagesCard";
import UnpaidTuitionCard from "../components/UnpaidTuitionCard";
import FoodsMenuCard from "../components/FoodsMenuCard";

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#F6F7FB] min-h-screen font-poppins">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 pt-2 pb-6">
        <h1 className="text-3xl font-extrabold text-[#232360] tracking-wide">Dashboard</h1>

        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 rounded-full bg-white border border-[#E0E0F0] text-base text-[#232360] w-64 focus:outline-none focus:ring-2 focus:ring-[#5B4FFF]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B3C7]" size={20} />
          </div>

          <Bell className="text-[#B0B3C7]" size={22} />
          <Settings className="text-[#B0B3C7]" size={22} />

          {/* Profile */}
          <div className="flex items-center gap-2 bg-[#F6F7FB] px-3 py-1 rounded-full">
            <div className="w-9 h-9 bg-[#B0B3C7] rounded-full flex items-center justify-center text-white font-bold text-lg">FA</div>
            <div className="text-right">
              <div className="text-sm font-bold text-[#232360]">Nabila A.</div>
              <div className="text-xs text-[#B0B3C7]">Admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left/Main Column */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title="Students" value="932" icon={<Users size={28} />} />
            <DashboardCard title="Teachers" value="754" icon={<Briefcase size={28} />} />
            <DashboardCard title="Events" value="40" icon={<Calendar size={28} />} />
            <DashboardCard title="Foods" value="32k" icon={<Utensils size={28} />} />
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">School Performance</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#facc15] rounded-full"></div>
                  This Week: <span className="text-gray-900">1.245</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#fb923c] rounded-full"></div>
                  Last Week: <span className="text-gray-900">1.356</span>
                </div>
              </div>
            </div>
            <PerformanceChart />
          </div>

          {/* Calendar + Finance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">School Calendar</h3>
              <SchoolCalendar />
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">School Finance</h3>
              <FinanceChart />
            </div>
          </div>

          {/* Unpaid Tuition */}
          <UnpaidTuitionCard />
        </div>

        {/* Right Sidebar */}
        <div
          className="bg-white rounded-2xl shadow-md p-6"
          style={{ width: "468px", border: "2px solid #C1BBEB" }}
        >
          {/* Recent Students */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-800 leading-none">Recent Students</h3>
              <p className="text-sm font-normal text-gray-500 leading-none">You have 456 students</p>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D3FD3] text-white shadow-md hover:bg-[#4F33B2]">
              <Plus size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {[
              { name: "Samantha William", class: "Class VII A", filled: false },
              { name: "Tony Soap", class: "Class VII A", filled: true },
              { name: "Karen Hope", class: "Class VII A", filled: false },
              { name: "Jordan Nico", class: "Class VII B", filled: false },
              { name: "Nadlia Adja", class: "Class VII B", filled: false },
            ].map((student, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-11 h-11 bg-[#E0E2FF] rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.class}</p>
                  </div>
                </div>
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    student.filled
                      ? "bg-[#5D3FD3] text-white hover:bg-[#4F33B2]"
                      : "bg-[#E0E2FF] text-[#5D3FD3] hover:bg-[#D4D7FF]"
                  }`}
                >
                  <Mail size={20} />
                </button>
              </div>
            ))}
          </div>

          <button className="w-full py-3 mt-6 text-sm font-bold text-[#5D3FD3] bg-[#F3F4F6] rounded-xl hover:bg-[#E9EBEE]">
            View More
          </button>

          {/* Messages */}
          <div className="mt-6">
            <MessagesCard noWrapper />
          </div>

          {/* Food Menu */}
          <div className="mt-6">
            <FoodsMenuCard noWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
