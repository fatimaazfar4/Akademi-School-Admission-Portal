import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-custom.css"; // You’ll create custom styles here



export default function SchoolCalendar() {
  return (
    <div className="rounded-md overflow-hidden">
      <Calendar
        defaultValue={new Date(2021, 2, 1)} // March 2021 (Month is 0-indexed)
        tileClassName={({ date }) => {
          if (
            date.getDate() === 8 ||
            date.getDate() === 20 ||
            date.getDate() === 23
          ) {
            return "highlight";
          }
        }}
      />
    </div>
  );
}
