import React from 'react';

function Contact() {
  return (
    <div className="w-full h-screen relative bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/assets/contactbg.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-6 max-w-xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">📞 Contact Us</h2>
        <p className="mb-2">📍 Address: FoodMaster HQ, Lahore, Pakistan</p>
        <p className="mb-2">📞 Phone: +92 300 1234567</p>
        <p className="mb-2">📧 Email: contact@foodmaster.pk</p>
        <p className="mt-4">We’re here to serve you 24/7! Feel free to reach out for any questions or reservations.</p>
      </div>
    </div>
  );
}

export default Contact;