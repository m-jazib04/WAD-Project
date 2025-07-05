import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Menu from './components/Menu.jsx';
import Orders from './components/Orders.jsx';
import Reservations from './components/Reservations.jsx';
import Footer from './components/Footer.jsx';
import Cart from './components/Cart.jsx';
import ThankYou from './components/ThankYou.jsx';
import Welcome from './components/Welcome.jsx';
import Chefs from './components/Chefs.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [cartMessage, setCartMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = (item) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(i => i.name === item.name);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].qty += 1;
        setCartMessage(`${item.name} quantity updated in cart.`);
        return updated;
      } else {
        setCartMessage(`${item.name} added to cart.`);
        return [...prev, { ...item, qty: 1 }];
      }
    });
    setTimeout(() => setCartMessage(''), 3000);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const updateQuantity = (index, qty) => {
    setCart(prev => {
      const updated = [...prev];
      updated[index].qty = qty;
      return updated;
    });
  };

  const placeOrder = () => {
    const orderTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setOrders(prev => [...prev, ...cart]);
    setRevenue(prev => prev + orderTotal);
    setCart([]);
    navigate('/thank-you');
  };

  const addReservation = (name, time, table) => {
    setReservations(prev => [...prev, { name, time, table }]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname !== '/' && <Navbar />}
      <main className={location.pathname === '/' ? '' : 'pt-20 flex-grow container mx-auto p-4 space-y-4'}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                totalOrders={orders.length}
                totalReservations={reservations.length}
                availableTables={20 - reservations.length}
                revenue={revenue}
              />
            }
          />
          <Route path="/menu" element={<Menu addToCart={addToCart} showAlert={true} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                placeOrder={placeOrder}
                cartMessage={cartMessage}
              />
            }
          />
          <Route path="/orders" element={<Orders orders={orders} />} />
          <Route path="/reservations" element={<Reservations reservations={reservations} addReservation={addReservation} />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;