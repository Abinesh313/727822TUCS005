
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function ProfilePage() {
    const { isAuthenticated, user, logout, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [username, setUsername] = useState(user?.username || "");
    const [email] = useState(user?.email || "");
    const [profilePic, setProfilePic] = useState(user?.profilePic || "");

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login"); // Redirect to login if not authenticated
        }
    }, [isAuthenticated, navigate]);

    const handleSave = () => {
        const updatedUser = { ...user, username, profilePic };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Profile updated successfully!");
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <img src={profilePic || "/default-profile.png"} alt="Profile" className="profile-pic" />

            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Email:</label>
            <input type="email" value={email} disabled />

            <label>Profile Picture URL:</label>
            <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />

            <button onClick={handleSave}>Save Changes</button>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
    );
}

export default ProfilePage;
