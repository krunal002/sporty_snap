import { createContext, useEffect, useReducer, useState } from "react";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {
  const [ token, setToken ] = useState(false)

  //   Reducer
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "isLoggedIn":
        return { ...state, isLoggedIn: action.payload };
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
    isLoggedIn: false,
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
      localStorage.setItem("user", result.foundUser.firstName);
      setToken(result.encodedToken)

      result.encodedToken !== undefined
        ? dispatch({ type: "isLoggedIn", payload: true })
        : dispatch({ type: "isLoggedIn", payload: false });
    } catch (e) {
      console.log(e);
      dispatch({ type: "isLoggedIn", payload: true });
    }
  };

  useEffect(() => console.log("Token : ",token), [token])
  const postSignUpData = async () => {
    const cred = {
      firstName: state.firstName,
      lastName: state.lastName,
      userame: state.userame,
      password: state.password,
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
    const cred = { username: "adarshbalika", password: "adarshBalika123" };
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const result = await res.json();
      console.log(result);
      localStorage.setItem("encodedToken", result.encodedToken);
      localStorage.setItem("user", result.foundUser.firstName);
      setToken(result.encodedToken)

      result.encodedToken !== undefined
        ? dispatch({ type: "isLoggedIn", payload: true })
        : dispatch({ type: "isLoggedIn", payload: false });
    } catch (e) {
      console.log(e);
      dispatch({ type: "isLoggedIn", payload: true });
    }
  };

  return (
    <LoginContext.Provider
      value={{ state, token, setToken, dispatch, postLoginData, postSignUpData, postTestUser }}
    >
      {children}
    </LoginContext.Provider>
  );
};
