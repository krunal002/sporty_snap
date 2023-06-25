import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserContextHandler = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [targetUser, setTargetUser] = useState({});
  const token = localStorage.getItem("encodedToken")

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/users");
      const result = res.data;
      setUserData(result.users);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    getUserData();
  });

  const targetedUserDetails = async ( user ) =>{
    try{
      const res = await axios.get(`/api/users/${user._id}`)
      const result = res.data
      setTargetUser(result.user)
    }catch(e){ console.log(e)}
  }

  const followUser = async (user) => {
    try{
      const res = await axios.post(`/api/users/follow/${user._id}`, {},{headers:{authorization:token}})
      console.log("follow", res.data)
    }catch(e) { console.log(e)}
  }

  const unfollowUser = async ( user ) => {
    try {
      const res = await axios.post(`/api/users/unfollow/${user._id}`,{},{headers:{authorization:token}})
      console.log("unfollow", res.data)
    } catch(e) { console.log(e)}
  }
  
  return (
    <UserContext.Provider value={{ userData, targetUser, followUser, unfollowUser, targetedUserDetails }}>{children}</UserContext.Provider>
  );
};
