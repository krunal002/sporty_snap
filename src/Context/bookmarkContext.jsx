import axios from "axios";
import { createContext, useState } from "react";
export const BookmarkContext = createContext();

export const BookmarkContextHandler = ({ children }) => {
  const [bookmarkData, setBookmarkData] = useState([]);

  const saveBookmark = async (post) => {
    const url = `/api/users/bookmark/${post._id}`;

    try {
      const res = await axios.post(
        url,
        {},
        {
          headers: { authorization: localStorage.getItem("encodedToken") },
        }
      );

      const result = res.data;
      setBookmarkData(result.bookmarks);
    } catch (e) {
      console.log(e);
    }
  };

  const removeBookmark = async (post) => {
    const url = `/api/users/remove-bookmark/${post._id}`;
    try {
      const res = await axios.post(
        url,
        {},
        {
          headers: { authorization: localStorage.getItem("encodedToken") },
        }
      );

      const result = res.data;
      setBookmarkData(result.bookmarks);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarkData, saveBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
