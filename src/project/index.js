import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import UserList from "./users/list";
import Nav from "../Nav";
import UserDetails from "./users/details";
import SignIn from "./users/signin";
import Account from "./users/account";
import SignUp from "./users/signup";

function Project() {
  const { pathname } = useLocation();

  const getPageTitle = () => {
    switch (true) {
      case pathname.includes("signin"):
        return "Sign In";
      case pathname.includes("signup"):
        return "Sign Up";
      case pathname.includes("account"):
        return "Account";
      case pathname.includes("users"):
        return "User List";
      default:
        return "Home";
    }
  };

  return (
    <div className="container-fluid">
      <Nav />
      <h1>{getPageTitle()}</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link
              to="/project/"
              className={`list-group-item ${
                pathname === "/project/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/project/signin"
              className={`list-group-item ${
                pathname.includes("signin") ? "active" : ""
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/project/signup"
              className={`list-group-item ${
                pathname.includes("signup") ? "active" : ""
              }`}
            >
              Sign Up
            </Link>
            <Link
              to="/project/account"
              className={`list-group-item ${
                pathname.includes("account") ? "active" : ""
              }`}
            >
              Account
            </Link>
            <Link
              to="/project/users"
              className={`list-group-item ${
                pathname.includes("users") ? "active" : ""
              }`}
            >
              Users
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
