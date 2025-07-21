// src/components/UnpaidTuitionCard.jsx
import React from 'react';
import { User, Printer, MoreHorizontal } from 'lucide-react'; // Importing icons

const unpaidStudentsData = [
  {
    id: 1,
    name: "Samantha William",
    studentId: "123456789",
    class: "VII A",
    amount: "$ 50,036",
    avatarBg: "#E0E2FF", // Light purple for avatar
    iconBg: "#FEF2F2", // Light red for icon background
    iconColor: "#EF4444" // Red for icon
  },
  {
    id: 2,
    name: "Tony Soap",
    studentId: "123456789",
    class: "VII A",
    amount: "$ 50,036",
    avatarBg: "#E0E2FF",
    iconBg: "#FEF2F2",
    iconColor: "#EF4444"
  },
  {
    id: 3,
    name: "Jordan Nico",
    studentId: "123456789",
    class: "VII A",
    amount: "$ 50,036",
    avatarBg: "#E0E2FF",
    iconBg: "#FEF2F2",
    iconColor: "#EF4444"
  },
  {
    id: 4,
    name: "Karen Hope",
    studentId: "123456789",
    class: "VII A",
    amount: "$ 50,036",
    avatarBg: "#E0E2FF",
    iconBg: "#FEF2F2",
    iconColor: "#EF4444"
  },
  {
    id: 5,
    name: "Nadila Adja",
    studentId: "123456789",
    class: "VII A",
    amount: "$ 50,036",
    avatarBg: "#E0E2FF",
    iconBg: "#FEF2F2",
    iconColor: "#EF4444"
  },
];

export default function UnpaidTuitionCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">Unpaid Student Tuition</h3>
      </div>

      {/* Student List */}
      <div className="space-y-4"> {/* Space between student rows */}
        {unpaidStudentsData.map((student) => (
          <div key={student.id} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-b-0">
            {/* Student Info (Left side) */}
            <div className="flex items-center flex-grow">
              {/* Avatar */}
              <div
                className="w-11 h-11 rounded-full mr-3 flex-shrink-0"
                style={{ backgroundColor: student.avatarBg }}
              ></div>
              {/* Name and ID */}
              <div className="flex flex-col flex-1 min-w-[120px]"> {/* min-width to prevent text crunching */}
                <p className="font-semibold text-gray-900 truncate">{student.name}</p>
                <p className="text-sm text-gray-500 truncate">ID {student.studentId}</p>
              </div>
            </div>

            {/* Class Info (Middle) */}
            <div className="flex items-center mx-4 flex-shrink-0"> {/* mx-4 for spacing from left and right */}
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full mr-2"
                style={{ backgroundColor: student.iconBg, color: student.iconColor }}
              >
                <User size={18} />
              </div>
              <div className="flex-col hidden md:flex"> {/* Hide on small screens if needed, adjust breakpoint */}
                <p className="font-semibold text-gray-900">Class</p>
                <p className="text-sm text-gray-500">{student.class}</p>
              </div>
            </div>

            {/* Amount & Actions (Right side) */}
            <div className="flex items-center flex-shrink-0 ml-auto"> {/* ml-auto pushes it to the right */}
              <p className="font-semibold text-gray-900 mr-6 md:mr-10 whitespace-nowrap">{student.amount}</p> {/* mr-6 or mr-10 for spacing */}
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors mr-2">
                <Printer size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">Showing 1-5 from 100 data</p>
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#5D3FD3] text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
            3
          </button>
        </div>
      </div>
    </div>
  );
}