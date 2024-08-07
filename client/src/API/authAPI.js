import * as requester from "./serverRequester.js";

//const BASE_URL = "http://localhost:3030/users";
const BASE_URL = `${import.meta.env.VITE_API_URL}/users`;

export const register = async (data) => {
  try {
    const result = await requester.post(`${BASE_URL}/register`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const login = async (data) => {
  try {
    const result = await requester.post(`${BASE_URL}/login`, data);
    return result;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  requester.get(`${BASE_URL}/logout`);
};
