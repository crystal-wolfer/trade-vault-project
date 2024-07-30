import { Navigate } from "react-router-dom"

export default function GuestGuard(props){
    const loggedInUser = localStorage.getItem("user");


    if(loggedInUser){
        console.log('redirecting auth');
        return <Navigate to = "/"></Navigate>
    }

    return(
        <>
            {props.children}
        </>
    )
}