import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'vv_cart_items';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cartItems]);

  const addToCart = (item, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    );
  };

  const getItemQuantity = (itemId) => {
    const found = cartItems.find((i) => i.id === itemId);
    return found ? found.quantity : 0;
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not clear cart storage', e);
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Demo GST calculation (5% standard restaurant GST in India)
  const gstAmount = Math.round(cartSubtotal * 0.05);
  // Demo packaging charge if subtotal > 0
  const packagingFee = cartSubtotal > 0 ? 15 : 0;
  const grandTotal = cartSubtotal > 0 ? cartSubtotal + gstAmount + packagingFee : 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        gstAmount,
        packagingFee,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

