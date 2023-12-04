import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  BsFillCheckCircleFill,
  BsPlusCircleFill,
  BsTrash3Fill,
} from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

import * as client from "./client";
import { deleteUser } from "./client";
import {useNavigate} from "react-router";

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });

  const navigate = useNavigate();

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers((prevUsers) => [newUser, ...prevUsers]);
      setUser({ username: "", password: "", role: "USER" }); // Clear the input fields after creating a user
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  const selectUser = async (selectedUser) => {
    try {
      const updatedUser = await client.findUserById(selectedUser._id);
      setUser(updatedUser);
    } catch (err) {
      console.error("Error selecting user:", err);
    }
  };

  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u._id === user._id ? user : u)),
      );
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const serverCurrentUser = await client.account();
      setCurrentUser(serverCurrentUser);
    } catch (err) {
      console.error("Error fetching current user:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const serverUsers = await client.findAllUsers();
      setUsers(serverUsers);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchCurrentUser();
  }, [setCurrentUser]);

  return (
    <div>
      {currentUser && currentUser.role === "ADMIN" && (
        <>
          <div>
            <h1>User List</h1>
            <h2>
              <p>Current User: {currentUser.username} </p> Role:{" "}
              {currentUser.role}
            </h2>
            <table className="table">
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>Password</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-control"
                      value={user.username}
                      placeholder="Username"
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          username: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          password: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      placeholder="first Name"
                      value={user.firstName}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          firstName: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      placeholder="Last Name"
                      value={user.lastName}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          lastName: e.target.value,
                        }))
                      }
                    />
                  </td>
                  <td>
                    <select
                      className="form-control"
                      value={user.role}
                      onChange={(e) =>
                        setUser((prevUser) => ({
                          ...prevUser,
                          role: e.target.value,
                        }))
                      }
                    >
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                      <option value="FACULTY">Faculty</option>
                      <option value="STUDENT">Student</option>
                    </select>
                  </td>
                  <td>
                    <BsPlusCircleFill
                      className="me-2 text-danger fs-1 text"
                      onClick={createUser}
                    />
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="list-group">
            {users.map((user) => (
              <div>
                <Link
                  key={user._id}
                  to=null
                  className="list-group-item"
                >
                  {user.username}
                  <button className="float-end btn btn-warning me-2">
                    <FaPencilAlt onClick={() => {
                      selectUser(user)
                      navigate(`/project/users/${user._id}`)
                    }} />
                  </button>
                </Link>
                <button className="float-end btn btn-danger me-2">
                  <BsTrash3Fill
                    onClick={(event) => {
                      deleteUser(user._id);
                      fetchUsers();
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      {currentUser && currentUser.role !== "ADMIN" && (
        <h2>
          <p>Current User: {currentUser.username} </p> Role: {currentUser.role}
          <p>Only Admin can access this page</p>
        </h2>
      )}
    </div>
  );
}

export default UserList;
