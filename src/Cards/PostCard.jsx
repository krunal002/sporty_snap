import { useContext, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BookmarkContext, LoginContext, PostContext } from "../SportySnap";
import FunButttons from "../Components/FunButtons";
import PopupView from "../Components/Popup";

const PostCard = (item) => {
  const { state } = useContext(LoginContext);
  const currUser = state.userLoggedIn;

  const { token, likeIncreament, likeDecreament } = useContext(PostContext);

  const { saveBookmark, removeBookmark, bookmarkData } =
    useContext(BookmarkContext);

  const notifyComment = () =>
    toast.success("Comment posted!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const [commentText, setCommentText] = useState("");
  const AddCommentToPost = async ({ post, commentContent, encodedToken }) => {
    return axios.post(
      `/api/comments/add/${post._id}`,
      {
        commentData: { text: commentContent },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
  };

  const handlePostComment = async (post) => {
    await AddCommentToPost({
      post: post,
      commentContent: commentText,
      encodedToken: token,
    });
    notifyComment();
    setCommentText("");
  };

  return (
    <div className="post-container-div">
      <ToastContainer />
      {item.item.map((post) => {
        return (
          <div key={post.id} className="post-container container-format">
            <div className="userDetails">
              <div className="right-userDetails">
                <div className="userImg">
                  <img
                    src={
                      currUser.username === post.username
                        ? currUser.userImage
                        : post.userImage
                    }
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
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button
                className="userComment-button"
                onClick={(e) => handlePostComment(post)}
                disabled={commentText === ""}
              >
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
            <div style={{ textAlign: "right" }}>
              <small>posted on : {post.createdAt}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PostCard;
