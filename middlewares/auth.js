
import { verifyToken } from "../helpers/auth.js";
import { authError } from "../helpers/handler.js";

// Setting Middleware for user authentication verify and allow
async function isUserAuthenticated(req, res, next) {
    if (req.headers["x-auth-token"]) {
        try {
            const token = await req.headers["x-auth-token"];
            if (!token) {
                return authError("Invalid Token");
            }
            const userId = verifyToken(token);
            if (!userId) {
                return authError(res, "Invalid Token");
            }
            const userData = await getUserById(userId.id);
            req.user = userData;
            next();
        } catch (error) {
            return authError(res, "Authentication Failed");
        }
    } else {
        return authError(res, "Authentication Failed");
    }
};

export { isUserAuthenticated }