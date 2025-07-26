import React from "react";
import {
  Search,
  User,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useLocation } from "react-router-dom";

const THEME = "#4d44b5";

const StudentDetails = () => {
  const location = useLocation();
  const student = location.state; 

  if (!student) {
    return (
      <div className="p-4">
        <h2 className="text-red-500 font-bold">
          No student data found. Please go back and select a student.
        </h2>
      </div>
    );
  }

 
  const paymentHistory = [
    { id: "#12345", date: "2025-07-10 14:32", amount: "$250", status: "Complete" },
    { id: "#23456", date: "2025-07-12 11:20", amount: "$180", status: "Pending" },
    { id: "#34567", date: "2025-07-15 09:45", amount: "$99", status: "Canceled" },
    { id: "#45678", date: "2025-07-18 17:10", amount: "$320", status: "Complete" }
  ];


  const scheduleItems = [
    { title: "Basic Algorithm", label: "Algorithm", color: "#4d44b5", date: "March 20, 2021", time: "09.00 - 10.00 AM" },
    { title: "Basic Art", label: "Art", color: "#fb7d5b", date: "March 20, 2021", time: "09.00 - 10.00 AM" },
    { title: "HTML & CSS Class", label: "Programming", color: "#fcc43e", date: "March 20, 2021", time: "09.00 - 10.00 AM" },
    { title: "Simple Past Tense", label: "English", color: "#303972", date: "March 20, 2021", time: "09.00 - 10.00 AM" }
  ];

  
  const getStatusColor = (status) => {
    if (status === "Complete") return "#60c3a6";
    if (status === "Pending") return "#c2becb";
    if (status === "Canceled") return "#ff7981";
    return "#363f76";
  };

  return (
    <div className="p-4 md:p-6 w-full bg-[#f7f7fb] min-h-screen">
      {/*  Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="font-bold text-[22px] md:text-[24px]" style={{ color: "#343d75" }}>
          Student Details
        </h1>

        <div className="relative w-full md:w-[230px]">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: THEME }} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 bg-white pl-9 pr-3 h-9 text-sm focus:outline-none"
            style={{ color: THEME }}
          />
        </div>
      </div>

      {/* Main LAYOUT */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          {/* Profile Card */}
          <div className="w-full rounded-2xl bg-white shadow-md overflow-hidden">
            <div className="relative h-32 bg-[#4d44b5] rounded-t-2xl">
              <div className="absolute top-8 right-6 w-48 h-24 bg-[#fcc43e] rounded-t-2xl z-10"></div>
              <div className="absolute top-16 right-36 w-40 h-16 bg-[#fb7d5b] rounded-t-xl z-0"></div>
              <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-4 border-white bg-[#c1bbeb]"></div>
            </div>
            <div className="pt-16 px-6 pb-6">
              <h2 className="text-lg font-bold text-[#454d80]">{student.name}</h2>
              <p className="text-sm text-[#afa8bb]">Student</p>
              <div className="grid grid-cols-4 gap-4 mt-5">
      
                <div>
                  <p className="text-xs text-[#afa8bb]">Parents</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fb7d5b] text-white">
                      <User size={14} />
                    </div>
                    <span className="text-sm text-[#454d80]">{student.parent || "Not Available"}</span>
                  </div>
                </div>
               
                <div>
                  <p className="text-xs text-[#afa8bb]">Address</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fb7d5b] text-white">
                      <MapPin size={14} />
                    </div>
                    <span className="text-sm text-[#454d80]">{student.city || "Unknown"}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-[#afa8bb]">Phone</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fb7d5b] text-white">
                      <Phone size={14} />
                    </div>
                    <span className="text-sm text-[#454d80]">{student.phone || "N/A"}</span>
                  </div>
                </div>
              
                <div>
                  <p className="text-xs text-[#afa8bb]">Email</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#fb7d5b] text-white">
                      <Mail size={14} />
                    </div>
                    <span className="text-sm text-[#454d80]">{student.email || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="w-full rounded-2xl bg-white shadow-md p-6 flex flex-col justify-between" style={{ minHeight: "420px" }}>
            <div>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#363f76" }}>
                Payment History
              </h2>
              <div className="space-y-4">
                {paymentHistory.map((payment, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#ff4550" }}
                      >
                        <TrendingUp size={16} color="#fff" />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: "#363f76" }}>
                          {payment.id}
                        </p>
                        <p className="text-xs" style={{ color: "#b3adbe" }}>
                          {payment.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-bold" style={{ color: "#363f76" }}>
                      {payment.amount}
                    </p>
                    <span
                      className="text-sm font-medium"
                      style={{ color: getStatusColor(payment.status) }}
                    >
                      {payment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm">
                <span style={{ color: "#4d44b5" }}>1-5</span>{" "}
                <span style={{ color: "#c1bbeb" }}>from</span>{" "}
                <span style={{ color: "#4d44b5" }}>100</span>{" "}
                <span style={{ color: "#c1bbeb" }}>data</span>
              </p>

              <div className="flex items-center gap-2">
                <ChevronLeft size={18} className="text-gray-400 cursor-pointer" />

                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium cursor-pointer ${
                      num === 1
                        ? "bg-[#4d44b5] text-white"
                        : "bg-white text-[#4d44b5] border border-[#4d44b5]"
                    }`}
                  >
                    {num}
                  </div>
                ))}

                <ChevronRight size={18} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/*  RIGHT COLUMN (Schedule Details) */}
        <div className="w-full lg:w-[350px] space-y-4">
          <div className="rounded-2xl bg-white p-4 shadow-md">
            <h2 className="font-bold text-lg" style={{ color: "#3c447a" }}>
              Schedule Details
            </h2>
            <p className="text-sm mt-1" style={{ color: "#afa8bb" }}>
              Thursday, 10th April, 2021
            </p>
          </div>

          {/* Schedule Items */}
          {scheduleItems.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white p-4 shadow-md flex flex-col"
              style={{ borderLeft: `8px solid ${item.color}` }}
            >
              <h3 className="font-bold" style={{ color: "#3c447a" }}>
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: "#afa8bb" }}>
                {item.label}
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
                <div className="w-12 h-12 rounded-full bg-[#c1bbeb]"></div>
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

export default StudentDetails;
