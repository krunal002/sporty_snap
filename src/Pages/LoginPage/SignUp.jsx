import { useContext } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../SportySnap";

const SignUp = () => {
  const { dispatch, postSignUpData } = useContext(LoginContext);
  const navigate = useNavigate();

  const signUpHandler = () => {
    navigate("/login");
    postSignUpData();
  }

  return (
    <div className="loginDiv">
      <h1>Sign Up</h1>
      <div className="login-input-div">
        <div>
          <label className="loginLabels">
            <b>First Name : </b>
          </label>
          <input
            type="text"
            className="loginInputs"
            placeholder="Sidharth"
            value={""}
            onChange={(e) =>
              dispatch({ type: "firstName", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label className="loginLabels">
            <b>Last Name : </b>
          </label>
          <input
            type="text"
            className="loginInputs"
            placeholder="Shikhare"
            value={""}
            onChange={(e) =>
              dispatch({ type: "lastName", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label className="loginLabels">
            <b>Username : </b>
          </label>
          <input
            type="email"
            className="loginInputs"
            placeholder="sidharth002"
            value={""}
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
            value={""}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
          />
        </div>
        <button className="loginBtn" onClick={signUpHandler}>
          Sign Up
        </button>
        <Link to="/login" className="login-landing">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
