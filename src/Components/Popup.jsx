import "./Popup.css";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupView = (reqPost) => {
  const postComments = reqPost.item.comments;
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
          <div className="popup-modal">
            <header className="content">
              <h1>COMMENTS</h1>
            </header>
            {postComments.map((post) => (
              <div key={post.id} className="commentBox">
                <div className="">
                  <div className="comment-user">
                    <div className="">
                      <img
                        src="https://cdn2.f-cdn.com/contestentries/419315/20012414/5758a41a4c256_thumb900.jpg"
                        alt="userImage"
                        className="comment-userImage"
                      />
                    </div>
                  
                    <div className="">
                      <p>
                        <b>@{post.username}</b>
                      </p>
                    </div>
                  </div>
                  <h2 className="comment-text">{post.text}</h2>
                </div>
                <footer className="comment-buttons">
                  <span>
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                  </span>
                  <span>
                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                  </span>
                </footer>
              </div>
            ))}
            <div>
              <button onClick={() => close()} className="commentBtn">
                Close Comments
              </button>
            </div>
          </div>
        )}
      </Popup>
    </span>
  );
};
export default PopupView;
