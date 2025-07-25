import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Plus,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
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
      {/* Heading */}
      <h1
        className="font-bold mb-3 text-[24px]"
        style={{ color: "#343d75" }}
      >
        Students
      </h1>

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
              <div
                className="flex items-center gap-2 font-semibold"
                style={{ color: "#303972" }}
              >
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: "#c1bbeb" }}
                ></div>
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
              <div className="text-[#4d44b5] cursor-pointer text-[15px] pl-3">
                ...
              </div>
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

export default Students;
