import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../SportySnap";

const Links = () => {
  const { state } = useContext(LoginContext)
  const navigate = useNavigate()

  return (
    <div className="link-container-div">
      <div className="link-container container-format">
        <NavLink to="/home" className="home-links">
          <i class="fa fa-home" aria-hidden="true"></i> Home
        </NavLink>
        <NavLink to="/explore" className="home-links">
          <i class="fa fa-suitcase" aria-hidden="true"></i> Explore
        </NavLink>
        <NavLink to="/bookmark" className="home-links">
          <i class="fa fa-bookmark" aria-hidden="true"></i> Bookmark
        </NavLink>
        <NavLink to={`/profile/${state.userLoggedIn?._id}`} className="home-links">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i> Profile
        </NavLink>
        <NavLink to="/login" className="home-links">
          <i class="fa fa-sign-in" aria-hidden="true"></i> Login
        </NavLink>
        
      </div>

      {/* css in index.css */}
      <div className="loggedInUser" onClick={() => navigate(`/profile/${state.userLoggedIn._id}`)}>
        <div >
          <img src={state.userLoggedIn.userImage} alt="userImage" className="pic"/>
        </div>
        <div className="details">
        <span>@{state.userLoggedIn.username}</span>
        <span><b>{state.userLoggedIn.firstName} {state.userLoggedIn.lastName}</b></span>
        </div>
        
      </div>
    </div>
  );
};
export default Links;
