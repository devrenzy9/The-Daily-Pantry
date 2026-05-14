import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api } from '../utilities/api';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [], totalItems: 0, totalPrice: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCart()
      .then(data => setCart(data))
      .catch(() => setCart({ items: [], totalItems: 0, totalPrice: 0 }))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = useCallback(async (productId, quantity = 1) => {
    const updatedCart = await api.addToCart(productId, quantity);
    setCart(updatedCart);
  }, []);

  const updateQuantity = useCallback(async (itemId, quantity) => {
    const updatedCart = await api.updateCartItem(itemId, quantity);
    setCart(updatedCart);
  }, []);

  const removeItem = useCallback(async (itemId) => {
    const updatedCart = await api.removeFromCart(itemId);
    setCart(updatedCart);
  }, []);

  const clearCart = useCallback(async () => {
    const emptyCart = await api.clearCart();
    setCart(emptyCart);
  }, []);

  const checkout = useCallback(async () => {
    const order = await api.placeOrder();
    setCart({ items: [], totalItems: 0, totalPrice: 0 });
    return order;
  }, []);

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      checkout,
      itemCount: cart.totalItems,
      totalPrice: cart.totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
