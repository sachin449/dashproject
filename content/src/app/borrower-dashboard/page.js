"use client";

import ProtectRoute from '@/lib/ProtectRoute';
import React from 'react';

function BorrowerDashboard() {
  return (
    <div>
      <h1>Borrower Dashboard</h1>
      <p>Welcome to the borrower dashboard.</p>
    </div>
  );
}

export default ProtectRoute(BorrowerDashboard, ['borrower']);
