const menuItems = [
  "Dashboard",
  "Students",
  "Teachers",
  "Event",
  "Finance",
  "Food",
  "User",
  "Chat"
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#5D3FD3] text-white p-6 flex flex-col">
      <div className="text-2xl font-bold mb-8">Akademi</div>
      
      <nav className="flex-1">
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="block px-4 py-2 rounded hover:bg-white/10 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/20 pt-4">
        <p className="text-sm font-medium">Latest Activity</p>
      </div>
    </aside>
  );
}