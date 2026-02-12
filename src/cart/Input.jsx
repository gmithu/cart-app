import React from 'react'

export default function Input({onChange,}) {
  return (
    <div className="w-full">
           <input
          type="text"
          className="bg-gray-100 w-full h-11 rounded-xl px-5 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all placeholder-gray-400"
          placeholder="🔍 Search Items..."
          onChange={onChange}
         
        />
    </div>
  )
}
