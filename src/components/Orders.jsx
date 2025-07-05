import React from 'react';

function Orders({ orders }) {
  return (
    <div className="relative bg-cover bg-center min-h-screen text-white" style={{ backgroundImage: "url('/assets/orderbg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-6 max-w-2xl mx-auto animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300">🧾 Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-white">No orders placed yet.</p>
        ) : (
          <ul className="space-y-2">
            {orders.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-1">
                <span>{item.name} (x{item.qty})</span>
                <span>PKR {item.qty * item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Orders;