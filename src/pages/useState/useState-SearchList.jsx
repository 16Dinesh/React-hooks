import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SearchList() {
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Search List</h2>
        
        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 mb-4"
        />
        
        {/* Filtered List */}
        <ul className="list-none space-y-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} className="border-b py-2">{item}</li>
            ))
          ) : (
            <li className="text-gray-500">No items found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
