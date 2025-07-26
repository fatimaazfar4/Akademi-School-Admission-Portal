import React from "react";
import {
  ChevronRight,
  ChevronLeft,
  Search,
  Star,
  BarChart2,
  TrendingUp,
  MoreHorizontal,
  Bell,
  Settings,
} from "lucide-react";
import FoodData from "../data/FoodData";

const THEME = "#4d44b5";

const Food = () => {
  return (
    <div className="p-4 md:p-5 w-full bg-[#f7f7fb] min-h-screen">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 pt-2 pb-6">
        <h1 className="text-3xl font-extrabold text-[#232360] tracking-wide">Food</h1>

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

      {/* Food Search */}
      <div className="relative w-full max-w-[250px] mb-4 px-6">
        <Search
          size={18}
          className="absolute left-9 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: THEME }}
        />
        <input
          type="text"
          placeholder="Search food..."
          className="w-full rounded-full border border-gray-300 bg-white pl-9 pr-3 h-8 text-[12px] focus:outline-none"
          style={{ color: THEME }}
        />
      </div>

      {/* Food List Card */}
      <div className="w-full rounded-2xl bg-white p-4 md:p-6 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h2 className="font-bold text-[16px]" style={{ color: "#343d75" }}>
            Food Menu
          </h2>

          <div className="flex items-center gap-4 mt-3 md:mt-0 border-b border-gray-200 w-full md:w-auto">
            {["All Menu", "Breakfast", "Lunch", "Snack"].map((tab, index) => {
              const isActive = tab === "All Menu";
              return (
                <button
                  key={index}
                  className={`relative pb-2 text-[12px] font-medium transition ${
                    isActive ? "text-[#4d44b5]" : "text-[#a098ae]"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-0 w-full h-[3px] bg-[#4d44b5] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Food List */}
        <div className="flex flex-col divide-y divide-gray-100">
          {FoodData.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-4 py-3">
              <div className="flex items-center gap-3 w-full max-w-[220px]">
                <div className="w-14 h-14 bg-[#c1bbeb] rounded-lg" />
                <div>
                  <span className="text-[9px] px-2 py-[2px] rounded-full bg-[#4d44b5] text-white font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-[#3f477c] text-xs mt-1">{item.name}</h3>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#3f477c] font-bold text-sm w-[50px]">
                <Star size={20} fill="#ffcc00" stroke="#ffcc00" />
                {item.rating}
              </div>

              <div className="flex items-center gap-1 text-center w-[80px]">
                <BarChart2 size={24} className="text-[#4d44b5]" />
                <div className="text-[#4d44b5] font-semibold text-xs">{item.totalOrder}</div>
                <div className="text-[10px] text-[#a098ae]">Total Order</div>
              </div>

              <div className="flex items-center gap-1 text-center w-[80px]">
                <TrendingUp size={24} className="text-[#4d44b5]" />
                <div className="text-[#4d44b5] font-semibold text-xs">{item.interest}</div>
                <div className="text-[10px] text-[#a098ae]">Interest</div>
              </div>

              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[9px] text-[#4d44b5] font-bold"
                style={{
                  border: "5px solid transparent",
                  borderTop: `5px solid #4d44b5`,
                  borderLeft: `5px solid #4d44b5`,
                  borderRight: `5px solid #e2e2e2`,
                  borderBottom: `5px solid #e2e2e2`,
                }}
              >
                {item.progress}
              </div>

              <div className="text-gray-400 cursor-pointer">
                <MoreHorizontal size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-4">
          <p className="text-[11px]" style={{ color: "#c1bbeb" }}>
            Showing <b style={{ color: "#4d44b5" }}>1-6</b> of <b style={{ color: "#4d44b5" }}>100</b>
          </p>
          <div className="flex items-center gap-1.5">
            <ChevronLeft size={14} style={{ color: "#aaa" }} />
            <button
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-medium"
              style={{ backgroundColor: THEME, color: "#fff" }}
            >
              1
            </button>
            <button
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-medium"
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${THEME}`,
                color: THEME,
              }}
            >
              2
            </button>
            <button
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-medium"
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${THEME}`,
                color: THEME,
              }}
            >
              3
            </button>
            <ChevronRight size={14} style={{ color: "#aaa" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
