import { useContext } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../SportySnap";

const Login = () => {
  // const navigate = useNavigate(); navigate("/login");
  const { loginData } = useContext(LoginContext)
  return (
    <div className="loginDiv">
      <h1>Login</h1>
      <div className="login-input-div">
        <div>
          <label className="loginLabels">
            <b>Email : </b>
          </label>
          <input
            type="text"
            className="loginInputs"
            placeholder="sidharth@gmail.com"
          />
        </div>
        <div>
          <label className="loginLabels">
            <b>Password : </b>
          </label>
          <input
            type="password"
            className="loginInputs"
            placeholder="********"
          />
        </div>
        <button className="loginBtn" onClick={() => console.log(loginData)}>
          Sign In
        </button>
        <Link to="/signup" className="login-landing">
          Create new account
        </Link>
      </div>
    </div>
  );
};
export default Login;
