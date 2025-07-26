// src/pages/Teachers.jsx
import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Plus,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Bell,
  Settings
} from "lucide-react";
import TeachersData from "../data/TeachersData";
import { useNavigate } from "react-router-dom";

const THEME = "#4d44b5";

const Teachers = () => {
  const [currentPage] = useState(1);
  const navigate = useNavigate();

  const displayedData = TeachersData.slice(0, 12);


  const handleRowClick = (teacher) => {
    navigate(`/teachers/${encodeURIComponent(teacher.name)}`, { state: teacher });
  };

  return (
    <div className="p-4 md:p-5 w-full bg-[#f7f7fb] min-h-screen">
      {/* Top Header Bar */}
            <div className="flex items-center justify-between px-6 pt-2 pb-6">
              <h1 className="text-3xl font-extrabold text-[#232360] tracking-wide">
                Teacher
              </h1>
      
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
                  <div className="w-9 h-9 bg-[#B0B3C7] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    FA
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#232360]">Nabila A.</div>
                    <div className="text-xs text-[#B0B3C7]">Admin</div>
                  </div>
                </div>
              </div>
            </div>
      
      {/* Search + Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="relative w-full max-w-[300px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: THEME }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 bg-white pl-9 pr-3 h-8 text-[13px] focus:outline-none"
            style={{ color: THEME }}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1 rounded-full px-4 h-8 text-[13px] font-medium hover:opacity-90"
            style={{
              backgroundColor: "#f7f7fb",
              border: `1px solid ${THEME}`,
              color: THEME,
            }}
          >
            Newest
            <ChevronDown size={16} />
          </button>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full px-4 h-8 text-[13px] font-semibold text-white shadow"
            style={{ backgroundColor: THEME }}
            onClick={() => navigate("/add-teacher")}
          >
            <Plus size={16} />
            New Teacher
          </button>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {displayedData.map((teacher, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-sm px-4 py-5 flex flex-col items-center gap-2 cursor-pointer hover:shadow-md transition"
            onClick={() => handleRowClick(teacher)}
          >
            <div className="absolute top-2 right-3 text-xl text-gray-400 cursor-pointer">
              ...
            </div>

            <div
              className="w-14 h-14 rounded-full"
              style={{ backgroundColor: "#c1bbeb" }}
            ></div>

            <div className="font-semibold text-[#303972] text-sm text-center">
              {teacher.name}
            </div>
            <div className="text-[12px] text-[#a098ae] text-center">
              {teacher.subject}
            </div>

            <div className="flex gap-2 mt-2">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full"
                style={{ backgroundColor: THEME, color: "#fff" }}
              >
                <Phone size={14} />
              </div>
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full"
                style={{ backgroundColor: THEME, color: "#fff" }}
              >
                <Mail size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-6">
        <p className="text-[11px]" style={{ color: "#c1bbeb" }}>
          Showing <b style={{ color: THEME }}>1-12</b> of{" "}
          <b style={{ color: THEME }}>100</b>
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
  );
};

export default Teachers;
