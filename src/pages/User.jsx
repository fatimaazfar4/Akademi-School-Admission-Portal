import React from "react";
import { Search, Phone, Mail, MessageSquare } from "lucide-react";
import { BsFillCircleFill } from "react-icons/bs";


// Dummy activity data
const activities = [
  {
    name: "Karen Hope",
    action: "moved task",
    task: '"User Research"',
    context: "from On Progress to Done",
    time: "2 March 2024, 12:45 PM",
    color: "text-red-500",
  },
  {
    name: "Samantha William",
    action: "added",
    task: "4 attached files",
    context: 'on task "Photo Assets"',
    time: "2 March 2024, 13:45 PM",
    color: "text-purple-500",
  },
  {
    name: "Tony Soap",
    action: "put you in task",
    task: '"Wireframing"',
    context: 'and "Hi-fidelity"',
    time: "2 March 2024, 13:55 PM",
    color: "text-blue-500",
  },
  {
    name: "Samantha William",
    action: "created new",
    task: "Task",
    context: "",
    time: "2 March 2024, 12:45 PM",
    color: "text-pink-500",
  },
];

const User = () => {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 bg-[#f7f7fb]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h1 className="text-3xl font-extrabold text-[#232360]">User Dashboard</h1>

          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-full bg-white border border-[#E0E0F0] text-base text-[#232360] w-64 focus:outline-none focus:ring-2 focus:ring-[#5B4FFF]"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B3C7]" size={20} />
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2 bg-[#F6F7FB] px-3 py-1 rounded-full">
              <div className="w-9 h-9 bg-[#B0B3C7] rounded-full flex items-center justify-center text-white font-bold text-lg">NA</div>
              <div className="text-right">
                <div className="text-sm font-bold text-[#232360]">Nabila A.</div>
                <div className="text-xs text-[#B0B3C7]">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-[#6C63FF] text-white rounded-2xl mx-6 px-6 py-6 flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-20 h-20 rounded-full bg-white opacity-20" />
            <div>
              <h2 className="text-2xl font-semibold">Nabila Azalea</h2>
              <p className="text-sm">Admin · Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="text-right space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} /> +12 345 6789 0
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> jordan@mail.com
            </div>
          </div>
        </div>

        {/* Grid: Contacts, Messages, Latest Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-10">
          {/* Contacts */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#343d75] text-sm">Contacts</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B3C7]" size={16} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-3 py-1 h-8 text-xs border border-gray-300 rounded-full focus:outline-none"
                />
              </div>
            </div>
            <ul className="divide-y divide-gray-100 text-sm">
              {["Samantha William", "Tony Soap", "Karen Hope", "Jordan Nico", "Nadila Adja"].map((name, idx) => (
                <li key={idx} className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#c1bbeb]" />
                    <span className="font-medium text-[#3f477c]">{name}</span>
                  </div>
                  <div className="flex gap-2 text-[#B0B3C7]">
                    <Phone size={16} />
                    <Mail size={16} />
                    <MessageSquare size={16} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <button className="text-[12px] text-[#4d44b5] font-semibold hover:underline">View More</button>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#343d75] text-sm">Messages</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B3C7]" size={16} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-3 py-1 h-8 text-xs border border-gray-300 rounded-full focus:outline-none"
                />
              </div>
            </div>
            <ul className="divide-y divide-gray-100 text-sm">
              {["Samantha William", "Tony Soap", "Karen Hope", "Jordan Nico", "Nadila Adja"].map((name, idx) => (
                <li key={idx} className="flex justify-between items-start gap-2 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#c1bbeb]" />
                    <div>
                      <span className="font-medium text-[#3f477c]">{name}</span>
                      <p className="text-xs text-[#a098ae]">Lorem ipsum dolor sit amet...</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#B0B3C7]">12:45 PM</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <button className="text-[12px] text-[#4d44b5] font-semibold hover:underline">View More</button>
            </div>
          </div>

          {/* Latest Activity Timeline */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h3 className="font-bold text-[#343d75] text-sm mb-4">Latest Activity</h3>
            <div className="relative pl-6 max-h-[400px] overflow-y-auto">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />
              {activities.map((activity, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute left-0 top-1">
                    <BsFillCircleFill className={`h-3 w-3 ${activity.color}`} />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm text-gray-600 leading-5">
                      <span className="font-semibold text-[#4d44b5]">{activity.name}</span> {activity.action}{" "}
                      <span className="text-[#4d44b5] font-medium">{activity.task}</span>{" "}
                      {activity.context && <span className="text-gray-600">{activity.context}</span>}
                    </p>
                    <p className="text-xs text-[#B0B3C7] mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
