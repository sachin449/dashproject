// src/pages/api/borrower-dashboard.js
import withAuth from '@/middleware/withAuth';

const handler = async (req, res) => {
  // Fetch borrower-specific data
  const data = {
    message: 'Borrower dashboard data',
    forms: [], // Add your forms data here
  };
  res.status(200).json(data);
};

export default withAuth(handler, ['borrower', 'superadmin']);
