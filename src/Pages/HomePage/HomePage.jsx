import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../SportySnap";

const Home = () => {
  const { posts } = useContext(PostContext)

  return (
    <div>
      <h1>Home Page</h1>
      <h3>{posts}</h3>

      <Link to="/profile"> Profile </Link>
      <Link to="/login"> Login </Link>
    </div>
  );
};
export default Home;
