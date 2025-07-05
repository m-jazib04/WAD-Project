import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold">🍽️ FoodMaster</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Home</Link>
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/chefs" className="hover:underline">Chefs</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="/orders" className="hover:underline">Orders</Link>
          <Link to="/reservations" className="hover:underline">Reservations</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;