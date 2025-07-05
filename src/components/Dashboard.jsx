import React from 'react';

function Dashboard({ totalOrders, totalReservations, availableTables, revenue }) {
  const stats = [
    { label: 'Total Orders Today', value: totalOrders },
    { label: 'Reservations Today', value: totalReservations },
    { label: 'Available Tables', value: availableTables },
    { label: 'Revenue (PKR)', value: revenue },
  ];

  return (
    <div
      className="w-full min-h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">📊 Restaurant Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow p-4">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
