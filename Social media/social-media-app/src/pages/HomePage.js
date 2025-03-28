import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const styles = {
        container: {
            fontFamily: "Arial, sans-serif",
            margin: 0,
            padding: 0,
            backgroundColor: "#f9f9f9",
            color: "#333",
            textAlign: "center",
            minHeight: "100vh",
        },
        navbar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
            backgroundColor: "#007bff",
            color: "white",
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 1000,
        },
        
        logo: {
            fontSize: "24px",
            fontWeight: "bold",
        },
        navLinks: {
            display: "flex",
            gap: "20px",
        },
        link: {
            textDecoration: "none",
            color: "white",
            fontSize: "16px",
            transition: "0.3s ease",
        },
        loginBtn: {
            padding: "8px 16px",
            background: "white",
            color: "#007bff",
            borderRadius: "5px",
            fontWeight: "bold",
            textDecoration: "none",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
        },
        loginBtnHover: {
            background: "#f1f1f1",
        },
        mainContent: {
            paddingTop: "80px", // To prevent content from being overlapped by navbar
        },
        heroSection: {
            textAlign: "center",
            padding: "100px 20px",
            backgroundColor: "#eef4ff",
        },
        heroTitle: {
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        heroText: {
            fontSize: "18px",
            color: "#555",
            marginBottom: "20px",
        },
        ctaBtn: {
            padding: "12px 24px",
            background: "#007bff",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "5px",
            textDecoration: "none",
            transition: "0.3s ease-in-out",
        },
        ctaBtnHover: {
            background: "#0056b3",
        },
        featuresSection: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "40px 20px",
            flexWrap: "wrap",
        },
        featureBox: {
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            textAlign: "center",
        },
        featureTitle: {
            fontSize: "20px",
            marginBottom: "10px",
        },
        featureText: {
            fontSize: "16px",
            color: "#555",
        },
    };

    return (
        <div style={styles.container}>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <h1 style={styles.logo}>MyApp</h1>
                <div style={styles.navLinks}>
                    <Link to="/register" style={styles.link}>Register</Link>
                    <Link to="/login" style={styles.loginBtn}>Login</Link>
                </div>
            </nav>

            {/* Main Content */}
            <div style={styles.mainContent}>
                {/* Hero Section */}
                <header style={styles.heroSection}>
                    <h2 style={styles.heroTitle}>Welcome to MyApp</h2>
                    <p style={styles.heroText}>Your ultimate platform to connect, share, and grow.</p>
                    <Link to="/login" style={styles.ctaBtn}>Get Started</Link>
                </header>

                {/* Features Section */}
                <section style={styles.featuresSection}>
                    <div style={styles.featureBox}>
                        <h3 style={styles.featureTitle}>🌍 Connect with People</h3>
                        <p style={styles.featureText}>Engage with a global community and share your thoughts.</p>
                    </div>
                    <div style={styles.featureBox}>
                        <h3 style={styles.featureTitle}>📝 Create Posts</h3>
                        <p style={styles.featureText}>Express yourself with text, images, and more.</p>
                    </div>
                    <div style={styles.featureBox}>
                        <h3 style={styles.featureTitle}>🔔 Real-Time Notifications</h3>
                        <p style={styles.featureText}>Stay updated with real-time alerts and interactions.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomePage;
