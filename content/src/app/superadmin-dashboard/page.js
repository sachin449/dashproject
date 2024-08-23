"use client";

import ProtectRoute from '@/lib/ProtectRoute';
import React from 'react';

function SuperadminDashboard() {
  return (
    <div>
      <h1>Superadmin Dashboard</h1>
      <p>Welcome to the superadmin dashboard.</p>
    </div>
  );
}

export default ProtectRoute(SuperadminDashboard, ['superadmin']);
