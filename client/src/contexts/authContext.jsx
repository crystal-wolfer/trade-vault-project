import { createContext } from "react";

import usePersistedState from "../hooks/usePersistedState.js";

export const AuthContext = createContext({
  email: "",
  accessToken: "authState.accessToken",
  firstName: "",
  userId: "",
  isAuth: false,
  updateAuthState: () => null,
});

export function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState('auth', {});

  const updateAuthState = (state) => {
    setAuthState(state);
  };

  const contextData = {
    email: authState.email,
    accessToken: authState.accessToken,
    firstName: authState.firstName,
    userId: authState._id,
    isAuth: !!authState.email,
    updateAuthState,
  };

  return ( 
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>)
}
