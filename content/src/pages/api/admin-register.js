// src/pages/api/admin-register.js
import { hashPassword } from '@/lib/auth';
import clientPromise from '@/lib/mongodb';
import withAuth from '@/middleware/withAuth';

const toHexadecimal = (str) => {
  return Buffer.from(str, 'utf8').toString('hex');
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const client = await clientPromise;
    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return res.status(422).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const ouid = toHexadecimal(password);

    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      ouid,
      role,
    });

    res.status(201).json({ message: 'User created', userId: result.insertedId, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default withAuth(handler, ['superadmin']);
