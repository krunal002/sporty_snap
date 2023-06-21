import "./Bookmark.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext, PostContext } from "../../SportySnap";
// import Links from "../../Components/Links";
import Users from "../../Components/Users";

const Bookmark = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));
  const [likeValue, setLikeValue] = useState(false);
  const { postData } = useContext(PostContext);

  const { bookmarkData, saveBookmark } = useContext(BookmarkContext);
  const { likeIncreament, likeDecreament } = useContext(PostContext);

  const likeHandler = (post) => {
    // console.log(postData.likes.likeCount)
    setLikeValue(!likeValue);
    likeValue ? likeDecreament(post) : likeIncreament(post);
  };

  const newBD = postData.filter((post) => bookmarkData.includes(post._id));

  return (
    <div className="home-container">
      <div className="nav-container">
        <div className="nav-heading">
          <h1>
            <i class="fa fa-bookmark" aria-hidden="true"></i> Bookmarks
          </h1>
        </div>
        <div className="b-links">
          <Link to="/home" className="bookmark-links">
            <i class="fa fa-home" aria-hidden="true"></i>
          </Link>
          <Link to="/explore" className="bookmark-links">
            <i class="fa fa-suitcase" aria-hidden="true"></i>
          </Link>
          <Link to="/profile" className="bookmark-links">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </Link>
        </div>
        <div>
          <b className="bookmark-links">Hi, {currUser.firstName}</b>
          <Link to="/login" className="bookmark-links">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </Link>
        </div>
      </div>

      <div className="primary-container">
        {/* Linnks */}
        {/* <Links /> */}

        {/* post */}
        <div className="post-container-div">
          {newBD.map((post) => {
            return (
              <div key={post.id} className="post-container container-format">
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

                <div className="postImage-container">
                  <img src={post.img} alt="sportyImage" className="postImage" />
                </div>
                <p>content : {post.content}</p>
                <div className="opertionalBtn">
                  <div className="leftBtn">
                    <div
                      className="like sign"
                      onClick={() => likeHandler(post)}
                    >
                      {likeValue ? (
                        <span className="redHeart">
                          <i class="fa fa-heart" aria-hidden="true">
                            {" "}
                          </i>
                        </span>
                      ) : (
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      )}{" "}
                      {post.likes.likeCount}
                    </div>

                    <div className="comment sign">
                      <i class="fa fa-comment-o" aria-hidden="true">
                        {" "}
                        {post.comments.length}
                      </i>
                    </div>
                    <div className="share sign">
                      <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div
                    className="bookmark sign"
                    onClick={() => saveBookmark(post)}
                  >
                    {}
                    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* user */}
        <Users />
      </div>
    </div>
  );
};
export default Bookmark;
