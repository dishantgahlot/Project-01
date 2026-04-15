import React from "react";

function Footer() {
  return (
    <div className="bg-[#232f3e] text-white text-sm mt-10">

      {/* Back to Top */}
      <div className="bg-[#37475a] text-center py-3 cursor-pointer hover:bg-[#485769]">
        Back to top
      </div>

      {/* Main Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-10 max-w-6xl mx-auto">

        <div>
          <h3 className="font-bold mb-3">Get to Know Us</h3>
          <p className="hover:underline cursor-pointer">About Amazon</p>
          <p className="hover:underline cursor-pointer">Careers</p>
          <p className="hover:underline cursor-pointer">Press Releases</p>
          <p className="hover:underline cursor-pointer">Amazon Science</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Connect with Us</h3>
          <p className="hover:underline cursor-pointer">Facebook</p>
          <p className="hover:underline cursor-pointer">Twitter</p>
          <p className="hover:underline cursor-pointer">Instagram</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Make Money with Us</h3>
          <p className="hover:underline cursor-pointer">Sell on Amazon</p>
          <p className="hover:underline cursor-pointer">Sell under Amazon Accelerator</p>
          <p className="hover:underline cursor-pointer">Protect and Build Your Brand</p>
          <p className="hover:underline cursor-pointer">Amazon Global Selling</p>
          <p className="hover:underline cursor-pointer">Supply to Amazon</p>
          <p className="hover:underline cursor-pointer">Become an Affiliate</p>
          <p className="hover:underline cursor-pointer">Fulfilment by Amazon</p>
          <p className="hover:underline cursor-pointer">Advertise Your Products</p>
          <p className="hover:underline cursor-pointer">Amazon Pay on Merchants</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Let Us Help You</h3>
          <p className="hover:underline cursor-pointer">Your Account</p>
          <p className="hover:underline cursor-pointer">Returns Centre</p>
          <p className="hover:underline cursor-pointer">Recalls and Product Safety Alerts</p>
          <p className="hover:underline cursor-pointer">100% Purchase Protection</p>
          <p className="hover:underline cursor-pointer">Amazon App Download</p>
          <p className="hover:underline cursor-pointer">Help</p>
        </div>

      </div>

      {/* Logo + Language */}
      <div className="border-t border-gray-600 py-6 flex flex-col md:flex-row items-center justify-center gap-6">

        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
          className="w-24"
        />

        <div className="flex gap-4">

          <div className="border px-4 py-1 rounded cursor-pointer hover:bg-gray-700">
            🌐 English
          </div>

          <div className="border px-4 py-1 rounded cursor-pointer hover:bg-gray-700">
            🇮🇳 India
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#131a22] text-gray-300 px-10 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-xs">

          <div>
            <p className="font-semibold">AbeBooks</p>
            <p>Books, art & collectibles</p>
          </div>

          <div>
            <p className="font-semibold">Amazon Web Services</p>
            <p>Scalable Cloud Computing Services</p>
          </div>

          <div>
            <p className="font-semibold">Audible</p>
            <p>Download Audio Books</p>
          </div>

          <div>
            <p className="font-semibold">IMDb</p>
            <p>Movies, TV & Celebrities</p>
          </div>

          <div>
            <p className="font-semibold">Shopbop</p>
            <p>Designer Fashion Brands</p>
          </div>

          <div>
            <p className="font-semibold">Amazon Business</p>
            <p>Everything For Your Business</p>
          </div>

          <div>
            <p className="font-semibold">Prime Music</p>
            <p>100 million songs, ad-free</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Footer;