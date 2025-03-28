import React, { useState, useEffect } from "react";

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const storedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
        setNotifications(storedNotifications);
    }, []);

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            {notifications.length === 0 ? <p>No notifications</p> : (
                notifications.map((note, index) => <p key={index}>{note.message}</p>)
            )}
        </div>
    );
}

export default Notifications;
