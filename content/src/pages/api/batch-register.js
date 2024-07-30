
  // src/pages/api/batch-register.js
import { hashPassword } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';

const toHexadecimal = (str) => {
  return Buffer.from(str, 'utf8').toString('hex');
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const users = req.body.users;

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({ message: 'Invalid users data' });
    }

    const client = await clientPromise;
    const db = client.db();

    const usersToInsert = await Promise.all(users.map(async (user) => {
      const { email, password, role } = user;

      if (!email || !password || !role) {
        throw new Error('Missing required fields');
      }

      const existingUser = await db.collection('users').findOne({ email });

      if (existingUser) {
        throw new Error(`User already exists with email: ${email}`);
      }

      const hashedPassword = await hashPassword(password);
      const ouid = toHexadecimal(password);

      return {
        email,
        password: hashedPassword,
        ouid,
        role,
      };
    }));

    const result = await db.collection('users').insertMany(usersToInsert);

    res.status(201).json({ message: 'Users created', insertedCount: result.insertedCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
