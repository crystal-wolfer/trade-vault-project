import { createContext } from "react";

export const AuthContext = createContext({
  email: "",
  accessToken: "",
  firstName: "",
  _id: "",
  isAuth: false,
  updateAuthState: () => null,
});


