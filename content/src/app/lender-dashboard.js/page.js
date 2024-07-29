// src/app/lender-dashboard/page.js
"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LenderDashboard() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie.split('=')[1];
        const response = await axios.get('/api/lender-dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        router.push('/auth');
      }
    };

    fetchData();
  }, [router]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Lender Dashboard</h1>
      {/* Add charts and graphs here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
