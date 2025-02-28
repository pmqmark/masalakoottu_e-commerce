import { useState } from "react";

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-[100px]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex">
          <button
            className={`w-1/2 py-3 text-center font-semibold ${
              activeTab === "login" ? "text-green-900 border-b-4 border-green-900" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-3 text-center font-semibold ${
              activeTab === "register" ? "bg-green-900 text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 border rounded-md bg-gray-100 text-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-md bg-gray-100 text-gray-700 focus:outline-none"
          />

          {activeTab === "register" && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 border rounded-md bg-gray-100 text-gray-700 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 mb-4 border rounded-md bg-gray-100 text-gray-700 focus:outline-none"
              />
            </>
          )}

          {activeTab === "login" && (
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me?
              </label>
            </div>
          )}

          <button className="w-full py-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition">
            {activeTab === "login" ? "Login now" : "Register"}
          </button>

          {activeTab === "login" && (
            <p className="mt-4 text-sm text-center text-gray-600 cursor-pointer hover:underline">
              Forgot your password?
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
