import "./HomePage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../SportySnap";
import { UserContext } from "../../Context/userContext";

const Home = () => {
  const { postData } = useContext(PostContext);
  const { userData } = useContext(UserContext);

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <button onClick={() => console.log(userData)}>click</button>

      <div className="primary-container">
        <div className="link-container-div">
          <div className="link-container container-format">
            <Link to="/home" className="home-links">
              <i class="fa fa-home" aria-hidden="true"></i> Home
            </Link>
            <Link to="/#" className="home-links">
              <i class="fa fa-suitcase" aria-hidden="true"></i> Explore
            </Link>
            <Link to="/profile" className="home-links">
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

        <div className="post-container-div">
          {postData.map((post) => (
            <div key={post.id} className="post-container container-format">
              <div className="userDetails">
                <div className="userImg">
                  <img
                    src={post.userImage}
                    alt="userImage"
                    className="userImage"
                  />
                </div>

                <div className="userInfo">
                  <h4>@{post.username}</h4>
                </div>
              </div>

              <img src={post.img} alt="sportyImage" className="postImage" />
              <p>content : {post.content}</p>
            </div>
          ))}
        </div>

        <div className="user-container-div">
          <div className="user-container container-format">
            {userData.map((user) => (
              <div key={user.id} className="userDetails userDetails-margin">
                <div>
                  <img
                    src={user.userImage}
                    alt="userImage"
                    className="userImage"
                  />
                </div>

                <div className="userInfo">
                  <p>
                    <b>
                      {user.firstName} {user.lastName}
                    </b>
                  </p>
                  <p>@{user.username}</p>
                </div>

                <div className="follow-user">
                  <b>Follow</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
