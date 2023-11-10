import "./HomePage.css";

import Links from "../../Cards/LinkCard";
import Users from "../../Cards/UserCard";
import PostCard from "../../Cards/PostCard";
import CreatePost from "../../Cards/CreatePostCard";

import { useContext } from "react";
import { PostContext } from "../../SportySnap";

const Home = () => {
  const { postData } = useContext(PostContext);

  const homeData = [...postData].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="home-container">
      <div className="primary-container">
        {/* Linnks */}
        <div className="link-wrapper">
          <Links />
        </div>

        {/* post */}
        <div>
          <CreatePost />
          <PostCard item={homeData} />
        </div>

        {/* user */}
        <div className="users-wrapper">
          <Users />
        </div>
      </div>
    </div>
  );
};
export default Home;
