import React from 'react'
import '../App.css'


import {Search } from "lucide-react"


const Navbar = () => {
  return (
    <>
       <nav className="bg-[#131921] text-white flex items-center px-4 py-2 gap-4">

      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
          className="w-24 object-contain"
        />
      </div>

      {/* Location */}
      <div className="hidden md:flex flex-col cursor-pointer">
        <span className="text-xs text-gray-300">Deliver to</span>
        <span className="text-sm font-bold">India</span>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 h-10 rounded overflow-hidden">

        <select className="bg-gray-200 text-black px-2 outline-none text-sm">
          <option>All</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="flex-1 px-3 text-black outline-none bg-white"
        />

        <button className="bg-yellow-400 px-4 text-black font-semibold hover:bg-yellow-500">
          <span><Search/></span>
        </button>
      </div>

      {/* Account */}
      <div className="hidden md:flex flex-col cursor-pointer">
        <span className="text-xs">Hello, Sign in</span>
        <span className="text-sm font-bold">Account & Lists</span>
      </div>

      {/* Orders */}
      <div className="hidden md:flex flex-col cursor-pointer">
        <span className="text-xs">Returns</span>
        <span className="text-sm font-bold">& Orders</span>
      </div>

      {/* Cart */}
      <div className="flex items-center gap-1 cursor-pointer">
        <span className="text-2xl">🛒</span>
        <span className="font-bold">0</span>
      </div>

    </nav>
    </>
  )
}

export default Navbar