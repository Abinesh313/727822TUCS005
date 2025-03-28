import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import FollowButton from "../components/FollowButton";
import Notifications from "../components/Notifications";
import "./Dashboard.css";

function DashboardPage() {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login"); // Redirect to login if not authenticated
        }
    }, [isAuthenticated, navigate]);

    const goToProfile = () => {
        navigate("/profile");
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className={`dashboard-page ${darkMode ? "dark-mode" : ""}`}>
            <nav>
                <button onClick={goToProfile}>Go to Profile</button>
                <FollowButton />
                <Notifications />
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </nav>

            <h1>Dashboard</h1>
            <CreatePost addPost={(newPost) => setPosts([newPost, ...posts])} />
            <Feed posts={posts} updatePosts={setPosts} />
        </div>
    );
}

export default DashboardPage;
