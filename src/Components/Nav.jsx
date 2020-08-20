import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import LoginButton from "./Login";
import { Link } from "react-router-dom";
export const Nav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          {isAuthenticated && (
            <li className="nav-item ">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          )}
        </ul>
        <span className="form-inline my-2 my-lg-0">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </span>
      </div>
    </nav>
  );
};
