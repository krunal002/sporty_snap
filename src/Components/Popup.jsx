import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FunButttons from "./FunButtons";
// import { useContext } from "react";
// import { BookmarkContext, PostContext } from "../SportySnap";

const PopupView = (reqPost) => {
  const postComments = reqPost.item.comments;
  const currUser = JSON.parse(localStorage.getItem("user"));
  return (
    <span>
      <Popup
        trigger={
          <span>
            <i class="fa fa-comment-o" aria-hidden="true"></i>{" "}
          </span>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal" style={{ overflow: "auto" }}>
            <div className="content">Welcome to GFG!!!</div>
            {postComments.map((post) => (
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
                      <small>__{post.text}</small>
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
              </div>
            ))}
            <div>
              <button onClick={() => close()}>Close comments</button>
            </div>
          </div>
        )}
      </Popup>
    </span>
  );
};
export default PopupView;
