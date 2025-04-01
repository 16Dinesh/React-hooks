import { useState } from "react";

export default function TextAreaWithCounter() {
  const [text, setText] = useState("");
  const maxChars = 200;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Write Something</h2>

        {/* Textarea */}
        <textarea
          rows="4"
          cols="50"
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 border rounded-md focus:ring focus:ring-blue-300 mb-4"
        />

        {/* Character Count */}
        <div className="text-sm text-gray-600">
          <p>
            {text.length} / {maxChars} characters
          </p>
          {text.length > maxChars && (
            <p className="text-red-500 mt-1">Limit exceeded!</p>
          )}
        </div>
      </div>
    </div>
  );
}
