import { useContext } from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import { BookmarkContext, PostContext } from "../../SportySnap";

const Profile = () => {
  const navigate = useNavigate();
  const currUser = JSON.parse(localStorage.getItem("user"));
  const { postData, likeIncreament, likeDecreament } = useContext(PostContext);
  const { bookmarkData, saveBookmark, removeBookmark } = useContext(BookmarkContext)

  const totalPosts = postData.filter(
    ({ username }) => username === currUser.username
  );

  return (
    <div className="container">
      <div className="homeLink" onClick={() => navigate("/home")}>
        <i class="fa fa-home" aria-hidden="true"></i>
      </div>

      <div className="profile-container">
        <div className="profile-details">
          <img
            src={currUser.userImage}
            alt="profileImage"
            className="profileImage"
          />
          <div className="profileUsername">@{currUser.username}</div>
          <div className="profileName">
            <b>
              {currUser.firstName} {currUser.lastName}
            </b>
          </div>
          <button className="profileEditBtn">
            <b>Edit Profile</b>
          </button>
          <p>
            <b>{currUser.bio}</b>
          </p>
          <p className="user-link">https://krunal002.netlify.app/</p>

          <div className="userData-container">
            <div className="userData">
              <span>{totalPosts.length}</span>
              <span>Posts</span>
            </div>
            <div className="userData">
              <span>{currUser.followers.length}</span>
              <span>Following</span>
            </div>
            <div className="userData">
              <span>{currUser.followers.length}</span>
              <span>Followers</span>
            </div>
          </div>

          
            {/* user posts */}
            <div>
                <h2 className="profile-postsDetails">Your Posts : {totalPosts.length}</h2>
                {totalPosts.map((post) => {
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
                    <p><b>@{post.username}</b></p>
                    <small>__{post.category}</small>
                  </div>
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
                <div style={{textAlign:"right"}}><small>posted on : {post.createdAt}</small></div>
              </div>
            );
          })}
            </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
