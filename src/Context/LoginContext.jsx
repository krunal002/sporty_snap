import { createContext, useReducer } from "react";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {
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
      dispatch({ type: "isLoggedIn", payload: true });
    } catch (e) {
      console.log(e);
      dispatch({ type: "isLoggedIn", payload: true });
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

  return (
    <LoginContext.Provider
      value={{ state, dispatch, postLoginData, postSignUpData }}
    >
      {children}
    </LoginContext.Provider>
  );
};
