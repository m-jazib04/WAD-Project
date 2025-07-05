import React from 'react';

const chefs = [
  { name: 'Chef Ahmed', bio: 'Expert in Desi cuisine with 15 years of experience.', image: '/assets/chef1.jpg', rating: 5 },
  { name: 'Chef Amir', bio: 'Master of desserts and creative dishes.', image: '/assets/chef2.jpg', rating: 4 },
  { name: 'Chef Bilal', bio: 'Fast food specialist and kitchen manager.', image: '/assets/chef3.jpg', rating: 4 },
  { name: 'Chef Saim', bio: 'Passionate about health-conscious meals.', image: '/assets/chef4.webp', rating: 5 },
  { name: 'Chef Usman', bio: 'Internationally trained in Italian and French cuisine.', image: '/assets/chef5.jpg', rating: 5 }
];

function Chefs() {
  return (
    <div
      className="w-full min-h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "/assets/chefbg.jpg" }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6 max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">👨‍🍳 Our Chefs</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center bg-white rounded-lg shadow p-4">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-3"
              />
              <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
              <p className="text-gray-600 mb-2">{chef.bio}</p>
              <div className="text-yellow-400">
                {'★'.repeat(chef.rating)}{'☆'.repeat(5 - chef.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chefs;
