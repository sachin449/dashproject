// components/Dashboard.js

import Image from "next/image";
import Link from "next/link";
import { signInWithGoogle } from "../lib/auth"; // Import the sign-in function

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full z-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-600 mt-2">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="mt-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={signInWithGoogle}
            className="mt-4 w-full border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-50"
          >
            <img
              src="/google-icon.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
          <div className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/placeholder.svg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
      </div>
    </div>
  );
}
