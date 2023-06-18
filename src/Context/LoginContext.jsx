import { createContext, useReducer, useState } from "react";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {
  const [ token, setToken ] = useState(false)

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
    userData:{},
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
      dispatch({ type: "userData", payload: result.foundUser})
      setToken(result.encodedToken)

    } catch (e) {
      console.log(e);
    }
  };

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
      
      localStorage.setItem("encodedToken", result.encodedToken);
      dispatch({ type: "userData", payload: result.foundUser})
      setToken(result.encodedToken)

    } catch (e) {
      console.log(e);
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
