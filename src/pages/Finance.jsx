import { Search, Bell, Settings, Users, User, DollarSign } from "lucide-react";
import './finance-custom.css';

export default function Finance() {
  return (
    <div className="min-h-screen bg-[#F6F7FB] flex flex-col px-2 sm:px-0">
      {/* Header Row */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 pb-4 px-2 sm:px-12">
        <h1 className="text-3xl font-extrabold text-[#232360] tracking-wide">Finance</h1>
        {/* Centered Search Bar */}
        <div className="flex-1 flex justify-center order-2 sm:order-none">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 w-full rounded-full bg-white border border-[#E0E0F0] text-base text-[#232360] focus:outline-none focus:ring-2 focus:ring-[#5B4FFF]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B0B3C7]" size={20} />
          </div>
        </div>
        {/* Top Right Icons & Profile */}
        <div className="flex items-center gap-4 order-3">
          <Bell className="text-[#B0B3C7]" size={22} />
          <Settings className="text-[#B0B3C7]" size={22} />
          <div className="flex items-center gap-2 bg-[#F6F7FB] px-3 py-1 rounded-full">
            <div className="w-9 h-9 bg-[#B0B3C7] rounded-full flex items-center justify-center text-white font-bold text-lg">FA</div>
            <div className="text-right">
              <div className="text-sm font-bold text-[#232360]">Nabila A.</div>
              <div className="text-xs text-[#B0B3C7]">Admin</div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Cards Row */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 px-2 sm:px-12 mb-8">
        {/* Total Students */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6 min-w-[260px]">
          <div className="flex items-center justify-center w-16 h-16 bg-[#5548C8] rounded-full">
            <Users size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <div className="text-sm text-[#B0B3C7] font-semibold mb-1">Total Students</div>
            <div className="text-2xl font-extrabold text-[#232360]">932</div>
            <div className="text-xs mt-1 font-semibold" style={{ color: '#23C686' }}>+10% than last month</div>
          </div>
        </div>
        {/* Total Teachers */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6 min-w-[260px]">
          <div className="flex items-center justify-center w-16 h-16 bg-[#FF6A3A] rounded-full">
            <User size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <div className="text-sm text-[#B0B3C7] font-semibold mb-1">Total Teachers</div>
            <div className="text-2xl font-extrabold text-[#232360]">754</div>
            <div className="text-xs mt-1 font-semibold" style={{ color: '#FF6A3A' }}>-0,5% than last month</div>
          </div>
        </div>
        {/* School Balance */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6 min-w-[260px]">
          <div className="flex items-center justify-center w-16 h-16 bg-[#FFD600] rounded-full">
            <DollarSign size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <div className="text-sm text-[#B0B3C7] font-semibold mb-1">School Balance</div>
            <div className="text-2xl font-extrabold text-[#232360]">$123,456</div>
            <div className="text-xs mt-1 font-semibold" style={{ color: '#23C686' }}>+23% than last month</div>
          </div>
          {/* Mini SVG Chart */}
          <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B4FFF" stopOpacity="0.18" />
                <stop offset="1" stopColor="#5B4FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 30 Q 15 10, 30 20 T 60 15 T 90 30" stroke="#5B4FFF" strokeWidth="3" fill="none" />
            <path d="M0 30 Q 15 10, 30 20 T 60 15 T 90 30 V40 H0 Z" fill="url(#chartGradient)" />
          </svg>
        </div>
      </div>
      {/* Balance Analytics Card */}
      <div className="w-full px-2 sm:px-12 mb-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <div className="text-xl font-extrabold text-[#232360]">Balance Analytics</div>
            <div className="flex items-center gap-8">
              {/* Legend */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFD600] inline-block"></span>
                  <span className="text-[#B0B3C7] text-sm">Expense</span>
                  <span className="font-bold text-[#232360] ml-1">1.245</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF6A3A] inline-block"></span>
                  <span className="text-[#B0B3C7] text-sm">Income</span>
                  <span className="font-bold text-[#232360] ml-1">1.356</span>
                </div>
              </div>
              {/* Month Dropdown */}
              <button className="flex items-center gap-2 border-2 border-[#5548C8] rounded-full px-8 py-2 text-[#232360] font-semibold text-base bg-white">
                Month <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#5548C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          {/* Chart SVG */}
          <div className="w-full overflow-x-auto">
            <svg width="900" height="260" viewBox="0 0 900 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-64">
              {/* Y grid lines */}
              {[0, 1, 2, 3, 4, 5].map(i => (
                <line key={i} x1="60" x2="860" y1={40 + i*40} y2={40 + i*40} stroke="#E0E0F0" strokeWidth="1" />
              ))}
              {/* X grid lines */}
              {[...Array(12)].map((_, i) => (
                <line key={i} y1="40" y2="240" x1={60 + i*72} x2={60 + i*72} stroke="#E0E0F0" strokeWidth="1" />
              ))}
              {/* Y axis labels */}
              {[100, 75, 50, 25, 0].map((v, i) => (
                <text key={v} x="30" y={48 + i*40} fontSize="14" fill="#B0B3C7" fontWeight="600">{v}</text>
              ))}
              {/* X axis labels */}
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
                <text key={m} x={60 + i*72} y="260" fontSize="14" fill="#B0B3C7" fontWeight="600" textAnchor="middle">{m}</text>
              ))}
              {/* Expense (yellow) area and line - smooth Bezier */}
              <defs>
                <linearGradient id="expArea" x1="0" y1="0" x2="0" y2="260" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD600" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#FFD600" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="incArea" x1="0" y1="0" x2="0" y2="260" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF6A3A" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#FF6A3A" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Expense area (soft, smooth) */}
              <path d="M60 240 C 120 80, 180 120, 240 160 S 360 200, 420 160 S 600 200, 660 120 S 780 120, 860 180 V240 H60 Z" fill="url(#expArea)" />
              {/* Expense line (yellow) */}
              <path d="M60 240 C 120 80, 180 120, 240 160 S 360 200, 420 160 S 600 200, 660 120 S 780 120, 860 180" stroke="#FFD600" strokeWidth="3" fill="none" />
              {/* Income area (soft, smooth) */}
              <path d="M60 180 C 120 120, 180 160, 240 120 S 360 120, 420 200 S 600 80, 660 200 S 780 200, 860 100 V240 H60 Z" fill="url(#incArea)" />
              {/* Income line (orange) */}
              <path d="M60 180 C 120 120, 180 160, 240 120 S 360 120, 420 200 S 600 80, 660 200 S 780 200, 860 100" stroke="#FF6A3A" strokeWidth="3" fill="none" />
              {/* Highlighted point for July */}
              <circle cx="420" cy="200" r="10" fill="#fff" stroke="#FF6A3A" strokeWidth="4" />
              <line x1="420" x2="420" y1="200" y2="70" stroke="#B0B3C7" strokeDasharray="6 6" strokeWidth="2" />
              {/* Tooltip with pointer */}
              <g>
                {/* Tooltip box */}
                <rect x="370" y="20" width="100" height="48" rx="12" fill="#5548C8" />
                {/* Pointer triangle */}
                <polygon points="420,68 430,60 410,60" fill="#5548C8" />
                {/* Value */}
                <text x="420" y="45" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fff">$1,345</text>
                {/* Date */}
                <text x="420" y="62" textAnchor="middle" fontSize="14" fill="#fff" opacity="0.9">July 2020</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* Pixel-perfect two-card section using flex */}
      <div className="w-full flex flex-col md:flex-row gap-8 px-2 sm:px-12 pb-12">
        {/* Unpaid Student Intuition */}
        <div className="unpaid-card bg-white rounded-2xl shadow-lg px-10 py-8 flex flex-col flex-1 max-w-[700px] min-w-[340px]">
          <div className="text-xl font-extrabold text-[#232360] mb-6">Unpaid Student Intuition</div>
          <div className="flex flex-col">
            {["Samantha W.", "Tony Soap", "Jordan Nico", "Karen Hope", "Nadila Adja"].map((name, i) => (
              <div key={i} className="unpaid-row flex items-center py-5 border-b border-[#F0F0F0] last:border-b-0">
                {/* Avatar */}
                <div className="flex items-center justify-center w-14 mr-6">
                  <div className="w-14 h-14 rounded-full bg-[#C7C9F9]"></div>
                </div>
                {/* Name */}
                <div className="font-bold text-[#232360] text-base w-40 whitespace-nowrap truncate mr-6">{name}</div>
                {/* ID */}
                <div className="flex items-center gap-1 w-36 whitespace-nowrap truncate mr-6">
                  <span className="text-[#B0B3C7] text-sm font-medium">ID</span>
                  <span className="text-[#5548C8] font-bold text-sm">123456789</span>
                </div>
                {/* Class */}
                <div className="flex items-center gap-2 w-36 whitespace-nowrap truncate mr-6">
                  <span className="w-8 h-8 rounded-full bg-[#FF6A3A] flex items-center justify-center">
                    <User size={16} className="text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-[#B0B3C7] text-sm font-medium">Class</span>
                  <span className="font-bold text-[#232360] text-sm">VII A</span>
                </div>
                {/* Amount */}
                <div className="font-bold text-[#232360] text-base w-28 text-right whitespace-nowrap truncate mr-6">$ 50,036</div>
                {/* Menu */}
                <div className="text-[#B0B3C7] text-2xl flex items-center justify-end w-8">...</div>
              </div>
            ))}
          </div>
          {/* Footer and Pagination */}
          <div className="flex items-center justify-between mt-8">
            <span className="text-[#B0B3C7] text-xs">Showing <span className='font-bold text-[#5548C8]'>1-5</span> from <span className='font-bold text-[#5548C8]'>100</span> data</span>
            <div className="flex gap-2 items-center">
              <button className="unpaid-page-btn">&#60;</button>
              <button className="unpaid-page-btn active">1</button>
              <button className="unpaid-page-btn">2</button>
              <button className="unpaid-page-btn">3</button>
              <button className="unpaid-page-btn">&#62;</button>
            </div>
          </div>
        </div>
        {/* School Expense */}
        <div className="unpaid-card bg-white rounded-2xl shadow-lg px-10 py-8 flex flex-col flex-1 max-w-[700px] min-w-[340px]">
          <div className="text-xl font-extrabold text-[#232360] mb-6">School Expense</div>
          <div className="flex flex-col">
            {[
              {status: "Complete", color: "#23C686"},
              {status: "Pending", color: "#B0B3C7"},
              {status: "Canceled", color: "#FF6A3A"},
              {status: "Complete", color: "#23C686"},
              {status: "Complete", color: "#23C686"},
              {status: "Complete", color: "#23C686"},
            ].map((item, i) => (
              <div key={i} className="unpaid-row flex items-center py-5 border-b border-[#F0F0F0] last:border-b-0">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 mr-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF6A3A] flex items-center justify-center">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                {/* ID and Date */}
                <div className="flex flex-col w-44 whitespace-nowrap truncate mr-6">
                  <span className="font-bold text-[#232360] text-sm">#123456789</span>
                  <span className="text-[#B0B3C7] text-xs">2 March 2021, 13:45</span>
                </div>
                {/* Amount */}
                <div className="font-bold text-[#232360] text-base w-28 text-right whitespace-nowrap truncate mr-6">$ 50,036</div>
                {/* Status */}
                <div className="font-bold text-right w-20" style={{color: item.color, fontSize: '14px'}}>{item.status}</div>
              </div>
            ))}
          </div>
          {/* Footer and Pagination */}
          <div className="flex items-center justify-between mt-8">
            <span className="text-[#B0B3C7] text-xs">Showing <span className='font-bold text-[#5548C8]'>1-5</span> from <span className='font-bold text-[#5548C8]'>100</span> data</span>
            <div className="flex gap-2 items-center">
              <button className="unpaid-page-btn">&#60;</button>
              <button className="unpaid-page-btn active">1</button>
              <button className="unpaid-page-btn">2</button>
              <button className="unpaid-page-btn">3</button>
              <button className="unpaid-page-btn">&#62;</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
