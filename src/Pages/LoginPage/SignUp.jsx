import "./LoginPage.css"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className="loginDiv">
      <h1>Sign Up...</h1>
      <div className="login-input-div">
        <div>
          <label className="loginLabels">
            <b>First Name : </b>
          </label>
          <input
            type="text"
            className="loginInputs"
            placeholder="sidharth"
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
          />
        </div>
        <div>
          <label className="loginLabels">
            <b>Email : </b>
          </label>
          <input
            type="email"
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
        <button className="loginBtn" onClick={() => navigate("/login")}>
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
