import React from "react";
import { FaBars } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-[#232f3e] text-white text-sm">

      <div className="flex items-center px-4 py-2 gap-3">

        {/* Left Section */}
        <div className="flex items-center gap-3 flex-1 overflow-hidden">

          {/* All */}
          <div className="flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white cursor-pointer transition duration-150">
            <FaBars />
            <span className="font-semibold">All</span>
          </div>

          {/* Links */}
          {[
            "Rufus",
            "Fresh",
            "Prime",
            "Flights",
            "Keep Shopping for",
            "MX Player",
            "Sell",
            "Gift Cards",
            "Amazon Pay",
            "Buy Again",
            "Gift Ideas",
            "Browsing History",
          ].map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 border border-transparent hover:border-white cursor-pointer transition duration-150"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex items-center ml-4">
          <div className="px-3 py-1 border border-transparent hover:border-white cursor-pointer transition duration-150">
            <img
              src="https://m.media-amazon.com/images/G/31/img21/APAY/FEB26/travel/3_SMW_400x39_1._CB782949800_.jpg"
              alt="sale"
              className="h-8 object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default TopBar;