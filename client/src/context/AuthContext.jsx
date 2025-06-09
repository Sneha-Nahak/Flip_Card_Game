import React, { createContext, useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);

// Check token on load
useEffect(() => {
const token = localStorage.getItem('token');
if (token) {
try {
const decoded = jwtDecode(token);
const currentTime = Date.now() / 1000;


    if (decoded.exp && decoded.exp < currentTime) {
      localStorage.removeItem('token');
      setUser(null);
    } else {
      setUser({
        id: decoded.id,
        name: decoded.username,
        token,
      });
    }
  } catch (err) {
    console.error('Invalid token');
    localStorage.removeItem('token');
    setUser(null);
  }
}
}, []);

// Login (save token and decode)
const login = (token) => {
localStorage.setItem('token', token);
const decoded = jwtDecode(token);
setUser({
id: decoded.id,
name: decoded.username,

token,
});
};

// Logout
const logout = () => {
localStorage.removeItem('token');
setUser(null);
};

return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
);
};