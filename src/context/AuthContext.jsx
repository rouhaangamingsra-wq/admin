import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { firebaseEnabled, auth as fbAuth } from '../firebase/config.js';
import api, { setToken, getToken } from '../services/api.js';

const AuthContext = createContext(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const token = getToken();
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await api.get('/auth/me');
        if (res.user?.role !== 'admin') {
          setToken(null);
          setUser(null);
        } else {
          setUser(res.user);
        }
      } catch {
        setToken(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const login = async (email, password) => {
    let token;
    if (!firebaseEnabled) {
      token = `admin-${email}`;
    } else {
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      const cred = await signInWithEmailAndPassword(fbAuth, email, password);
      token = await cred.user.getIdToken();
    }
    setToken(token);
    const res = await api.get('/auth/me');
    if (res.user?.role !== 'admin') {
      setToken(null);
      throw new Error('Admin access only.');
    }
    setUser(res.user);
    return res.user;
  };

  const logout = async () => {
    if (firebaseEnabled && fbAuth) {
      try {
        const { signOut } = await import('firebase/auth');
        await signOut(fbAuth);
      } catch {}
    }
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => ({ user, loading, login, logout, firebaseEnabled }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
