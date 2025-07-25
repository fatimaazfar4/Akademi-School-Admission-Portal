import { Calendar as CalendarIcon, Clock, ChevronDown, Plus, Bell, Settings, Search } from "lucide-react";
import '../components/calendar-custom.css';

const scheduleEvents = [
  {
    id: 1,
    title: "Basic Algorithm",
    subtitle: "Algorithm",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-[#5B4FFF]",
    bar: "bg-[#5B4FFF]"
  },
  {
    id: 2,
    title: "Basic Art",
    subtitle: "Art",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-[#FF7A00]",
    bar: "bg-[#FF7A00]"
  },
  {
    id: 3,
    title: "HTML & CSS Class",
    subtitle: "Programming",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-[#FFD600]",
    bar: "bg-[#FFD600]"
  },
  {
    id: 4,
    title: "Simple Past Tense",
    subtitle: "English",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    color: "bg-[#3D56D6]",
    bar: "bg-[#3D56D6]"
  }
];

const calendarDays = [
  // Week 1
  { day: 31, faded: true }, { day: 1 }, { day: 2, dots: ["#FFD600", "#5B4FFF", "#FF7A00"] }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6, orangeBg: true, text: "7+", textColor: "#fff", dots: ["#5B4FFF", "#5B4FFF", "#5B4FFF"] },
  // Week 2
  { day: 7 }, { day: 8 }, { day: 9 }, { day: 10, selected: true, text: "Karen, 2+", bar: "#FFD600" }, { day: 11 }, { day: 12 }, { day: 13 },
  // Week 3
  { day: 14 }, { day: 15, bar: "#5B4FFF", dots: ["#5B4FFF", "#5B4FFF"], text: "2+" }, { day: 16 }, { day: 17 }, { day: 18, bar: "#FF7A00", text: "Tony, 2+" }, { day: 19 }, { day: 20, yellowBorder: true, dots: ["#5B4FFF", "#FF7A00", "#FFD600"] },
  // Week 4
  { day: 21 }, { day: 22 }, { day: 23 }, { day: 24, dots: ["#FFD600", "#5B4FFF", "#FF7A00"] }, { day: 25 }, { day: 26 }, { day: 27 },
  // Week 5
  { day: 28 }, { day: 29, bar: "#FFD600", text: "Johnny" }, { day: 30 }, { day: 1, faded: true }, { day: 2, faded: true }, { day: 3, faded: true }, { day: 4, faded: true },
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Event() {
  return (
    <div className="w-full min-h-screen bg-[#F6F7FB] flex flex-col">
      {/* Custom Events Header Row */}
      <div className="flex items-center justify-between px-12 pt-8 pb-4">
        <h1 className="text-3xl font-extrabold text-[#232360] tracking-wide">Events</h1>
        <div className="flex items-center gap-6">
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
          <div className="flex items-center gap-2 bg-[#F6F7FB] px-3 py-1 rounded-full">
            <div className="w-9 h-9 bg-[#B0B3C7] rounded-full flex items-center justify-center text-white font-bold text-lg">FA</div>
            <div className="text-right">
              <div className="text-sm font-bold text-[#232360]">Nabila A.</div>
              <div className="text-xs text-[#B0B3C7]">Admin</div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content Row */}
      <div className="flex justify-center items-start gap-8 w-full pb-8">
        <div className="flex flex-col gap-6">
          {/* Calendar Panel */}
          <div className="akademi-calendar-panel" style={{ width: '720px' }}>
            <div className="akademi-calendar-content">
              {/* Calendar Header Row as 7-column grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '0',
                width: '100%'
              }}>
                <span className="akademi-calendar-title" style={{ gridColumn: '1/2', justifySelf: 'start' }}>Calendar</span>
                <div style={{ gridColumn: '2/3' }}></div>
                <button className="akademi-calendar-dropdown" style={{ gridColumn: '3/4' }}>
                  January <ChevronDown size={18} />
                </button>
                <button className="akademi-calendar-dropdown" style={{ gridColumn: '4/5' }}>
                  2021 <ChevronDown size={18} />
                </button>
                <div style={{ gridColumn: '5/7' }}></div>
                <button className="akademi-calendar-btn" style={{ gridColumn: '7/8', justifySelf: 'end' }}>
                  <Plus size={18} /> New Student
                </button>
              </div>
              {/* Days of Week */}
              <div className="akademi-calendar-days-row">
                {daysOfWeek.map((d) => (
                  <div key={d} className="akademi-calendar-day-label">{d}</div>
                ))}
              </div>
              {/* Calendar Grid */}
              <div className="akademi-calendar-grid">
                {calendarDays.map((date, idx) => (
                  <div
                    key={idx}
                    className={
                      `akademi-calendar-cell` +
                      (date.selected ? ' selected' : '') +
                      (date.faded ? ' faded' : '') +
                      (date.orangeBg ? ' orange-bg' : '') +
                      (date.yellowBorder ? ' yellow-border' : '')
                    }
                  >
                    {/* Vertical bar for some days */}
                    {date.bar && <div className="akademi-bar" style={{ background: date.bar }}></div>}
                    {/* Day number */}
                    <div className="z-10" style={{ color: date.textColor || undefined }}>{date.day}</div>
                    {/* Text overlay (e.g. Karen, 2+) */}
                    {date.text && <div className="akademi-cell-text z-10" style={{ color: date.textColor || undefined }}>{date.text}</div>}
                    {/* Dots for events */}
                    {date.dots && (
                      <div className="akademi-dot-row z-10">
                        {date.dots.map((dot, i) => (
                          <span key={i} className="akademi-dot" style={{ background: dot }}></span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Schedule Details Panel */}
        <div className="w-[260px] bg-white rounded-2xl shadow p-6 mt-2 flex flex-col gap-6">
          <div className="mb-2">
            <h2 className="font-bold text-xl text-[#232360] mb-1">Schedule Details</h2>
            <div className="text-[#8B8FA9] text-sm font-medium mb-4">Thursday, 10th April, 2021</div>
          </div>
          <div className="flex flex-col gap-6">
            {scheduleEvents.map((event, idx) => (
              <div
                key={event.id}
                className="flex items-center bg-[#F6F7FB] rounded-2xl p-6 relative min-h-[140px]"
              >
                {/* Colored Bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-4 rounded-l-2xl ${[
                  "bg-[#5548C8]", "bg-[#FF7A00]", "bg-[#FFD600]", "bg-[#5548C8]"
                ][idx]}`}></div>
                <div className="pl-6 flex-1 flex flex-col justify-center gap-2">
                  <div className="font-extrabold text-lg text-[#232360] leading-tight">{event.title}</div>
                  <div className="text-[#B0B3C7] text-base mb-2">{event.subtitle}</div>
                  <div className="flex items-center gap-3 text-base text-[#B0B3C7]">
                    <div className="flex items-center gap-2">
                      <CalendarIcon size={20} className="text-[#FF6A3A]" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-base text-[#B0B3C7]">
                    <div className="flex items-center gap-2">
                      <Clock size={20} className="text-[#FFD600]" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                {/* Large faded circle */}
                <div className="ml-4 flex-shrink-0 flex items-center justify-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[#C7C9F9] opacity-60 flex items-center justify-center"></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-7 py-3 rounded-xl bg-[#5B4FFF] text-white font-semibold text-base hover:bg-[#4A3FE8] transition">View More</button>
        </div>
      </div>
    </div>
  );
}
