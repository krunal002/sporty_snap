import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();

export const PostContextHandler = ({ children }) => {
  const [ postData, setPostData ] = useState([])

  const getPostData = async () => {
    try{
      const res = await fetch("/api/posts")
      const result = await res.json()
      setPostData( result.posts )
    } catch(e) { console.log(e)}
  }
  useEffect(()=>{ getPostData() })
  return (
    <PostContext.Provider value={{ postData }}>
        {children}
    </PostContext.Provider>
  );
};
