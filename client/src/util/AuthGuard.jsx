import { Navigate } from "react-router-dom";


export default function AuthGuard(props) {
  const loggedInUser = localStorage.getItem("user");

  if (!loggedInUser) {
    return <Navigate to="/login"></Navigate>;
  }

  return <>{props.children}</>;
}
