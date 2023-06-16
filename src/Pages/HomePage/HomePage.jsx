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
        <Link to="/profile"> Profile </Link>
        <Link to="/login"> Login </Link>
      </div>

      <div className="post-container-div">
        {postData.map((post) => (
          <div key={post.id} className="post-container">
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
        {userData.map((user) => (
          <div key={user.id} className="user-container">
            <p>
              <b>
                {user.firstName} {user.lastName}
              </b>
            </p>
            <p>@{user.username}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
export default Home;
