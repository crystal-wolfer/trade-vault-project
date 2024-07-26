import { createContext } from "react";

export const AuthContext = createContext({
  email: "",
  accessToken: "authState.accessToken",
  firstName: "",
  isAuth: false,
  updateAuthState: () => null,
});
