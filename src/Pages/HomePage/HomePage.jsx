import "./HomePage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../SportySnap";
import { UserContext } from "../../Context/userContext";

const Home = () => {
  const { postData } = useContext(PostContext);
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => console.log(userData)}>click</button>

      <hr />
      {userData.map((user) => (
        <div key={user.id}>
          <div>
            <b>
              {user.firstName} {user.lastName}
            </b>
          </div>
          <div>@{user.username}</div>
        </div>
      ))}
      <hr />

      <hr />
      {postData.map((post) => (
        <div key={post.id} className="post-container">
          <h4>user : {post.username}</h4>
          <img src={post.img} alt="sportyImage" className="postImage" />
          <p>content : {post.content}</p>
        </div>
      ))}
      <hr />

      <Link to="/profile"> Profile </Link>
      <Link to="/login"> Login </Link>
    </div>
  );
};
export default Home;
