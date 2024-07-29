// src/pages/api/superadmin-dashboard.js
import withAuth from '@/middleware/withAuth';

const handler = async (req, res) => {
  // Fetch superadmin-specific data
  const data = {
    message: 'Superadmin dashboard data',
    tools: [], // Add your management tools data here
  };
  res.status(200).json(data);
};

export default withAuth(handler, ['superadmin']);
