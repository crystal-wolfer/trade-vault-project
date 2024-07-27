import { createContext } from "react";

export const AuthContext = createContext({
  email: "",
  accessToken: "authState.accessToken",
  firstName: "",
  userId: "",
  isAuth: false,
  updateAuthState: () => null,
});


