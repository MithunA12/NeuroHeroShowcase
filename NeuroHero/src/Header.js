import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Import your logo image
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic if needed
    // For example: clear authentication state, redirect to login page, etc.
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container d-flex justify-content-between"> {/* Use d-flex and justify-content-between */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Your Logo" className="logo" />&nbsp;
        </Link>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
