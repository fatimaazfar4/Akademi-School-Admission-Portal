import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isEventPage = location.pathname === "/event";
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        {!isEventPage && <Header />}
        <main className="flex-1 px-6 py-4 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
