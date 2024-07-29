// src/pages/api/user.js
import { verifyToken } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = verifyToken(token);
    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection('users').findOne({ _id: new ObjectId(decoded.id) });

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
