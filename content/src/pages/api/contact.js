// src/pages/api/contact.js
import clientPromise from '@/lib/mongodb';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
