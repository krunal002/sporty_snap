import axios from "axios";
import { createContext, useReducer, useState } from "react";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {
  const [token, setToken] = useState(false);

  //   Reducer
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "userData":
        return { ...state, userData: action.payload };
      case "firstName":
        return { ...state, firstName: action.payload };
      case "lastName":
        return { ...state, lastName: action.payload };
      case "username":
        return { ...state, username: action.payload };
      case "password":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFun, {
    userData: {},
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const postLoginData = async () => {
    const cred = { username: state.username, password: state.password };
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const result = await res.json();

      localStorage.setItem("encodedToken", result.encodedToken);
      localStorage.setItem("user", JSON.stringify(result.foundUser));
      dispatch({ type: "userData", payload: result.foundUser });
      setToken(result.encodedToken);
    } catch (e) {
      console.log(e);
    }
  };

  const postSignUpData = async () => {
    const cred = {
      userImage:
        "https://cdn2.f-cdn.com/contestentries/419315/20012414/5758a41a4c256_thumb900.jpg",
      firstName: state.firstName,
      lastName: state.lastName,
      username: state.username,
      password: state.password,
      bookmarks: [],
    };
    try {
      await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(cred),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const postTestUser = async () => {
    // const cred = { username: "spidy_003", password: "spiderman" };
    try {
      const res = await axios.post("/api/auth/login", {
        username: "spidy_003", 
        password: "spiderman"
      });

      const result = res.data;
      
      localStorage.setItem("encodedToken", result.encodedToken);
      localStorage.setItem("user", JSON.stringify(result.foundUser));
      dispatch({ type: "userData", payload: result.foundUser });
      setToken(result.encodedToken);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        state,
        token,
        setToken,
        dispatch,
        postLoginData,
        postSignUpData,
        postTestUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
