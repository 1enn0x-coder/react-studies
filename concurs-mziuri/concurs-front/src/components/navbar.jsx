import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/mziuri.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex ">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Mziuri logo" className="h-10 w-auto" />
          </NavLink>

          <div>
            <NavLink to="/">მთავარი</NavLink>
            <NavLink to="/debuleba">დებულება</NavLink>
            <NavLink to="/tours">ტურები</NavLink>
            <NavLink to="/contact">კონტაქტი</NavLink>
          </div>

          <NavLink to="/piradi-kabineti">პირადი კაბინეტი</NavLink>
        </div>
      </nav>
    </>
  );
}
