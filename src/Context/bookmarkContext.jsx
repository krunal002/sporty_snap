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
      setBookmarkData(result.bookmarks)
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };


  
  return (
    <BookmarkContext.Provider value={{ bookmarkData, saveBookmark }}> {children} </BookmarkContext.Provider>
  );
};
