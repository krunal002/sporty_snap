import { useContext, useState } from "react"
import { BookmarkContext, PostContext } from "../../SportySnap"
import Links from "../../Components/Links";
const Bookmark = () => {
    const [likeValue, setLikeValue] = useState(false);
    const { postData } = useContext(PostContext)

    const { bookmarkData, saveBookmark } = useContext(BookmarkContext)
    const { likeIncreament, likeDecreament } = useContext( PostContext )

    const likeHandler = (post) => {
        // console.log(postData.likes.likeCount)
        setLikeValue(!likeValue);
        likeValue ? likeDecreament(post) : likeIncreament(post);
      };

    const newBD = postData.filter((post) => (
        bookmarkData.includes(post._id)
    ))

    return <div>
        <Links/>
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
                    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
}
export default Bookmark;