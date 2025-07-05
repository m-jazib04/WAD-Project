import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const bgImages = [
  '/assets/bg1.jpg',
  '/assets/bg2.jpg',
  '/assets/bg1.jpg',
  '/assets/bg4.jpg'
];

function Welcome() {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-400 opacity-50"></div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold drop-shadow mb-4 text-amber-900"
        >
          Welcome to FoodMaster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl drop-shadow mb-10 text-white"
        >
          Delicious meals delivered with love
        </motion.p>

        <motion.button
          onClick={() => navigate('/menu')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-lg shadow-lg"
        >
          Explore Menu
        </motion.button>
      </div>
    </div>
  );
}

export default Welcome;