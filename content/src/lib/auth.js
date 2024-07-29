// src/lib/auth.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
