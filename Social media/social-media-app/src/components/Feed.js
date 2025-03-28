import React, { useState } from "react";

function Feed({ posts, updatePosts }) {
    const handleLike = (postId) => {
        const updatedPosts = posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        );
        updatePosts(updatedPosts);
    };

    const handleComment = (postId, comment) => {
        const updatedPosts = posts.map(post =>
            post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
        );
        updatePosts(updatedPosts);
    };

    return (
        <div className="feed">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    {post.image && <img src={post.image} alt="Post" />}
                    <p>{post.content}</p>
                    <button onClick={() => handleLike(post.id)}>👍 {post.likes}</button>
                    <div>
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && e.target.value.trim() !== "") {
                                    handleComment(post.id, e.target.value);
                                    e.target.value = "";
                                }
                            }}
                        />
                    </div>
                    <div className="comments">
                        {post.comments.map((comment, index) => (
                            <p key={index}>{comment}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feed;
