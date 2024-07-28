import { createContext } from "react";

export const AuthContext = createContext({
  email: "",
  accessToken: "authState.accessToken",
  firstName: "",
  _id: "",
  isAuth: false,
  updateAuthState: () => null,
});


