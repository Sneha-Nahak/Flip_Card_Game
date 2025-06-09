import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EasyGame from "./pages/EasyGame";
import MediumGame from "./pages/MediumGame";
import HardGame from "./pages/HardGame";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserHistory from "./pages/UserHistory";

import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // ✅ Import Footer

function App() {
  return (
    <Router>
      <NavBar />
      <div className="min-vh-100 d-flex flex-column">
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/easy"
              element={
                <PrivateRoute>
                  <EasyGame />
                </PrivateRoute>
              }
            />
            <Route
              path="/medium"
              element={
                <PrivateRoute>
                  <MediumGame />
                </PrivateRoute>
              }
            />
            <Route
              path="/hard"
              element={
                <PrivateRoute>
                  <HardGame />
                </PrivateRoute>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <PrivateRoute>
                  <Leaderboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <UserHistory />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer /> {/* ✅ Added Footer outside of Routes */}
      </div>
    </Router>
  );
}

export default App;
