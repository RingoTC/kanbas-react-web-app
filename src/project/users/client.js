import axios from "axios";

const request = axios.create();

const API_BASE = process.env.REACT_APP_BASE_URL;
const USER_API = `${API_BASE}/api/users`;

export const signIn = async (credentials) => {
  const response = await request.post(`${USER_API}/signin`, credentials, {
    withCredentials: true,
  });
  return response.data;
};

export const signOut = async () => {
  const response = await request.post(`${USER_API}/signout`, null, {
    withCredentials: true,
  });
  return response.data;
};

export const signup = async (credentials) => {
  const response = await request.post(`${USER_API}/signup`, credentials, {
    withCredentials: true,
  });
  return response.data;
};

export const account = async () => {
  try {
    const response = await request.post(`${USER_API}/account`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error("Permission denied:", error.response.data);
    } else {
      console.error("An error occurred:", error.message);
      throw error;
    }
  }
};

export const createUser = async (user) => {
  const response = await request.post(USER_API, user, {
    withCredentials: true,
  });
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(USER_API, {
    withCredentials: true,
  });
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await request.get(`${USER_API}/${userId}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateUser = async (userId, user) => {
  const response = await request.put(`${USER_API}/${userId}`, user, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await request.delete(`${USER_API}/${userId}`, {
    withCredentials: true,
  });
  return response.data;
};

export default {
  signIn,
  signOut,
  signup,
  account,
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
};
