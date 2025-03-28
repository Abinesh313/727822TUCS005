import React, { useState } from "react";

function CreatePost({ addPost }) {
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const handlePost = () => {
        if (content.trim() === "") return alert("Post cannot be empty!");

        const newPost = {
            id: Date.now(),
            content,
            image,
            likes: 0,
            comments: [],
        };

        addPost(newPost);
        setContent("");
        setImage("");
    };

    return (
        <div className="create-post">
            <textarea
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input
                type="text"
                placeholder="Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button onClick={handlePost}>Post</button>
        </div>
    );
}

export default CreatePost;
