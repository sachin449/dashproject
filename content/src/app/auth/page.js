// src/app/auth/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post('/api/login', { email, password });
        document.cookie = `token=${response.data.token}; path=/`;
        toast.success('Successfully logged in!');
      } else {
        await axios.post('/api/register', { email, password });
        toast.success('Successfully registered!');
      }
      setTimeout(() => {
        router.push('/welcome');
      }, 2000);
    } catch (error) {
      setError(error.response.data.message);
      toast.error(isLogin ? 'Login failed. Please check your credentials.' : 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ToastContainer />
      <h1 className="text-2xl font-bold">{isLogin ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleAuth} className="mt-6 w-full max-w-sm">
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
        <div className="mb-6">
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
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`bg-${isLogin ? 'blue' : 'green'}-500 hover:bg-${isLogin ? 'blue' : 'green'}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </div>
      </form>
      <button
        onClick={toggleForm}
        className="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none focus:underline"
      >
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </button>
    </div>
  );
}