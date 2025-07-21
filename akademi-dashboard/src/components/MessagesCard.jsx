// src/components/MessagesCard.jsx
import React from 'react';
// No Lucide-React Mail icon needed here as the design doesn't show one for individual messages

const messagesData = [
  {
    id: 1,
    sender: "Samantha William",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    avatarBg: "#E0E2FF", // Lighter purple
  },
  {
    id: 2,
    sender: "Tony Soap",
    preview: "Lorem ipsum dolor sit amet consectetur...",
    time: "12:45 PM",
    avatarBg: "#E0E2FF",
  },
  {
    id: 3,
    sender: "Jordan Nico",
    preview: "Lorem ipsum dolor sit amet consectetur...",
    time: "12:45 PM",
    avatarBg: "#E0E2FF",
  },
  {
    id: 4,
    sender: "Nadlia Adja",
    preview: "Lorem ipsum dolor sit amet consectetur...",
    time: "12:45 PM",
    avatarBg: "#E0E2FF",
  },
];

export default function MessagesCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Messages</h3> {/* Title style as per images */}
      </div>

      {/* Message List */}
      {/* Using space-y-0 and explicit py- for precise vertical spacing and borders */}
      <div className="space-y-0">
        {messagesData.map((message) => (
          <div key={message.id} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
            {/* Avatar */}
            <div
              className="w-11 h-11 rounded-full mr-3 flex-shrink-0"
              style={{ backgroundColor: message.avatarBg }}
            ></div>
            {/* Message Details */}
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{message.sender}</p>
              <p className="text-sm text-gray-500 truncate">{message.preview}</p>
            </div>
            {/* Timestamp */}
            <span className="text-xs text-gray-400 flex-shrink-0 ml-4">
              {message.time}
            </span>
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