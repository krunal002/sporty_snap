import { createContext, useEffect, useState } from "react";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {
    const [ loginData, setLoginData ] = useState(4);

    const cred = { username:"adarshbalika", password:"adarshBalika123"}

    const getLoginData = async () => {
        try{
            const res = await fetch("/api/auth/login",{
                method:"POST",
                body: JSON.stringify(cred)
            })
            const res1 = await res.json();
            setLoginData(res1.encodedToken)
        } catch(e){ console.log(e) }
    }
    useEffect(() => {
        getLoginData();
    })

  return <LoginContext.Provider value={{ loginData }}> { children } </LoginContext.Provider>;
};
