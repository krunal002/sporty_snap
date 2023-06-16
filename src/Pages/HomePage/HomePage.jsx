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
          <h4>userId : {user.username}</h4>
          <p>name : {user.firstName} {user.lastName}</p>
        </div>
      ))}
      <hr />

      <hr />
      {postData.map((post) => (
        <div key={post.id}>
          <h4>user : {post.username}</h4>
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
