import React from "react";


export default function CloseButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      ariaLabel="Close"
      className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-xl font-bold text-gray-700 hover:bg-gray-100 transition-all"
    >
      {children}
    </button>
  );
}
