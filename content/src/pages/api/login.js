// src/pages/api/login.js
import { comparePassword, generateToken } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection('users').findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isValid = await comparePassword(password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = generateToken(user);

  res.status(200).json({ token });
}
