import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landingDiv">
      <div className="leftContainer-landing">
        <div className="headingDiv">
          <h1 className="heading">
            <span className="headingSpan">Sporty</span> Snap
          </h1>
          <p className="tagline">
            <small>Level up your Sportsman Spirit!</small>
          </p>
        </div>
        <div className="landingContent">
          <p>
            <small>
              <span className="largeFont">Click</span> outdoor sports
            </small>
          </p>
          <p>
            <small>
              <span className="largeFont">SHARE</span> what you play
            </small>
          </p>
          <p>
            <small>
              <span className="largeFont">CONNECT</span> with Sportsmen
            </small>
          </p>
        </div>
        <div className="landingBtnDiv">
          <button onClick={() => navigate("/login")} className="landingBtn">
            <b>Join Now</b>
          </button>
          <Link to="/login" className="login-landing">Already have an account?</Link>
        </div>
      </div>
      <div className="rightContainer-landing">
        <img
          src="https://i.pinimg.com/736x/4a/cd/d8/4acdd87b77d1c9ea547b1ff05614e0de.jpg"
          alt="landingImage"
          className="landingImage"
        />
      </div>
    </div>
  );
};
export default LandingPage;
