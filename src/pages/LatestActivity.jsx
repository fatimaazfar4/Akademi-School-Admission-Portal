import { Search, Bell, Settings } from "lucide-react";
import ActivityContainer from "../components/ActivityContainer";

export default function LatestActivity() {
  return (
    <div className="p-4 md:p-5 w-full bg-[#f7f7fb] min-h-screen">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 pt-2 pb-6">
        <h1 className="text-3xl font-extrabold text-[#232360] tracking-wide">Notification & Latest-Activity</h1>

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

      {/* Activity Content */}
      <ActivityContainer />
    </div>
  );
}
