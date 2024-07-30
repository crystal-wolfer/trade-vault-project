import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/authContext.js"
import { useContext } from "react"

export default function AuthGuard(props){
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        console.log('redirecting not auth');
        return <Navigate to = "/login"></Navigate>
    }

    return(
        <>
            {props.children}
        </>
    )
}