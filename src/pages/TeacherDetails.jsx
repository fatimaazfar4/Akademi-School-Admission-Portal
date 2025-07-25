// src/pages/TeacherDetails.jsx
import React from "react";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const THEME = "#4d44b5";

const TeacherDetails = () => {
  const location = useLocation();
  const teacher = location.state;

  if (!teacher) {
    return (
      <div className="p-4">
        <h2 className="text-red-500 font-bold">
          No teacher data found. Please go back and select a teacher.
        </h2>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 w-full bg-[#f7f7fb] min-h-screen">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="font-bold text-[22px] md:text-[24px]" style={{ color: "#343d75" }}>
          Teacher Details
        </h1>
        <div className="relative w-full md:w-[230px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: THEME }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 bg-white pl-9 pr-3 h-9 text-sm focus:outline-none"
            style={{ color: THEME }}
          />
        </div>
      </div>

      {/* Layout */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          {/* Profile Card */}
          <div className="w-full rounded-2xl bg-white shadow-md overflow-hidden">
            <div className="relative h-32 bg-[#4d44b5] rounded-t-2xl">
                <div
                className="absolute top-[32px] right-10 w-48 h-48 rounded-full border-[8px] border-[#fcc43e] z-10 overflow-hidden"
                style={{ clipPath: 'inset(0 0 50% 0)' }}
                ></div>
                <div
                className="absolute top-[64px] right-[180px] w-32 h-32 rounded-full border-[8px] border-[#fb7d5b] z-0 overflow-hidden"
                style={{ clipPath: 'inset(0 0 50% 0)' }}
                ></div>
              <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-4 border-white bg-[#c1bbeb]" />
            </div>
            <div className="pt-16 px-6 pb-6">
              <h2 className="text-3xl font-bold text-[#454d80]">{teacher.name}</h2>
              <p className="text-sm text-[#afa8bb]">{teacher.subject} Teacher</p>
              <div className="grid grid-cols-4 gap-4 mt-5">
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fb7d5b] text-white">
                      <MapPin size={14} />
                    </div>
                    <span className="text-sm text-[#454d80]">
                      {teacher.address || "Unknown"}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fb7d5b] text-white">
                      <Phone size={14} />
                    </div>
                    <span className="text-sm text-[#454d80]">{teacher.phone || "N/A"}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fb7d5b] text-white">
                      <Mail size={14} />
                    </div>
                    <span className="text-sm text-[#454d80]">{teacher.email || "N/A"}</span>
                  </div>
                </div>
              </div>

              {teacher.about && (
                <div className="mt-11">
                  <h3 className="text-xl font-bold text-[#343d75] mb-1">About:</h3>
                  <p className="text-sm text-[#454d80] leading-relaxed">
                    {teacher.about}
                  </p>
                </div>
              )}

    
              {teacher.education && teacher.education.length > 0 && (
                <div className="mt-11">
                  <h3 className="text-xl font-bold text-[#343d75] mb-1">Education:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-[#454d80]">
                    {teacher.education.map((edu, idx) => (
                      <li key={idx}>
                        <span className="font-medium">{edu.degree}</span><br />
                        <span className="text-xs text-[#888]">{edu.years}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {teacher.expertise && teacher.expertise.length > 0 && (
                <div className="mt-11">
                  <h3 className="text-xl font-bold text-[#343d75] mb-1">Expertise:</h3>
                  <p className="text-sm text-[#454d80]">
                    {teacher.expertise.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (Schedule) */}
        <div className="w-full lg:w-[350px] space-y-4">
          <div className="rounded-2xl bg-white p-4 shadow-md">
            <h2 className="font-bold text-lg" style={{ color: "#3c447a" }}>
              Schedule Details
            </h2>
            <p className="text-sm mt-1" style={{ color: "#afa8bb" }}>
              Thursday, 10th April, 2021
            </p>
          </div>

          {(teacher.schedule || []).map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white p-4 shadow-md flex flex-col"
              style={{ borderLeft: `8px solid ${item.color || "#4d44b5"}` }}
            >
              <h3 className="font-bold" style={{ color: "#3c447a" }}>
                {item.subject} Class
              </h3>
              <p className="text-sm" style={{ color: "#afa8bb" }}>
                {item.class}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} style={{ color: "#fb7d5b" }} />
                    <span className="text-sm" style={{ color: "#afa8bb" }}>
                      {item.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: "#fb7d5b" }} />
                    <span className="text-sm" style={{ color: "#afa8bb" }}>
                      {item.time}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#c1bbeb]" />
              </div>
            </div>
          ))}

          <button
            className="w-full py-3 rounded-2xl font-semibold"
            style={{ backgroundColor: "#e2e2f8", color: "#4d44b5" }}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
