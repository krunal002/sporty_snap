import "./Explore.css";
import { useContext, useReducer } from "react";
import { PostContext } from "../../SportySnap";
import Users from "../../Cards/UserCard";
import Links from "../../Cards/LinkCard";
import PostCard from "../../Cards/PostCard";

const Explore = () => {
  const { postData } = useContext(PostContext);

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
      case "latest":
        return { ...cat, latest: true };
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

  const trenData = state.trending
    ? [...postData].sort((a, b) => b.likes.likeCount - a.likes.likeCount)
    : postData;

  const latestData = state.latest
    ? [...trenData].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : trenData;

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

      <div className="primary-container">
        {/* links */}
        <div className="link-wrapper">
          <Links />
        </div>

        {/* post */}
        <div className="explore-post-wrapper">
          <PostCard item={exploreData} />
        </div>

        {/* user */}
        <div className="users-wrapper">
          <Users />
        </div>
      </div>
    </div>
  );
};
export default Explore;
