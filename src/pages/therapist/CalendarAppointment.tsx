import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { vi } from "date-fns/locale";

// Định nghĩa kiểu cho appointments
type Appointment = {
  time: string;
  title: string;
};

const appointments: Record<string, Appointment[]> = {
  "2025-02-10": [
    { time: "08:00", title: "Họp với đối tác A" },
    { time: "14:00", title: "Gặp khách hàng B" },
  ],
  "2025-02-15": [{ time: "10:00", title: "Khám sức khỏe định kỳ" }],
  "2025-02-20": [
    { time: "09:00", title: "Cuộc họp nội bộ" },
    { time: "15:30", title: "Hẹn gặp CEO" },
  ],
};

const CalendarAppointment = () => {
  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const daysInMonth = eachDayOfInterval({ start, end });

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="bg-[#EDEBDF] min-h-screen p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        📆 Lịch Hẹn Tháng {format(today, "MM/yyyy")}
      </h2>

      {/* Hiển thị Lịch Tháng */}
      <div className="grid grid-cols-7 gap-2 bg-white p-4 rounded-lg shadow-lg">
        {daysInMonth.map((date) => {
          const dateString = format(date, "yyyy-MM-dd");
          const isToday = dateString === format(today, "yyyy-MM-dd");

          return (
            <div
              key={dateString}
              className={`p-4 text-center rounded-lg cursor-pointer transition ${
                selectedDate === dateString
                  ? "bg-blue-500 text-white"
                  : isToday
                  ? "bg-green-300"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedDate(dateString)}
            >
              {format(date, "dd")}
            </div>
          );
        })}
      </div>

      {/* Hiển thị Lịch Hẹn Của Ngày Được Chọn */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">
          📅 Lịch hẹn ngày {selectedDate || "..."}
        </h3>
        {selectedDate && appointments[selectedDate] ? (
          <ul className="mt-3">
            {appointments[selectedDate].map((appt, index) => (
              <li key={index} className="p-3 border-b border-gray-200">
                🕒 {appt.time} - {appt.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-3">Không có lịch hẹn nào.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarAppointment;
