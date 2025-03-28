import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const register = (email, password, username, profilePic) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(user => user.email === email)) {
            alert("User already registered!");
            return false;
        }

        const newUser = { email, password, username, profilePic };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please log in.");
        return true;
    };

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find(user => user.email === email && user.password === password);

        if (userExists) {
            setIsAuthenticated(true);
            setUser(userExists);
            localStorage.setItem("user", JSON.stringify(userExists));
            return true;
        } else {
            alert("Invalid email or password!");
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, register, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
