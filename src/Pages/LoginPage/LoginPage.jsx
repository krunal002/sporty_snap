import { useContext } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../SportySnap";

const Login = () => {
  const navigate = useNavigate();
  const { state, dispatch, postLoginData, postTestUser, token, setToken } =
    useContext(LoginContext);

  const currUser = state.userData
  const clickHandler = () => {
    postLoginData();
    setTimeout(() => navigate("/home"), 500);
  };

  const testUserHandler = () => {
    postTestUser();
    setTimeout(() => navigate("/home"), 500);
  };

  const logoutHandler = () => {
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("user");
    dispatch({ type: "username", payload: "" });
    dispatch({ type: "password", payload: "" });
    setToken(false);
  };

  return (
    <div>
      <div className="login-home-link">
        <Link to="/home">
          <i class="fa fa-home" aria-hidden="true">_Home</i>
        </Link>
      </div>
      {token ? (
        <div className="logoutDiv">
          <img
            src={currUser.userImage}
            alt="userImage"
            className="login-userImage"
          />
          <p>
            <b>Name : </b>
            {currUser.firstName} {state.userData.lastName}
          </p>
          <p>
            <b>Username : </b>
            {currUser.username}
          </p>
          <button className="logoutBtn" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
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
                placeholder="sidharth002"
                value={state.userame}
                onChange={(e) =>
                  dispatch({ type: "username", payload: e.target.value })
                }
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
                value={state.password}
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
              />
            </div>
            <div className="button-container">
              <button className="loginBtn" onClick={clickHandler}>
                Sign In
              </button>
              <button className="loginBtn" onClick={testUserHandler}>
                Login as Test User
              </button>
              <Link to="/signup" className="login-landing">
                Create new account
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
