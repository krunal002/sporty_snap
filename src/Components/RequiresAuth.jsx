import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const RequiresAuth = ({ children }) => {
    const location = useLocation();
    const { token } = useContext( LoginContext )

    return token ? children : <Navigate to="/login" state={{ from:location }} />
}
export default RequiresAuth;