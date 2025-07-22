import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 border-b border-gray-200 font-poppins">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
        {/* Navigation links */}
        <nav className="space-x-6 text-sm text-gray-600 hidden md:flex">
          <a href="#" className="hover:text-[#5D3FD3]">Home</a>
          <a href="#" className="hover:text-[#5D3FD3]">Admissions</a>
          <a href="#" className="hover:text-[#5D3FD3]">Settings</a>
        </nav>

        {/* Bell icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={20} className="text-gray-600" />
          {/* Optional notification dot */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings size={20} className="text-gray-600" />
        </button>

        {/* Profile image/avatar */}
        <div className="w-9 h-9 rounded-full bg-[#E0E2FF] flex items-center justify-center text-[#5D3FD3] font-semibold">
          FA
        </div>
      </div>
    </header>
  );
}
