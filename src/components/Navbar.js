import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const LogoStyle = () => {
    return {
      textDecoration: "none",
      fontWeight: "bold",
    };
  };
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <>
      <div >
        <nav className="navbar bg-light h-14 bg-gradient-to-r from-gray-300 to-gray-100">
          <h2>My Todo List</h2>
          <form className="">
          <NavLink style={NavLinkStyles} className="move" to="/MainPage">
              Main Todo
            </NavLink>
            <NavLink style={NavLinkStyles} className="move" to="/">
              Home
            </NavLink>
            {/* <NavLink style={NavLinkStyles} className="move" to="/submitForm">
              Todo
            </NavLink> */}
            
          </form>
        </nav>
      </div>
    </>
  );
};
