import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserContextHandler = ({ children }) => {
  const [ userData, setUserData ] = useState([])

  const getUserData = async () => {
    try{
      const res = await fetch("/api/users")
      const result = await res.json()
      setUserData( result.users )
    } catch(e) { console.log(e)}
  }
  useEffect(()=>{ getUserData() })

  return (
    <UserContext.Provider value={{ userData }}>
        {children}
    </UserContext.Provider>
  );
};
