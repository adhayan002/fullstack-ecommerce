import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends JwtPayload {
    userId: string;
    role: string;
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({ error: "Access Denied" });
        return;
    }

    try {
        // Decode JWT token data
        const decoded = jwt.verify(token, process.env.JWT_Secret!);
        if (typeof decoded !== 'object' || !decoded) {
            res.status(401).json({ error: "Access Denied" });
            return;
        }
        req.userId = decoded.userId
        req.role = decoded.role
        next();
    } catch (e) {
        res.status(401).json({ error: "Access Denied" });
    }
}

export function verifySeller(req: Request, res: Response, next: NextFunction) {
    const role = req.role

    if (role !== "seller") {
        res.status(401).json({ error: "Access Denied" })
        return
    }
    next()
}