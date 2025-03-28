import React, { useState } from "react";
import { registerUser } from "../services/api";

function RegisterForm() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await registerUser(formData);
        alert(response.message);
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;
