import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label className="block mb-2 font-medium text-gray-700">User ID</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your user ID"
        />

        <label className="block mb-2 font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-full bg-[#33277B] text-white p-2 rounded hover:bg-[#281d6a] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
