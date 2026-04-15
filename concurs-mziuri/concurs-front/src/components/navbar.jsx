import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/mziuri.png";

const mainNavItems = [
  { label: "მთავარი", to: "/" },
  {
    key: "debuleba",
    label: "დებულება",
    children: [
      { label: "მიზანი", to: "/mission" },
      { label: "წესები", to: "/rules" },
      { label: "პრიზები", to: "/prizes" },
    ],
  },
  {
    key: "tours",
    label: "ტურები",
    children: [
      { label: "მიმდინარე ტური", to: "/current-tours" },
      { label: "გავლილი ტურები", to: "/past-tours" },
    ],
  },
  { label: "კონტაქტი", to: "/contact" },
];

const accountItems = [
  { label: "რეგისტრაცია", to: "/register" },
  { label: "ავტორიზაცია", to: "/login" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (key) => {
    setOpenMobileDropdown((prev) => (prev === key ? null : key));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileDropdown(null);
  };

  const navLinkClass =
    "font-medium text-black transition-colors duration-200 hover:text-yellow-800";

  const dropdownLinkClass =
    "block px-3 py-2 text-sm font-medium text-black transition-colors duration-200 hover:text-yellow-800";

  return (
    <nav className="relative z-50 bg-yellow-400 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src={logo} alt="Mziuri logo" className="h-10 w-auto" />
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {mainNavItems.map((item) =>
            item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ) : (
              <div key={item.key} className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 font-medium text-black transition-colors duration-200 hover:text-yellow-800 focus:outline-none"
                >
                  {item.label}
                  <span className="text-xs">▼</span>
                </button>

                <div className="absolute left-0 top-full invisible pt-2 opacity-0 pointer-events-none transition-all duration-150 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                  <div className="w-56 border border-yellow-500 bg-yellow-400 py-2 shadow-md">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={dropdownLinkClass}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setOpenMobileDropdown(null);
            }}
            className="text-2xl text-black md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-black transition-colors duration-200 hover:text-yellow-800 focus:outline-none"
            >
              პირადი კაბინეტი
              <span className="text-xs">▼</span>
            </button>

            <div className="absolute right-0 top-full invisible pt-2 opacity-0 pointer-events-none transition-all duration-150 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
              <div className="w-48 border border-yellow-500 bg-yellow-400 py-2 shadow-md">
                {accountItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={dropdownLinkClass}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-yellow-500 bg-yellow-400 px-4 py-4 md:hidden">
          <div className="space-y-3">
            {mainNavItems.map((item) =>
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className={navLinkClass}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              ) : (
                <div key={item.key}>
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(item.key)}
                    className="flex items-center gap-1 font-medium text-black transition-colors duration-200 hover:text-yellow-800"
                  >
                    {item.label}
                    <span className="text-xs">▼</span>
                  </button>

                  {openMobileDropdown === item.key && (
                    <div className="mt-2 ml-3 border-l border-yellow-500 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={dropdownLinkClass}
                          onClick={closeMobileMenu}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
