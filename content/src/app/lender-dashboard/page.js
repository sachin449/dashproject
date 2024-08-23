"use client";

import ProtectRoute from '@/lib/ProtectRoute';
import React from 'react';

function LenderDashboard() {
  return (
    <div>
      <h1>Lender Dashboard</h1>
      <p>Welcome to the lender dashboard.</p>
    </div>
  );
}

export default ProtectRoute(LenderDashboard, ['lender']);
