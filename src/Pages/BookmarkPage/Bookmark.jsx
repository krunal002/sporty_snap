import "./Bookmark.css";
import { useContext } from "react";
import { BookmarkContext, PostContext } from "../../SportySnap";
import UserCard from "../../Cards/UserCard";
import LinkCard from "../../Cards/LinkCard";
import PostCard from "../../Cards/PostCard";

const Bookmark = () => {
  const { postData } = useContext(PostContext);

  const { bookmarkData } = useContext(BookmarkContext);

  const newBD = postData.filter((post) => bookmarkData.includes(post._id));

  return (
    <div className="bookmark-container">
      <div className="home-container">
        <div className="primary-container">
          {/* links */}
          <div className="link-wrapper">
            <LinkCard />
          </div>

          {/* post */}
          <div className="post-wrapper">
            {!newBD.length ? (
              <div className="emptyBookmark">
                <h3>Nothing to show!</h3>
                <p>Please add some post to Bookmark</p>
              </div>
            ) : (
              <div>
                <PostCard item={newBD} />
              </div>
            )}
          </div>

          {/* user */}
          <div className="users-wrapper">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bookmark;
