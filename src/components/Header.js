import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header.css";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="list">
        <ul>
          <Link
            style={{
              color: location.pathname === "/" ? "red" : "white",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ color: location.pathname === "/cart" ? "red" : "white" }}
            to="/cart"
          >
            Cart
          </Link>
          <Link
            style={{
              color: location.pathname === "/signin" ? "red" : "white",
            }}
            to="/signin"
          >
            SignIn
          </Link>
          <Link
            style={{
              color: location.pathname === "/signout" ? "red" : "white",
            }}
            to="/signout"
          >
            SignOut
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
