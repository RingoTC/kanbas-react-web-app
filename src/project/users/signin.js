import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as client from "./client";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();
  const signOut = async () => {
    try {
      const serverSignOut = await client.signOut();
      navigate(0);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await client.account();
        if (user) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  const signIn = async () => {
    try {
      const credentials = { username, password };
      const status = await client.signIn(credentials);
      console.log(status);

      setIsLoggedIn(true);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      {error && <div className="alert alert-danger">{error.message}</div>}

      {isLoggedIn ? (
        <div>
          <p>You are already logged in.</p>
          <button onClick={() => signOut()} className="btn btn-danger">
            Sign out
          </button>
        </div>
      ) : (
        <>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => signIn()}
            className="btn btn-primary"
            disabled={!username || !password} // Disable button if fields are empty
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
}

export default SignIn;
