import "./Explore.css";
import { Link } from "react-router-dom";
// import Users from "../../Components/Users";
import { useContext, useReducer } from "react";
import { PostContext } from "../../SportySnap";

const Explore = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));
  const { postData, likeValue } = useContext(PostContext);
  const likeHandler = () => {};
  const saveBookmark = () => {};

  const reducerFun = (state, action) => {
    const cat = {
      trending: false,
      latest: false,
      miscellaneous: false,
      football: false,
      cricket: false,
      tennis: false,
      hockey: false,
    };
    switch (action.type) {
      case "trending":
        return { ...cat, trending: true };
      case "miscellaneous":
        return { ...cat, miscellaneous: true };
      case "football":
        return { ...cat, football: true };
      case "cricket":
        return { ...cat, cricket: true };
      case "tennis":
        return { ...cat, tennis: true };
      case "hockey":
        return { ...cat, hockey: true };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFun, {
    trending: false,
    latest: false,
    miscellaneous: false,
    football: false,
    cricket: false,
    tennis: false,
    hockey: false,
  });

  const trenData = state.trending ? [...postData].sort((a,b) => (b.likes.likeCount - a.likes.likeCount)) : postData;

  const latestData = trenData;

  const miscellaneousData = latestData;

  const footballData = state.football
    ? miscellaneousData.filter(({ category }) => category === "football")
    : miscellaneousData;

  const cricketData = state.cricket
    ? footballData.filter(({ category }) => category === "cricket")
    : footballData;

  const tennisData = state.tennis
    ? cricketData.filter(({ category }) => category === "tennis")
    : cricketData;

  const hockeyData = state.hockey
    ? tennisData.filter(({ category }) => category === "hockey")
    : tennisData;

  const exploreData = hockeyData;

  return (
    <div className="home-container">
      <div className="nav-container">
        <div className="nav-heading">
          <h1>
            <i class="fa fa-suitcase" aria-hidden="true"></i> Explore_
          </h1>
        </div>
        <div className="b-links">
          <Link to="/home" className="bookmark-links">
            <i class="fa fa-home" aria-hidden="true"></i>
          </Link>
          <Link to="/bookmark" className="bookmark-links">
            <i class="fa fa-bookmark" aria-hidden="true"></i>
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

      <div className="primary-category-container">
        <div className="category-container">
          <div
            className="categoryBtn"
            onClick={() => dispatch({ type: "trending" })}
          >
            Trending
          </div>
          <div
            className="categoryBtn"
            onClick={() => dispatch({ type: "latest" })}
          >
            Latest
          </div>
          <div
            className="categoryBtn"
            onClick={() => dispatch({ type: "miscellaneous" })}
          >
            Miscellaneous
          </div>
          <div
            className="categoryBtn"
            onClick={() => dispatch({ type: "football" })}
          >
            Football
          </div>
          <div
            className="categoryBtn"
            onClick={() => dispatch({ type: "cricket" })}
          >
            Cricket
          </div>
          <div
            className="categoryBtn"
            onClick={() => dispatch({ type: "tennis" })}
          >
            Tennis
          </div>
          <div
            className="categoryBtn"
            onClick={() => dispatch({ type: "hockey" })}
          >
            Hockey
          </div>
        </div>
      </div>

      <div className="primary-container explore-container">
        {/* post */}
        <div className="post-container-div">
          {exploreData.map((post) => {
            return (
              <div
                key={post.id}
                className="post-container container-format explore-format"
              >
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
              </div>
            );
          })}
        </div>

        {/* user */}
        {/* <Users /> */}
      </div>
    </div>
  );
};
export default Explore;