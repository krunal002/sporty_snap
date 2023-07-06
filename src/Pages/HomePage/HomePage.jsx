import "./HomePage.css";

import Links from "../../Cards/LinkCard";
import Users from "../../Cards/UserCard";
import PostCard from "../../Cards/PostCard";

const Home = () => {
  return (
    <div className="home-container">
      <div className="primary-container">
        {/* Linnks */}
        <Links />

        {/* post */}
        <PostCard />

        {/* user */}
        <Users />
      </div>
    </div>
  );
};
export default Home;
