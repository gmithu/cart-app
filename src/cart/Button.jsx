import React from "react";

export default function Button({ 
  children, 
  onClick, 
  variant = "filled",
  ...props 
}) {
  const baseStyles = "font-semibold rounded-xl transition-all";
  
  const variants = {
    filled: "w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105",
    outlined: "w-full px-6 border-2 border-gray-300 text-gray-600 font-semibold hover:bg-gray-100",
    danger: "w-12 h-12 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg shadow-sm hover:scale-105",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
