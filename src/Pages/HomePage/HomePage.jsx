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

  // const { userProfile } = useContext(UserContext);

  // const getSelectedPosts = () => {
  //   try {
  //     const allFollowedUsers1 =
  //       userProfile && userProfile?.following.map((user) => user.username);
  //     const followedUsersPosts = postData.filter((post) =>
  //       allFollowedUsers1.includes(post.username)
  //     );
  //     return followedUsersPosts;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const selectedPosts = getSelectedPosts() ?? homeData;
  // console.log("hello", selectedPosts);
  // useEffect(() => console.log("hello", selectedPosts), []);

  return (
    <div className="home-container">
      <div className="primary-container">
        {/* Linnks */}
        <Links />

        {/* post */}
        <div>
          <CreatePost />
          <PostCard item={homeData} />
        </div>

        {/* user */}
        <Users />
      </div>
    </div>
  );
};
export default Home;
