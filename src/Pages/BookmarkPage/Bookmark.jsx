import "./Bookmark.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext, PostContext } from "../../SportySnap";
import UserCard from "../../Cards/UserCard";
import LinkCard from "../../Cards/LinkCard";
import PostCard from "../../Cards/PostCard";

const Bookmark = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));
  const { postData } = useContext(PostContext);

  const { bookmarkData } = useContext(BookmarkContext);

  const newBD = postData.filter((post) => bookmarkData.includes(post._id));

  return (
    <div className="bookmark-container">
      <div className="home-container">
        <div className="nav-container">
          <div className="nav-heading">
            <h1>
              <i class="fa fa-bookmark" aria-hidden="true"></i> Bookmarks
            </h1>
          </div>

          <div>
            <b className="bookmark-links">Hi, {currUser.firstName}</b>
            <Link to="/login" className="bookmark-links">
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </Link>
          </div>
        </div>

        <div className="primary-container">
          {/* links */}
          <LinkCard />

          {/* post */}
          {!newBD.length ? (
            <div className="emptyBookmark">
              <h3>Nothing to show!</h3>
              <p>Please add some post to Bookmark</p>
            </div>
          ) : (
            <PostCard item={newBD}/>
          )}

          {/* user */}
          <UserCard />
        </div>
      </div>
    </div>
  );
};
export default Bookmark;
