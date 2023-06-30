import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../SportySnap";

const Links = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"))
  const { state } = useContext(LoginContext)
  return (
    <div className="link-container-div">
      <div className="link-container container-format">
        <Link to="/home" className="home-links">
          <i class="fa fa-home" aria-hidden="true"></i> Home
        </Link>
        <Link to="/explore" className="home-links">
          <i class="fa fa-suitcase" aria-hidden="true"></i> Explore
        </Link>
        <Link to="/bookmark" className="home-links">
          <i class="fa fa-bookmark" aria-hidden="true"></i> Bookmark
        </Link>
        <Link to={`/profile/${state.userLoggedIn._id}`} className="home-links">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i> Profile
        </Link>
        <Link to="/login" className="home-links">
          <i class="fa fa-sign-in" aria-hidden="true"></i> Login
        </Link>
      </div>

      {/* css in index.css */}
      <div className="loggedInUser">
        <div >
          <img src={loggedInUser.userImage} alt="userImage" className="pic"/>
        </div>
        <div className="details">
        <span>@{loggedInUser.username}</span>
        <span><b>{loggedInUser.firstName} {loggedInUser.lastName}</b></span>
        </div>
        
      </div>
    </div>
  );
};
export default Links;
