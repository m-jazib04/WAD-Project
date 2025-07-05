import React from 'react';

function Footer() {
  return (
    <footer className="bg-orange-500 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} FoodMaster. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
