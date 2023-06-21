import { createContext, useState } from "react";
export const BookmarkContext = createContext();

export const BookmarkContextHandler = ({ children }) => {
  const [ bookmarkData, setBookmarkData ] = useState([]);

  const saveBookmark = async (post) => {
    const url = `/api/users/bookmark/${post._id}`;
    
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { authorization: localStorage.getItem("encodedToken") },
      });

      const result = await res.json();
      console.log(result)
      setBookmarkData(result.bookmarks)
    } catch (e) {
      console.log(e);
    }
  };

  const removeBookmark = async (post) => {
    const url = `/api/users/remove-bookmark/${post._id}`
    try{
      const res = await fetch(url,{
        method:"POST",
        headers: { authorization: localStorage.getItem("encodedToken")}
      });

      const result = await res.json()
      console.log("rushi",result)
      setBookmarkData(result.bookmarks)
    } catch(e){ console.log(e) }
  }

  
  return (
    <BookmarkContext.Provider value={{ bookmarkData, saveBookmark, removeBookmark }}> {children} </BookmarkContext.Provider>
  );
};
