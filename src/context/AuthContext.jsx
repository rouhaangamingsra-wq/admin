import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { firebaseEnabled, auth as fbAuth } from '../firebase/config.js';
import api, { setToken, getToken } from '../services/api.js';

const AuthContext = createContext(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}

const MOCK_ADMIN = { uid: 'admin', email: 'admin@example.com', role: 'admin', name: 'Admin' };

export function AuthProvider({ children }) {
  const [user, setUser] = useState(MOCK_ADMIN);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setUser(MOCK_ADMIN);
    return MOCK_ADMIN;
  };

  const logout = async () => {
    setUser(MOCK_ADMIN);
  };

  const value = useMemo(() => ({ user, loading, login, logout, firebaseEnabled }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
