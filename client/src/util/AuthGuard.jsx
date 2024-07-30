import { Navigate } from "react-router-dom";


export default function AuthGuard(props) {
  const loggedInUser = localStorage.getItem("user");

  if (!loggedInUser) {
    console.log(`redirecting not auth - ${loggedInUser}`);
    return <Navigate to="/login"></Navigate>;
  }

  return <>{props.children}</>;
}
