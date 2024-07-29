// src/pages/api/lender-dashboard.js
import withAuth from '@/middleware/withAuth';

const handler = async (req, res) => {
  // Fetch lender-specific data
  const data = {
    message: 'Lender dashboard data',
    charts: [], // Add your charts data here
  };
  res.status(200).json(data);
};

export default withAuth(handler, ['lender', 'superadmin']);
