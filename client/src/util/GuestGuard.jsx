import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/authContext.js"
import { useContext } from "react"

export default function GuestGuard(props){
    const {isAuth} = useContext(AuthContext)

    if(isAuth){
        return <Navigate to = "/"></Navigate>
    }

    return(
        <>
            {props.children}
        </>
    )
}