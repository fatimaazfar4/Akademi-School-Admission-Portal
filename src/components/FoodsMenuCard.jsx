// src/components/FoodsMenuCard.jsx
import React from 'react';

const foodsMenuData = [
  {
    id: 1,
    name: "Beef Steak with Fried Potato",
    description: "Lorem ipsum dolor sit amet...",
    imageBg: "#E0E2FF" // Light purple placeholder background
  },
  {
    id: 2,
    name: "Pancake with Honey",
    description: "Lorem ipsum dolor sit amet...",
    imageBg: "#E0E2FF"
  },
  {
    id: 3,
    name: "Japanese Beef Ramen",
    description: "Lorem ipsum dolor sit amet...",
    imageBg: "#E0E2FF"
  },
];

export default function FoodsMenuCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">Current Foods Menu</h3>
      </div>

      {/* Food Items List */}
      <div className="space-y-6"> {/* Space between each food item */}
        {foodsMenuData.map((food) => (
          <div key={food.id} className="flex flex-col">
            {/* Image Placeholder */}
            <div
              className="w-full h-32 rounded-lg mb-3" // h-32 for height based on visual
              style={{ backgroundColor: food.imageBg }}
            >
              {/* This would be where an actual image would go */}
            </div>
            {/* Food Details */}
            <div>
              <p className="font-semibold text-gray-900 text-lg mb-1">{food.name}</p>
              <p className="text-sm text-gray-500">{food.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="w-full py-3.5 mt-6 text-lg font-semibold text-[#5D3FD3] bg-[#F3F4F6] rounded-xl hover:bg-[#E9EBEE] transition-colors">
        View More
      </button>
    </div>
  );
}