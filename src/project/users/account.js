import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

function Account() {
  const [account, setAccount] = useState({});
  const navigate = useNavigate();

  const fetchAccount = async () => {
    try {
      const serverAccount = await client.account();
      setAccount(serverAccount);
    } catch (error) {
      navigate("/project/signin");
    }
  };

  const updateAccount = async () => {
    try {
      const serverUpdateUser = await client.updateUser(account._id, account);
    } catch (error) {
      console.error("Error updating account:", error);
    }
  };

  const signOut = async () => {
    try {
      const serverSignOut = await client.signOut();
      navigate("/project/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  const handleInputChange = (field, value) => {
    setAccount({ ...account, [field]: value });
  };

  return (
    <div>
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control"
            value={account.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          <input
            className="form-control"
            value={account.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          <input
            className="form-control"
            value={account.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            value={account.dob}
            onChange={(e) => handleInputChange("dob", e.target.value)}
          />
          <input
            className="form-control"
            value={account.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <select
            className="form-control"
            onChange={(e) => handleInputChange("role", e.target.value)}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button className="btn btn-primary" onClick={() => updateAccount()}>
            Update
          </button>

          <button onClick={() => signOut()} className="btn btn-danger">
            Sign out
          </button>
        </div>
      )}
      {!account && <p>Account not found</p>}
    </div>
  );
}

export default Account;
