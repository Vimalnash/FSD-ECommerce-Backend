import jwt from "jsonwebtoken";

// New Token Creation
export function generateToken(id) {
    return jwt.sign({id}, process.env.SECRET_KEY);
};

// Verifying the token to access
export function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
};