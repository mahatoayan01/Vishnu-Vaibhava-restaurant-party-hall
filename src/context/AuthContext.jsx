import React, { createContext, useContext, useState, useEffect } from 'react';
import { sampleOrders, sampleTransactions } from '../data/sampleOrders';

const AuthContext = createContext();

const AUTH_KEY = 'vv_owner_auth';
const ORDERS_KEY = 'vv_orders_demo';
const TXNS_KEY = 'vv_transactions_demo';

export const DEMO_CREDENTIALS = {
  email: 'owner@demo.com',
  password: 'demo1234',
  role: 'Restaurant & Hall Owner',
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_KEY);
      return saved === 'true';
    } catch (e) {
      console.warn('Could not read auth state from localStorage', e);
      return false;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(ORDERS_KEY);
      return saved ? JSON.parse(saved) : sampleOrders;
    } catch (e) {
      console.warn('Could not read orders from localStorage', e);
      return sampleOrders;
    }
  });

  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem(TXNS_KEY);
      return saved ? JSON.parse(saved) : sampleTransactions;
    } catch (e) {
      console.warn('Could not read transactions from localStorage', e);
      return sampleTransactions;
    }
  });

  // Sync orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    } catch (e) {
      console.warn('Could not save orders to localStorage', e);
    }
  }, [orders]);

  // Sync transactions to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(TXNS_KEY, JSON.stringify(transactions));
    } catch (e) {
      console.warn('Could not save transactions to localStorage', e);
    }
  }, [transactions]);

  const login = (email, password) => {
    if (
      email.trim().toLowerCase() === DEMO_CREDENTIALS.email &&
      password === DEMO_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      try {
        localStorage.setItem(AUTH_KEY, 'true');
      } catch (e) {
        console.warn('Could not write auth state to localStorage', e);
      }
      return { success: true };
    }
    return {
      success: false,
      error: 'Invalid credentials. Please use the demo credentials provided below.',
    };
  };

  const logout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch (e) {
      console.warn('Could not remove auth state from localStorage', e);
    }
  };

  const addOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);

    // Also record a payment transaction
    const newTxn = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      date: newOrder.date,
      orderId: newOrder.id,
      method: newOrder.paymentMethod,
      amount: newOrder.amount,
      status: newOrder.paymentStatus,
    };
    setTransactions((prev) => [newTxn, ...prev]);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, orderStatus: newStatus } : order
      )
    );
  };

  const resetOrders = () => {
    setOrders(sampleOrders);
    setTransactions(sampleTransactions);
    try {
      localStorage.removeItem(ORDERS_KEY);
      localStorage.removeItem(TXNS_KEY);
    } catch (e) {
      console.warn('Could not reset demo orders', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        orders,
        transactions,
        addOrder,
        updateOrderStatus,
        resetOrders,
        credentials: DEMO_CREDENTIALS,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

