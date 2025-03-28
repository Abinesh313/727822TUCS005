import React, { useState } from "react";

function FollowButton({ userId }) {
    const [following, setFollowing] = useState(false);

    const handleFollow = () => {
        setFollowing(!following);
    };

    return (
        <button onClick={handleFollow}>
            {following ? "Unfollow" : "Follow"}
        </button>
    );
}

export default FollowButton;
