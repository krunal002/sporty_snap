import { createContext } from "react";
export const PostContext = createContext();

export const PostContextHandler = ({ children }) => {
  return (
    <PostContext.Provider value={{ posts: "Available" }}>
        {children}
    </PostContext.Provider>
  );
};
