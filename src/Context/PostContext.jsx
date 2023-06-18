import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();

export const PostContextHandler = ({ children }) => {
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    try {
      const res = await fetch("/api/posts");
      const result = await res.json();
      setPostData(result.posts);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPostData();
  });

  const likeIncreament = async (post) => {
    const url = `/api/posts/like/${post._id}`;
    const token = localStorage.getItem("encodedToken");
    try {
      await fetch(url, {
        method: "POST",
        headers: { authorization: token },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const likeDecreament = async (post) => {
    const url = `/api/posts/dislike/${post._id}`;
    const token = localStorage.getItem("encodedToken");
    try {
      await fetch(url, {
        method: "POST",
        headers: { authorization: token },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostContext.Provider value={{ postData, likeIncreament, likeDecreament }}>
      {children}
    </PostContext.Provider>
  );
};
