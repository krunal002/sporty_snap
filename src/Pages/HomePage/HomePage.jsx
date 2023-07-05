import "./HomePage.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { BookmarkContext, LoginContext, PostContext } from "../../SportySnap";
import Links from "../../Components/Links";
import Users from "../../Components/Users";
import FunButttons from "../../Components/FunButtons";
import PopupView from "../../Components/Popup";

const Home = () => {
  const { state } = useContext(LoginContext)
  const currUser = state.userLoggedIn;

  const notify = () =>
    toast.warn("Your post is Empty!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const { postData, likeIncreament, likeDecreament, createPost } =
    useContext(PostContext);

  const { saveBookmark, removeBookmark, bookmarkData } =
    useContext(BookmarkContext);

  const [contentHandler, setContentHandler] = useState("");

  const homeData = [...postData].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="home-container">
      {/* <h1>Home  Page</h1> */}
      <ToastContainer />
      {/* <p>Hello, {currUser.firstName}</p> */}

      <div className="primary-container">
        {/* Linnks */}
        <Links />

        {/* post */}
        <div className="post-container-div">
          <div className="createPost-container  container-format">
            <div>
              <img
                src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=360"
                alt="userImg"
                className="createPost-image"
              />
              <textarea
                id="text-input"
                rows="8"
                cols="40"
                value={contentHandler}
                onChange={(e) => setContentHandler(e.target.value)}
                placeholder="Create Sporty_snap...."
                className="createPost-textarea"
              ></textarea>
            </div>
            <button
              type="submit"
              className="createPost-button"
              onClick={() =>
                contentHandler === "" ? notify() : createPost(contentHandler)
              }
            >
              Post
            </button>
          </div>

          {homeData.map((post) => {
            return (
              <div key={post.id} className="post-container container-format">
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
                  <img src={post.img} alt="sportyImage" className="postImage" />
                </div>
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
                          </i>
                        </span>
                      ) : (
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      )}
                    </div>

                    <div className="comment sign">
                      <PopupView item={post} /> {post.comments.length}
                    </div>
                    <div 
                      className="share sign"
                      // onClick={navigator.clipboard.writeText("url")}
                    >
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

                <p>
                  <b>{post.likes.likeCount} likes</b>
                </p>
                <p>
                  <b>{post.username}__</b> {post.content}
                </p>

                <div className="userComment-container">
                  <div>
                    <img
                      src={currUser.userImage}
                      alt="userImg"
                      className="userComment-image"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="userComment-input"
                  />
                </div>
                <div style={{ textAlign: "right" }}>
                  <small>posted on : {post.createdAt}</small>
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
export default Home;
