import { useState } from "react";

const initialState = {
  name: "",
  city: "",
};

export default function UseState_with_InputText() {
  const [formData, setFormData] = useState(initialState);

  function handleCityChange(e) {
    setFormData((prevData) => ({ ...prevData, city: e.target.value }));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">UseState with Input-Text</h1>
        
        <div className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={(event) => {
              setFormData((prevData) => ({ ...prevData, name: event.target.value }));
            }}
          />

          {/* City Dropdown */}
          <select
            name="city"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={handleCityChange}
          >
            <option value="">Select City</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
            <option value="pune">Pune</option>
            <option value="jaipur">Jaipur</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="surat">Surat</option>
            <option value="nagpur">Nagpur</option>
            <option value="indore">Indore</option>
            <option value="bhopal">Bhopal</option>
          </select>
        </div>

        {/* Displaying Result */}
        <div className="mt-4 text-lg font-medium">
          <p>
            {formData.name && formData.city
              ? `${formData.name} is from ${formData.city}`
              : "Please enter details"}
          </p>
        </div>
      </div>
    </div>
  );
}
