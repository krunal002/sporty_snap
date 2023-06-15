import { useContext } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../SportySnap";

const Login = () => {
  const navigate = useNavigate(); 
  const { dispatch } = useContext(LoginContext)

  const clickHandler = () => {
    navigate("/home")
    console.log(localStorage.getItem("encodedToken"))
  }


  return (
    <div className="loginDiv">
      <h1>Login</h1>
      <div className="login-input-div">
        <div>
          <label className="loginLabels">
            <b>Username : </b>
          </label>
          <input
            type="text"
            className="loginInputs"
            placeholder="sidharth@gmail.com"
            onChange={(e) => dispatch({type:"username", payload:e.target.value})}
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
            onChange={(e) => dispatch({type:"password", payload:e.target.value})}
          />
        </div>
        <button className="loginBtn" onClick={() => clickHandler()}>
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
