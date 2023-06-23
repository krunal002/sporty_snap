// import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();

export const PostContextHandler = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const token = localStorage.getItem("encodedToken");

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
    try {
      await fetch(url, {
        method: "POST",
        headers: { authorization: token },
      });
    } catch (e) {
      console.log(e);
    }
  };


  const createPost = async (value) => {
    console.log(value)
    const currUser = JSON.parse(localStorage.getItem("user"))
    const cred = {
      img:"https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg",
      category:"sports",
      content: value,
      userImage: currUser.userImage,
      comments:[]
    }
    try{
      const res = await fetch("/api/posts",{
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({postData:cred})
      })
      console.log(await res.json())
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <PostContext.Provider value={{ postData, likeIncreament, likeDecreament, createPost }}>
      {children}
    </PostContext.Provider>
  );
};
