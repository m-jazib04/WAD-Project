import React from 'react';

function Cart({ cartItems, removeFromCart, updateQuantity, placeOrder, cartMessage }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      className="w-full min-h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url('/assets/bg-cart.jpg')" }} // Replace with your own image path
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">🛒 Your Cart</h2>

        {/* Show add-to-cart confirmation message if available */}
        {cartMessage && (
          <div className="mb-4 text-green-600 font-semibold text-center">
            ✅ {cartMessage}
          </div>
        )}

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">No items in cart.</p>
        ) : (
          <>
            <ul className="space-y-3">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-2">
                  <span>{item.name} – PKR {item.price} × </span>
                  <input
                    type="number"
                    min="1"
                    className="w-16 px-1 border rounded mx-2"
                    value={item.qty}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                  />
                  <span>= PKR {item.price * item.qty}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="ml-4 text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xl font-bold text-right">Total Bill: PKR {total}</div>
            <div className="text-center">
              <button
                onClick={placeOrder}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                ✅ Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;