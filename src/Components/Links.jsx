import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="link-container-div">
      <div className="link-container container-format">
        <Link to="/home" className="home-links">
          <i class="fa fa-home" aria-hidden="true"></i> Home
        </Link>
        <Link to="/#" className="home-links">
          <i class="fa fa-suitcase" aria-hidden="true"></i> Explore
        </Link>
        <Link to="/bookmark" className="home-links">
          <i class="fa fa-bookmark" aria-hidden="true"></i> Bookmark
        </Link>
        <Link to="/profile" className="home-links">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i> Profile
        </Link>
        <Link to="/login" className="home-links">
          <i class="fa fa-sign-in" aria-hidden="true"></i> Login
        </Link>
      </div>
    </div>
  );
};
export default Links;
