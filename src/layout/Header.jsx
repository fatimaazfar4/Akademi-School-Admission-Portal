export default function Header() {
  return (
    <header className="w-full bg-white border-b px-6 py-4 shadow-sm sticky top-0 z-10 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">Welcome to Akademi</h2>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Admin</div>
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Profile"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
