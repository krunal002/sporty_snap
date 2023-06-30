import "./Bookmark.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext, PostContext } from "../../SportySnap";
import Users from "../../Components/Users";
import FunButttons from "../../Components/FunButtons";
import PopupView from "../../Components/Popup";

const Bookmark = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));
  const { postData } = useContext(PostContext);

  const { bookmarkData, saveBookmark, removeBookmark } =
    useContext(BookmarkContext);
  const { likeIncreament, likeDecreament } = useContext(PostContext);

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
          <div className="b-links">
            <Link to="/home" className="bookmark-links">
              <i class="fa fa-home" aria-hidden="true"></i>
            </Link>
            <Link to="/explore" className="bookmark-links">
              <i class="fa fa-suitcase" aria-hidden="true"></i>
            </Link>
            <Link to={`/profile/${currUser._id}`} className="bookmark-links">
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

        {!newBD.length ? (
          <div className="emptyBookmark">
            <h3>No post Bookmarked yet!</h3>
            <p>Please add some post to Bookmark</p>
          </div>
        ) : (
          <div className="primary-container">
            {/* post */}
            <div className="post-container-div">
              {newBD.map((post) => {
                return (
                  <div
                    key={post.id}
                    className="post-container container-format"
                  >
                    <div className="userDetails">
                      <div className="right-userDetails">
                        <div className="userImg">
                          <img
                            src={post.userImage}
                            alt="userImage"
                            className="userImage"
                          />
                        </div>

                        <div className="userInfo">
                          <p>
                            <b>@{post.username}</b>
                          </p>
                          <small>__{post.category}</small>
                        </div>
                      </div>
                      {/* functional Buttons */}
                      {post.username === currUser.username ? (
                        <div>
                          <FunButttons item={post} />
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>

                    <div className="postImage-container">
                      <img
                        src={post.img}
                        alt="sportyImage"
                        className="postImage"
                      />
                    </div>
                    <p>
                      <b>{post.username}__</b> {post.content}
                    </p>
                    <div className="opertionalBtn">
                      <div className="leftBtn">
                        <div
                          className="like sign"
                          onClick={() =>
                            post.likes.likedBy.find(
                              ({ username }) => username === currUser.username
                            )
                              ? likeDecreament(post)
                              : likeIncreament(post)
                          }
                        >
                          {post.likes.likedBy.find(
                            ({ username }) => username === currUser.username
                          ) ? (
                            <span className="redHeart">
                              <i class="fa fa-heart" aria-hidden="true">
                                {" "}
                                {post.likes.likeCount}
                              </i>
                            </span>
                          ) : (
                            <i class="fa fa-heart-o" aria-hidden="true">
                              {" "}
                              {post.likes.likeCount}
                            </i>
                          )}
                        </div>

                        <div className="comment sign">
                          <PopupView item={post} /> {post.comments.length}
                        </div>
                        <div className="share sign">
                          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </div>
                      </div>

                      <div
                        className="bookmark sign"
                        onClick={() =>
                          bookmarkData.includes(post._id)
                            ? removeBookmark(post)
                            : saveBookmark(post)
                        }
                      >
                        {bookmarkData.includes(post._id) ? (
                          <i class="fa fa-bookmark" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* user */}
            <Users />
          </div>
        )}
      </div>
    </div>
  );
};
export default Bookmark;
