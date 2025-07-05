import React, { useState } from 'react';

function Reservations({ reservations, addReservation }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tableCounter, setTableCounter] = useState(1);

  const formatTimeToAMPM = (timeStr) => {
    const [hourStr, minute] = timeStr.split(":");
    let hour = parseInt(hourStr);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && time) {
      const tableNumber = ((tableCounter - 1) % 20) + 1;
      const formattedTime = `${date} at ${formatTimeToAMPM(time)}`;
      addReservation(name, formattedTime, tableNumber);
      setTableCounter(tableCounter + 1);
      setName('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div
      className="w-full min-h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/bg4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-8 w-full max-w-md mx-auto text-center flex flex-col justify-center items-center h-full animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300">📅 Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="date"
            className="w-full p-2 border rounded text-black"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            className="w-full p-2 border rounded text-black"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Reserve Table
          </button>
        </form>

        {reservations.length > 0 && (
          <div className="mt-6 text-left w-full">
            <h3 className="text-xl font-semibold mb-2 text-white">🧾 Your Reservations</h3>
            <ul className="list-disc pl-5 text-white">
              {reservations.map((res, index) => (
                <li key={index}>{res.name} - {res.time} - <strong>Table #{res.table}</strong></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservations;