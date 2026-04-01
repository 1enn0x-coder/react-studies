import { useState } from "react";
import logo from "../assets/mziuri.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
      
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

 
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-black font-medium hover:text-yellow-800 transition">
              Main
            </a>
            <a href="/contact" className="text-black font-medium hover:text-yellow-800 transition">
              Contact
            </a>
            <a href="/settings" className="text-black font-medium hover:text-yellow-800 transition">
              Settings
            </a>
          </div>

      
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&times;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-yellow-300 px-4 pb-4 space-y-2">
          <a href="/" className="block text-black font-medium hover:text-yellow-800">
            Main
          </a>
          <a href="/contact" className="block text-black font-medium hover:text-yellow-800">
            Contact
          </a>
          <a href="/settings" className="block text-black font-medium hover:text-yellow-800">
            Settings
          </a>
        </div>
      )}
    </nav>
  );
}