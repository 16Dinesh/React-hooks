import { useState } from "react";

export default function ToggleTextInput() {
  const [mode, setMode] = useState("email"); // "email" or "phone"
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Method</h2>

        {/* Select for Email or Phone */}
        <div className="mb-4">
          <select
            onChange={(e) => setMode(e.target.value)}
            value={mode}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        {/* Conditional Input for Email or Phone */}
        {mode === "email" ? (
          <input
            type="email"
            placeholder="Enter your email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 mb-4"
          />
        ) : (
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 mb-4"
          />
        )}

        {/* Displaying the entered value */}
        <p className="text-center text-lg font-medium">
          You entered: <span className="font-semibold">{inputValue}</span>
        </p>
      </div>
    </div>
  );
}
