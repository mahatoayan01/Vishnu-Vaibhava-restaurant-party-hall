import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, Mail, KeyRound, ShieldAlert, ArrowRight, UserCheck, AlertCircle } from 'lucide-react';
import { useAuth, DEMO_CREDENTIALS } from '../context/AuthContext';

export default function OwnerLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      const destination = location.state?.from?.pathname || '/owner-dashboard';
      navigate(destination, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const res = login(email, password);
    if (res.success) {
      const destination = location.state?.from?.pathname || '/owner-dashboard';
      navigate(destination, { replace: true });
    } else {
      setError(res.error);
    }
  };

  const handleFillDemo = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setError('');
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl shadow-card border-2 border-amber-200">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-700 to-amber-500 text-white flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
            Owner Portal Login
          </h1>
          <p className="text-xs text-gray-500">
            Front-end demo dashboard for Vishnu Vaibhava management.
          </p>
        </div>

        {/* Demo Credentials Notice Card with Quick Fill */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-xs space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold">
            <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>Demo Access Credentials:</span>
          </div>
          <div className="space-y-1 font-mono text-[11px] text-amber-950 bg-white/80 p-2.5 rounded-xl border border-amber-200">
            <div>
              <strong>Email:</strong> {DEMO_CREDENTIALS.email}
            </div>
            <div>
              <strong>Password:</strong> {DEMO_CREDENTIALS.password}
            </div>
          </div>
          <button
            type="button"
            onClick={handleFillDemo}
            className="w-full py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Click to Auto-fill Demo Credentials</span>
          </button>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="owner@demo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <p className="text-[11px] text-gray-400 text-center leading-relaxed">
          * Note: This is client-side demo authentication for presentation purposes only. No backend server is connected.
        </p>
      </div>
    </div>
  );
}

