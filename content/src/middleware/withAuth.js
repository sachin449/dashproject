// src/middleware/withAuth.js
import { verifyToken } from '@/lib/auth';

export default function withAuth(handler, allowedRoles) {
  return async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const decoded = verifyToken(token);
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access forbidden: Insufficient permissions' });
      }
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}
