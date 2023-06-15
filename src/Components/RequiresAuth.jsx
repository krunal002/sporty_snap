import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
    const location = useLocation();

    return localStorage.getItem("encodedToken") !== "undefined" ? children : <Navigate to="/login" state={{ from:location }} />
}
export default RequiresAuth;