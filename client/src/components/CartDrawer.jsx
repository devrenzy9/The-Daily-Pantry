import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, updateQuantity, removeItem, checkout } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const handleCheckout = async () => {
    setCheckingOut(true);
    try {
      const order = await checkout();
      setOrderSuccess(order.id);
      setTimeout(() => {
        onClose();
        setOrderSuccess(null);
      }, 2000);
    } catch (err) {
      alert('Checkout failed: ' + err.message);
    } finally {
      setCheckingOut(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Your Cart ({cart.totalItems} items)</h2>
          <button onClick={onClose} className="text-2xl text-gray-500 hover:text-red-500">&times;</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.items.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p className="text-lg">Your cart is empty</p>
              <p className="text-sm">Add some delicious items!</p>
            </div>
          ) : (
            cart.items.map(item => (
              <div key={item.id} className="flex gap-3 border-b pb-3">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 line-clamp-2">{item.name}</h4>
                  <p className="text-[#D17A5F] font-semibold">₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >−</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >+</button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700 text-sm"
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span className="font-bold">₹{cart.totalPrice.toFixed(2)}</span>
            </div>
            {orderSuccess ? (
              <div className="text-green-600 text-center py-2 font-medium">
                Order #{orderSuccess.slice(0, 8)} placed!
              </div>
            ) : (
              <>
                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="w-full bg-[#D17A5F] text-white py-3 rounded hover:bg-[#c56b4e] disabled:opacity-50 mb-2"
                >
                  {checkingOut ? 'Processing...' : 'Checkout'}
                </button>
                <button
                  onClick={onClose}
                  className="w-full border border-gray-300 py-2 rounded hover:bg-gray-100"
                >
                  Continue Shopping
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
