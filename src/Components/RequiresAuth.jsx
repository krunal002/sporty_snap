import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const RequiresAuth = ({ children }) => {
    const location = useLocation();
    const { state } = useContext( LoginContext )
    console.log("isLoggedIn : ",state.isLoggedIn)

    return state.isLoggedIn ? children : <Navigate to="/login" state={{ from:location }} />
}
export default RequiresAuth;