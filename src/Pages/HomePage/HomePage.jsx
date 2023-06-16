import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../SportySnap";

const Home = () => {
  const { postData } = useContext(PostContext)

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => console.log( postData )}>click</button>

      { postData.map((post) => (
        <div>
          <h4>user : {post.username}</h4>
          <p>content : {post.content}</p>
        </div>
      ))}

      <Link to="/profile"> Profile </Link>
      <Link to="/login"> Login </Link>
    </div>
  );
};
export default Home;