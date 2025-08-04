import React from 'react'

function LoginPage({show, onClose}) {
    if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg w-96 p-6 relative">
        {/* Close Button */}
        <button className="absolute top-3 left-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">
          Welcome to Airbnb
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-2 focus:ring-rose-500 focus:outline-none"
        />

        {/* Continue Button */}
        <button className="w-full bg-rose-500 text-white font-medium rounded-md py-2 mb-6 hover:bg-rose-600 transition">
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3">
          <button className="border border-gray-300 rounded-md py-2 flex items-center justify-center hover:bg-gray-50">
            Continue with Facebook
          </button>
          <button className="border border-gray-300 rounded-md py-2 flex items-center justify-center hover:bg-gray-50">
            Continue with Google
          </button>
          <button className="border border-gray-300 rounded-md py-2 flex items-center justify-center hover:bg-gray-50">
            Continue with Apple
          </button>
          <button className="border border-gray-300 rounded-md py-2 flex items-center justify-center hover:bg-gray-50">
            Continue with Phone
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage