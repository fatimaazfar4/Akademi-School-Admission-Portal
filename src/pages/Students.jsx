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
  Settings,
} from "lucide-react";
import StudentsData from "../data/StudentsData";
import { useNavigate } from "react-router-dom";

const THEME = "#4d44b5";

const Students = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();

  const displayedData = StudentsData.slice(0, 6);

  const handleSelectRow = (index, e) => {
    e.stopPropagation();
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleRowClick = (student) => {
    navigate(`/students/${encodeURIComponent(student.name)}`, { state: student });
  };

  return (
    <div className="p-4 md:p-5 w-full bg-[#f7f7fb] min-h-screen">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 pt-2 pb-6">
        <h1 className="text-3xl font-extrabold text-[#232360] tracking-wide">
          Students
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
            style={{
              backgroundColor: THEME,
            }}
            onClick={() => navigate("/add-student")}
          >
            <Plus size={16} />
            New Student
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm p-3 h-[430px] flex flex-col justify-between">
        {/* Table Header */}
        <div
          className="grid grid-cols-[45px_1.8fr_0.7fr_0.7fr_1fr_0.8fr_0.7fr_0.7fr_0.6fr] gap-2 font-semibold text-[13px] pb-2 border-b border-gray-200 pl-2"
          style={{ color: "#343d75" }}
        >
          <div className="flex justify-center">
            <input type="checkbox" className="accent-[#c1bbeb] w-3.5 h-3.5" />
          </div>
          <div>Name</div>
          <div>ID</div>
          <div>Date</div>
          <div>Parent</div>
          <div>City</div>
          <div>Contact</div>
          <div>Grade</div>
          <div className="pl-3">...</div>
        </div>

        {/* Table Body */}
        <div className="flex-1 flex flex-col justify-between">
          {displayedData.map((student, index) => (
            <div
              key={index}
              className="relative grid grid-cols-[45px_1.8fr_0.7fr_0.7fr_1fr_0.8fr_0.7fr_0.7fr_0.6fr] gap-2 items-center h-[52px] border-b border-gray-100 last:border-0 text-[13px] pl-2 cursor-pointer hover:bg-[#f0f0fb]"
              onClick={() => handleRowClick(student)}
            >
              {selectedRows.includes(index) && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-lg"
                  style={{ backgroundColor: THEME }}
                />
              )}
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onClick={(e) => handleSelectRow(index, e)}
                  className="accent-[#c1bbeb] w-3.5 h-3.5"
                />
              </div>
              <div className="flex items-center gap-2 font-semibold" style={{ color: "#303972" }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#c1bbeb" }}></div>
                {student.name}
              </div>
              <div style={{ color: "#303972" }}>{student.id}</div>
              <div style={{ color: "#c1bbeb" }}>{student.date}</div>
              <div style={{ color: "#303972" }}>{student.parent}</div>
              <div style={{ color: "#303972" }}>{student.city}</div>
              <div className="flex gap-2">
                <div
                  className="w-6 h-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "#e9e7f8", color: THEME }}
                >
                  <Phone size={12} />
                </div>
                <div
                  className="w-6 h-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "#e9e7f8", color: THEME }}
                >
                  <Mail size={12} />
                </div>
              </div>
              <div>
                <span
                  className="px-2 py-0.5 rounded-full text-white text-[10px] font-semibold"
                  style={{ backgroundColor: student.gradeColor }}
                >
                  {student.grade}
                </span>
              </div>
              <div className="text-[#4d44b5] cursor-pointer text-[15px] pl-3">...</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-2">
          <p className="text-[11px]" style={{ color: "#c1bbeb" }}>
            Showing <b style={{ color: "#4d44b5" }}>1-6</b> of{" "}
            <b style={{ color: "#4d44b5" }}>100</b>
          </p>
          <div className="flex items-center gap-1.5">
            <ChevronLeft size={14} style={{ color: "#aaa" }} />
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-medium"
                style={{
                  backgroundColor: num === 1 ? THEME : "#fff",
                  color: num === 1 ? "#fff" : THEME,
                  border: num !== 1 ? `1px solid ${THEME}` : "none",
                }}
              >
                {num}
              </button>
            ))}
            <ChevronRight size={14} style={{ color: "#aaa" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
