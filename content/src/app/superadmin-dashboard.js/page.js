// src/app/superadmin-dashboard/page.js
"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SuperadminDashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const token = document.cookie.split('=')[1]; // Get token from cookies
      const response = await axios.post('/api/admin-register', {
        email,
        password,
        role,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`User created with role: ${response.data.role}`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ToastContainer />
      <h1 className="text-3xl font-bold">Superadmin Dashboard</h1>
      <form onSubmit={handleCreateUser} className="mt-6 w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            id="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
