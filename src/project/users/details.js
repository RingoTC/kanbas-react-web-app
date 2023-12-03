import { useParams, useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import * as client from "./client";

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserById = async (userId) => {
    try {
      const serverUser = await client.findUserById(userId);
      setUser(serverUser);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async () => {
    try {
      await client.updateUser(userId, user);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async () => {
    try {
      await client.deleteUser(userId);
      navigate("/project/users");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUserById(userId);
  }, []);

  return (
    <div>
      <h2>User Detail</h2>
      {loading && <p>Loading...</p>}
      {user && (
        <div>
          <p>
            Username:
            <input
              type="text"
              className="form-control"
              value={user.username}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  username: e.target.value,
                }))
              }
            />
          </p>
          <p>
            First Name:
            <input
              type="text"
              className="form-control"
              value={user.firstName}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  firstName: e.target.value,
                }))
              }
            />
          </p>
          <p>
            Last Name:
            <input
              type="text"
              className="form-control"
              value={user.lastName}
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  lastName: e.target.value,
                }))
              }
            />
          </p>
          <p>
            Role:
            <select
              className="form-control"
              value={user.role}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, role: e.target.value }))
              }
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </p>
          <button
            className="btn btn-primary"
            onClick={updateUser}
            style={{ marginTop: "10px" }}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteUser}
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
