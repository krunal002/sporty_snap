import "./HomePage.css";

import { useContext,  useState } from "react";
import { BookmarkContext, PostContext } from "../../SportySnap";
import Links from "../../Components/Links";
import Users from "../../Components/Users";

const Home = () => {
  const currUser = JSON.parse(localStorage.getItem("user"))

  const { postData, likeIncreament, likeDecreament } = useContext(PostContext);

  // const { state } = useContext(LoginContext);
  const { saveBookmark, removeBookmark, bookmarkData } = useContext(BookmarkContext);

  const [likeValue, setLikeValue] = useState(false);

  const likeHandler = (post) => {
    // console.log(postData.likes.likeCount)
    setLikeValue(!likeValue);
    likeValue ? likeDecreament(post) : likeIncreament(post);
  };
  
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <p>Hello, {currUser.firstName}</p>
      
      <div className="primary-container">
        {/* Linnks */}
        <Links />

        {/* post */}
        <div className="post-container-div">
          {postData.map((post) => {
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
                    onClick={() => bookmarkData.includes(post._id)
                      ?removeBookmark(post)
                      :saveBookmark(post)
                      }
                  >
                  {
                    bookmarkData.includes(post._id)
                      ?<i class="fa fa-bookmark" aria-hidden="true"></i>
                      :<i class="fa fa-bookmark-o" aria-hidden="true"></i>
                  }
                  </div>













                  {/* <div
                    className="bookmark sign"
                    onClick={() => saveBookmark(post)
                      }
                  >
                  {
                   <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                  }
                  </div>


                  <div
                    className="bookmark sign"
                    onClick={() => removeBookmark(post)}
                  >
                  {
                   <i class="fa fa-bookmark" aria-hidden="true"></i>
                  }
                  </div> */}



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
