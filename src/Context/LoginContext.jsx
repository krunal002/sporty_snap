import { createContext, useEffect, useReducer } from "react";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {

//   Reducer
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "isLoggedIn":
        return { ...state, isLoggedIn: action.payload };
      case "username":
        return { ...state, username: action.payload };
      case "password":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFun, {
    isLoggedIn: false,
    username: "",
    password: "",
  });

  const cred = { username: state.username, password: state.password };

  const getLoginData = async () => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const result = await res.json();
      localStorage.setItem("encodedToken", result.encodedToken);
      localStorage.setItem("user", result.foundUser);
      dispatch({type:"isLoggedIn", payload:true})
      
    } catch (e) {
      console.log(e);
      dispatch({type:"isLoggedIn", payload:true})
    }
  };
  useEffect(() => {
    getLoginData();
  });

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
