import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import Teachers from "./pages/Teacher";
import AddTeacher from "./pages/AddTeacher";
import Finance from "./pages/Finance";
import Chat from "./pages/Chat";
import LatestActivity from "./pages/LatestActivity";
import Food from "./pages/Food";
import User from "./pages/User";
import Event from "./pages/Event";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:name" element={<StudentDetails />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="finance" element={<Finance />} />
          <Route path="chat" element={<Chat />} />
          <Route path="latest-activity" element={<LatestActivity />} />
          <Route path="food" element={<Food />} />
          <Route path="user" element={<User />} />
          <Route path="event" element={<Event />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
