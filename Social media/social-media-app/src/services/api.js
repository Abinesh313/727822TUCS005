export const registerUser = async (data) => {
    console.log("Registering user:", data);
    return { success: true, message: "Registration successful!" };
};

export const loginUser = async (data) => {
    console.log("Logging in user:", data);
    return { success: true, message: "Login successful!" };
};
