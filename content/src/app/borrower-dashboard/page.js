import React from 'react';
import { FaChartPie, FaEdit } from 'react-icons/fa'; // Importing icons from react-icons

function Borrowerdash() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 py-8">
      {/* Container for the welcome message */}
      <div className="ml-8 mb-2">
        <h1 className="text-6xl font-bold text-[#01b0f1]">Welcome, Borrower</h1>
      </div>
      {/* Container for the cards, centered on the page */}
      <div className="flex flex-col items-center gap-6 w-full mt-20">
        <div className="flex flex-col md:flex-col items-center gap-6 w-full justify-center">
          {/* Dashboard card */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-3/5 md:w-2/5 lg:w-1/3 transition-transform transform hover:scale-105 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#01b0f1]">Dashboard</h2>
              <p className="text-gray-700 mb-6">View your company’s performance metrics, financial data, and more.</p>
            </div>
            <button className="flex items-center justify-center mt-4 px-4 py-2 bg-[#01b0f1] text-white rounded-xl hover:bg-blue-700">
              <FaChartPie className="mr-2" /> Go to Dashboard
            </button>
          </div>
          {/* AMR Update card */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-3/5 md:w-1/3 lg:w-1/3 transition-transform transform hover:scale-105 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#01b0f1]">AMR Update</h2>
              <p className="text-gray-700 mb-6">Update your Annual Monitoring Report data here.</p>
            </div>
            <button className="flex items-center justify-center mt-4 px-4 py-2 bg-[#01b0f1] text-white rounded-xl hover:bg-blue-700">
              <FaEdit className="mr-2" /> Update AMR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Borrowerdash;
