import React, { useState } from 'react';

const categories = [
  {
    title: 'Desi Food',
    items: [
      { name: 'Biryani', price: 250, image: '/assets/biryani.avif' },
      { name: 'Karahi', price: 800, image: '/assets/karahi.webp' },
      { name: 'Haleem', price: 200, image: '/assets/haleem.jpeg' },
      { name: 'Nihari', price: 300, image: '/assets/nihari.jpeg' },
      { name: 'Paya', price: 350, image: '/assets/paya.jpg' },
      { name: 'Chapli Kebab', price: 150, image: '/assets/chaplikabab.webp' },
      { name: 'Seekh Kebab', price: 180, image: '/assets/seekhkabab.webp' },
      { name: 'Qeema', price: 250, image: '/assets/qeema.jpg' },
      { name: 'Daal Chawal', price: 100, image: '/assets/daalchawal.jpg' },
      { name: 'Chicken Handi', price: 500, image: '/assets/chickenkarahi.jpeg' },
    ],
  },
  {
    title: 'Fast Food',
    items: [
      { name: 'Zinger Burger', price: 450, image: '/assets/zinger.png' },
      { name: 'Pizza', price: 800, image: '/assets/pizza.jpg' },
      { name: 'Fries', price: 120, image: '/assets/fries.jpg' },
      { name: 'Cheese Sandwich', price: 180, image: '/assets/sandwich.jpg' },
      { name: 'Hot Dog', price: 200, image: '/assets/hotdog.jpg' },
      { name: 'Fried Chicken', price: 400, image: '/assets/friedchicken.jpg' },
      { name: 'Chicken Nuggets', price: 300, image: '/assets/nuggets.jpg' },
      { name: 'Taco', price: 250, image: '/assets/taco.jpg' },
      { name: 'Pasta', price: 350, image: '/assets/pasta.webp' },
      { name: 'Wraps', price: 220, image: '/assets/wraps.jpg' },
    ],
  },
  {
    title: 'Drinks',
    items: [
      { name: 'Coca-Cola', price: 60, image: '/assets/cocacola.webp' },
      { name: 'Pepsi', price: 60, image: '/assets/pepsi.jpg' },
      { name: '7up', price: 60, image: '/assets/7up.jpg' },
      { name: 'Sprite', price: 60, image: '/assets/sprite.jpeg' },
      { name: 'Fanta', price: 60, image: '/assets/fanta.jpg' },
      { name: 'Water Bottle', price: 40, image: '/assets/waterbottle.webp' },
      { name: 'Juice (Apple)', price: 100, image: '/assets/applejuice.avif' },
      { name: 'Juice (Mango)', price: 100, image: '/assets/mangojuice.jpg' },
      { name: 'Energy Drink', price: 150, image: '/assets/energydrink.jpg' },
      { name: 'Milkshake', price: 180, image: '/assets/milkshake.jpg' },
    ],
  },
  {
    title: 'Ice Cream',
    items: [
      { name: 'Vanilla', price: 100, image: '/assets/vanilla.jpg' },
      { name: 'Chocolate', price: 120, image: '/assets/choclate.jpg' },
      { name: 'Strawberry', price: 120, image: '/assets/strawberry.jpg' },
      { name: 'Pistachio', price: 130, image: '/assets/Pistachio.jpg' },
      { name: 'Mango', price: 110, image: '/assets/mango.jpg' },
      { name: 'Kulfa', price: 90, image: '/assets/kulfa.jpg' },
      { name: 'Caramel', price: 130, image: '/assets/caramel.jpg' },
      { name: 'Coffee', price: 140, image: '/assets/coffee.jpeg' },
      { name: 'Oreo', price: 150, image: '/assets/oreo.jpeg' },
      { name: 'Fruit Mix', price: 160, image: '/assets/fruitmix.webp' },
    ],
  },
];

function Menu({ addToCart }) {
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems((prev) => [...prev, item.name]);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-12 px-4"
      style={{ backgroundImage: "url('/assets/menubg.jpg')" }} // Replace with your own background image path
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">🍴 Our Menu</h2>

        {categories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold text-white mt-6 mb-2">{cat.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.items.map((item, index) => {
                const alreadyAdded = addedItems.includes(item.name);
                return (
                  <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md text-black">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-2" />
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    <p className="text-gray-600">PKR {item.price}</p>
                    {alreadyAdded ? (
                      <button
                        disabled
                        className="mt-2 bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed"
                      >
                        Added
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-2 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;