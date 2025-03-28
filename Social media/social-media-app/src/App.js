import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";

function Navigation({ darkMode, toggleDarkMode }) {
    const location = useLocation();

    // Hide navbar on Dashboard
    if (location.pathname === "/dashboard") return null;

    return (
        <nav className={`navbar ${darkMode ? "dark" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <button onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    );
}

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <Router>
            <div className={`app-container ${darkMode ? "dark" : ""}`}>
                <Navigation darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
