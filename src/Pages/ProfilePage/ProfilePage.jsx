import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./ProfilePage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LoginContext, PostContext, UserContext } from "../../SportySnap";

import PostCard from "../../Cards/PostCard";

const Profile = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [currUser, setCurrUser] = useState({});

  const { dispatch } = useContext(LoginContext);
  const { postData } = useContext(PostContext);

  const totalPosts = postData.filter(
    ({ username }) => username === currUser.username
  );

  // Get required user
  const { userId } = useParams();

  const getUser = async () => {
    try {
      const res = await axios.get(`/api/users/${userId}`);
      const result = res.data.user;

      if (loggedInUser.username === result.username) {
        dispatch({ type: "userData", payload: result });
      }
      setCurrUser(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  const { followUser, unfollowUser } = useContext(UserContext);

  const followHandler = (user) => {
    user.followers.map(({ username }) =>
      username.includes(loggedInUser.username)
    ).length
      ? unfollowUser(user)
      : followUser(user);
    getUser();
  };

  return (
    <div>
      <div className="container">
        <div className="homeLink" onClick={() => navigate("/home")}>
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
        <div className="exploreLink" onClick={() => navigate("/explore")}>
          <i class="fa fa-suitcase" aria-hidden="true"></i>
        </div>
        <div className="bookmarkLink" onClick={() => navigate("/bookmark")}>
          <i class="fa fa-bookmark" aria-hidden="true"></i>
        </div>

        <div className="profile-container">
          <div className="profile-details">
            <img
              src={currUser.userImage}
              alt="profileImage"
              className="profileImage"
            />
            <div className="profileUsername">@{currUser.username}</div>
            <div className="profileName">
              <b>
                {currUser.firstName} {currUser.lastName}
              </b>
            </div>

            <button
              className="profileEditBtn"
              onClick={
                () =>
                  loggedInUser._id === currUser._id
                    ? navigate("/edit-user")
                    : followHandler(currUser) /*console.log("right")*/
              }
            >
              {loggedInUser._id === currUser._id ? (
                <b>Edit Profile</b>
              ) : currUser?.followers?.map(({ username }) =>
                  username.includes(loggedInUser.username)
                ).length ? (
                <b>Unfollow</b>
              ) : (
                <b>Follow</b>
              )}
            </button>

            <p>
              <b>{currUser.bio}</b>
            </p>
            <Link
              to={currUser.portfolioURL}
              className="user-link"
              target="_blank"
            >
              {currUser.portfolioURL}
            </Link>

            <div className="userData-container">
              <div className="userData">
                <span>{totalPosts.length}</span>
                <span>Posts</span>
              </div>
              <div className="userData">
                <span>{currUser?.following?.length}</span>
                <span>Following</span>
              </div>
              <div className="userData">
                <span>{currUser?.followers?.length}</span>
                <span>Followers</span>
              </div>
            </div>

            {/* user posts */}
            <div>
              <h2 className="profile-postsDetails">
                Your Posts : {totalPosts.length}
              </h2>
              <PostCard item={totalPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
