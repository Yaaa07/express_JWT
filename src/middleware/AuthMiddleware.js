import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();


const SECRET_KEY = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log("Authorization Header Received:", authHeader);

    if (!authHeader) {
        console.error("Authorization header missing");
        return res.status(401).json({ msg: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    console.log("Token Extracted:", token);

    if (!token) {
        console.error("Token is missing");
        return res.status(403).json({ msg: "Access denied" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log("Token Verified Successfully:", decoded);
        console.log("SECRET_KEY used for verification:", SECRET_KEY);

        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        res.status(403).json({ msg: "Invalid or expired token" });
    }
};
