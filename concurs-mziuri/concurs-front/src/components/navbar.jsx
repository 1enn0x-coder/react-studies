import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/mziuri.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDebulebaOpen, setMobileDebulebaOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? "text-yellow-900" : "text-black hover:text-yellow-800"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block font-medium transition-colors duration-200 ${
      isActive ? "text-yellow-900" : "text-black hover:text-yellow-800"
    }`;

  const dropdownLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
      isActive
        ? "bg-yellow-200 text-yellow-900 font-semibold"
        : "text-black hover:bg-yellow-100 hover:text-yellow-900"
    }`;

  return (
    <nav className="relative z-50 bg-yellow-400 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Mziuri logo" className="h-10 w-auto" />
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>
            მთავარი
          </NavLink>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-black transition-colors duration-200 hover:text-yellow-800 focus:outline-none focus-visible:text-yellow-900"
            >
              დებულება
              <span className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">
                ▼
              </span>
            </button>

            <div className="absolute left-0 top-full pt-2">
              <div className="w-52 rounded-xl border border-yellow-500/60 bg-yellow-300 p-2 shadow-lg opacity-0 invisible translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                <NavLink to="/mission" className={dropdownLinkClass}>
                  მიზანი
                </NavLink>
                <NavLink to="/rules" className={dropdownLinkClass}>
                  წესები
                </NavLink>
                <NavLink to="/prizes" className={dropdownLinkClass}>
                  პრიზები
                </NavLink>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-black transition-colors duration-200 hover:text-yellow-800 focus:outline-none focus-visible:text-yellow-900"
            >
              ტურები
              <span className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">
                ▼
              </span>
            </button>

            <div className="absolute left-0 top-full pt-2">
              <div className="w-56 rounded-xl border border-yellow-500/60 bg-yellow-300 p-2 shadow-lg opacity-0 invisible translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                <NavLink to="/current-tours" className={dropdownLinkClass}>
                  მიმდინარე ტური
                </NavLink>
                <NavLink to="/past-tours" className={dropdownLinkClass}>
                  გავლილი ტურები
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            კონტაქტი
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-yellow-300 px-4 pb-4 pt-2 space-y-2">
          <NavLink
            to="/"
            end
            className={mobileLinkClass}
            onClick={() => setIsOpen(false)}
          >
            მთავარი
          </NavLink>

          <div>
            <button
              type="button"
              onClick={() => setMobileDebulebaOpen((prev) => !prev)}
              className="flex w-full items-center justify-between font-medium text-black transition-colors duration-200 hover:text-yellow-800"
            >
              დებულება
              <span>{mobileDebulebaOpen ? "−" : "+"}</span>
            </button>

            {mobileDebulebaOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <NavLink
                  to="/mission"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  მიზანი
                </NavLink>
                <NavLink
                  to="/rules"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  წესები
                </NavLink>
                <NavLink
                  to="/prizes"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  პრიზები
                </NavLink>
              </div>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setMobileToursOpen((prev) => !prev)}
              className="flex w-full items-center justify-between font-medium text-black transition-colors duration-200 hover:text-yellow-800"
            >
              ტურები
              <span>{mobileToursOpen ? "−" : "+"}</span>
            </button>

            {mobileToursOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <NavLink
                  to="/current-tours"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  მიმდინარე ტური
                </NavLink>
                <NavLink
                  to="/past-tours"
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  გავლილი ტურები
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={mobileLinkClass}
            onClick={() => setIsOpen(false)}
          >
            კონტაქტი
          </NavLink>
        </div>
      )}
    </nav>
  );
}
