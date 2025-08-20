import React, { useState } from "react";
import { FaBars, FaDoorOpen, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = ["ART", "SCIENCE", "TECHNOLOGY", "CINEMA", "DESIGN", "FOOD"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((item, idx) => (
          <Link key={idx} to={`/?cat=${item.toLowerCase()}`}>
            {item}
          </Link>
        ))}
      </div>

      <div className="nav-user">
        <p>Shan</p>
        <p>
          <FaSignOutAlt></FaSignOutAlt>
        </p>
        <Link to={"/write"}>Write</Link>
      </div>

      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
