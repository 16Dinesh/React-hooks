import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function DynamicFields() {
  const [fields, setFields] = useState([""]);

  function handleAddField() {
    setFields([...fields, ""]);
  }

  function handleChange(index, value) {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Dynamic Form Fields</h2>

        {/* Dynamic Fields */}
        {fields.map((field, index) => (
          <Input
            key={index}
            type="text"
            placeholder={`Field ${index + 1}`}
            value={field}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 mb-4"
          />
        ))}
        
        {/* to Add More Button */}
        <Button
          onClick={handleAddField}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add More
        </Button>
      </div>
    </div>
  );
}
