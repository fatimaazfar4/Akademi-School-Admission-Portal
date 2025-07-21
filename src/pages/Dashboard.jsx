// src/pages/Dashboard.jsx
import { Calendar, Users, Briefcase, Utensils, Plus, Mail } from 'lucide-react';
import DashboardCard from "../components/DashboardCard";
import PerformanceChart from "../components/PerformanceChart";
import SchoolCalendar from "../components/SchoolCalendar";
import FinanceChart from "../components/FinanceChart";
import MessagesCard from '../components/MessagesCard';
import UnpaidTuitionCard from '../components/UnpaidTuitionCard';
import FoodsMenuCard from '../components/FoodsMenuCard'; // Import the new component

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left/Main Column: Contains existing dashboard elements */}
      <div className="lg:col-span-3 space-y-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            title="Students"
            value="932"
            icon={<Users size={28} />}
          />
          <DashboardCard
            title="Teachers"
            value="754"
            icon={<Briefcase size={28} />}
          />
          <DashboardCard
            title="Events"
            value="40"
            icon={<Calendar size={28} />}
          />
          <DashboardCard
            title="Foods"
            value="32k"
            icon={<Utensils size={28} />}
          />
        </div>

        {/* School Performance Chart */}
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
          {/* School Calendar */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">School Calendar</h3>
              <span className="text-sm text-gray-500 font-medium">March 2021</span>
            </div>
            <SchoolCalendar />
          </div>

          {/* School Finance */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">School Finance</h3>
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
            <FinanceChart />
          </div>
        </div>

        {/* Unpaid Student Tuition - New Component */}
        <UnpaidTuitionCard />
      </div> {/* End of Left/Main Column */}

      {/* Right Column: For "Recent Students" and "Messages", and now "Current Foods Menu" */}
      <div className="lg:col-span-1 space-y-6">
        {/* Recent Students Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Recent Students</h3>
              <p className="text-sm text-gray-500">You have 456 students</p>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D3FD3] text-white shadow-md hover:bg-[#4F33B2] transition-colors">
              <Plus size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-[#E0E2FF] rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900">Samantha William</p>
                  <p className="text-sm text-gray-500">Class VII A</p>
                </div>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E0E2FF] text-[#5D3FD3] hover:bg-[#D4D7FF] transition-colors flex-shrink-0">
                <Mail size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-[#E0E2FF] rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900">Tony Soap</p>
                  <p className="text-sm text-gray-500">Class VII A</p>
                </div>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D3FD3] text-white hover:bg-[#4F33B2] transition-colors flex-shrink-0">
                <Mail size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-[#E0E2FF] rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900">Karen Hope</p>
                  <p className="text-sm text-gray-500">Class VII A</p>
                </div>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E0E2FF] text-[#5D3FD3] hover:bg-[#D4D7FF] transition-colors flex-shrink-0">
                <Mail size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-[#E0E2FF] rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900">Jordan Nico</p>
                  <p className="text-sm text-gray-500">Class VII B</p>
                </div>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E0E2FF] text-[#5D3FD3] hover:bg-[#D4D7FF] transition-colors flex-shrink-0">
                <Mail size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-[#E0E2FF] rounded-full mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900">Nadlia Adja</p>
                  <p className="text-sm text-gray-500">Class VII B</p>
                </div>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E0E2FF] text-[#5D3FD3] hover:bg-[#D4D7FF] transition-colors flex-shrink-0">
                <Mail size={20} />
              </button>
            </div>
          </div>
          <button className="w-full py-3 mt-6 text-lg font-semibold text-[#5D3FD3] bg-[#F3F4F6] rounded-xl hover:bg-[#E9EBEE] transition-colors">
            View More
          </button>
        </div>

        {/* Messages Section */}
        <MessagesCard />

        {/* Current Foods Menu - New Component */}
        <FoodsMenuCard />
      </div>
    </div>
  );
}