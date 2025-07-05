import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="text-center p-10 bg-white shadow rounded">
      <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h2>
      <p className="text-gray-700">Your order has been placed successfully.</p>
      <Link to="/menu" className="inline-block mt-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
        Back to Menu
      </Link>
    </div>
  );
}

export default ThankYou;