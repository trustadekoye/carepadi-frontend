import { useState } from "react";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

const AppointmentSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  // Generate available time slots
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  // Handle booking submission
  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Appointment booked for ${selectedDate.toDateString()} at ${selectedTime}`
      );
    } else {
      alert("Please select both date and time");
    }
  };

  // Calendar navigation
  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  // Generate calendar days
  const generateCalendar = () => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    // Add empty cells for days before the first day of month
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();
      const isAvailable = [3, 4, 6, 7, 8, 10, 14].includes(day);

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors
            ${isSelected ? "bg-blue-500 text-white" : ""}
            ${isToday && !isSelected ? "border-b border-gray-400" : ""}
            ${isAvailable && !isSelected ? "bg-blue-100 text-blue-800" : ""}
            ${!isAvailable && !isSelected ? "text-gray-700" : ""}
            hover:bg-blue-200 disabled:hover:bg-transparent disabled:text-gray-400
          `}
          disabled={!isAvailable && !isSelected}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6 gap-8">
      {/* Left Column - Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-normal text-gray-800 mb-1">
          Choose a Specialist.
        </h2>
        <h2 className="text-3xl font-normal text-gray-800 mb-4">
          Pick a Time. Done
        </h2>
        <p className="text-lg text-gray-600 mb-6">You specialist is waiting</p>
      </div>

      {/* Right Column - Custom Date & Time Picker */}
      <div className="md:w-1/2 p-6 rounded-lg">
        <h3 className="text-2xl font-normal text-gray-800 mb-6">
          Select a Date & Time
        </h3>

        {/* Custom Calendar */}
        <div className="p-4 mb-6">
          {/* Month Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevMonth}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <h4 className="text-lg font-normal text-gray-800">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h4>
            <button
              onClick={nextMonth}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-normal text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>
        </div>

        {/* Time Picker Section */}
        {selectedDate && (
          <div className="mb-6">
            <h4 className="text-md font-normal text-gray-700 mb-3">
              Available Times
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 text-sm rounded-md transition-colors ${
                    selectedTime === time
                      ? "bg-[#2C3B8B] text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Timezone Selector */}
        <div className="flex items-center mb-6 text-gray-600 text-sm">
          <span className="mr-2">Time zone</span>
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <Globe size={16} className="mr-1" />
            <span>West Africa Time (14:50)</span>
            <ChevronRight size={16} className="transform rotate-90 ml-1" />
          </button>
        </div>

        {/* Book Button */}
        <button
          className={`w-full font-medium py-3 px-4 rounded-md transition-colors ${
            selectedDate && selectedTime
              ? "bg-[#2C3B8B] hover:bg-[#2C3B8B]/90 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleBookAppointment}
          disabled={!selectedDate || !selectedTime}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentSection;
