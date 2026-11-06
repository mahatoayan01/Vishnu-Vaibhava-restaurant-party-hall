import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import OwnerLogin from './pages/OwnerLogin';
import OwnerDashboard from './pages/OwnerDashboard';
import NotFound from './pages/NotFound';

function PageTitleHandler() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Vishnu Vaibhava | Pure Veg Restaurant & Party Hall - RR Nagar Bengaluru',
      '/menu': 'Menu & Prices | Vishnu Vaibhava Pure Veg Restaurant',
      '/location': 'Location & Driving Directions | Vishnu Vaibhava RR Nagar',
      '/contact': 'Contact & Reservations | Vishnu Vaibhava Bengaluru',
      '/cart': 'Your Order & Checkout | Vishnu Vaibhava Demo',
      '/owner-login': 'Owner Login | Vishnu Vaibhava Management',
      '/owner-dashboard': 'Owner Dashboard | Orders & Billing Console',
    };

    document.title = titles[location.pathname] || 'Vishnu Vaibhava | Restaurant & Party Hall';
  }, [location]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50 text-gray-900 selection:bg-amber-200 selection:text-amber-900">
      <ScrollToTop />
      <PageTitleHandler />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/owner-login" element={<OwnerLogin />} />
          <Route
            path="/owner-dashboard"
            element={
              <ProtectedRoute>
                <OwnerDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

