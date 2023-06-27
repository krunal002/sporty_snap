import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/HomePage/HomePage";
import Explore from "./Pages/Explore/Explore";
import Bookmark from "./Pages/BookmarkPage/Bookmark"
import Profile from "./Pages/ProfilePage/ProfilePage";
import Login from "./Pages/LoginPage/LoginPage";
import SignUp from "./Pages/LoginPage/SignUp";
import RequiresAuth from "./Components/RequiresAuth";
import EditUser from "./Components/EditUser";

import { LoginContext } from "./Context/LoginContext";
import { PostContext } from "./Context/PostContext";
import { UserContext } from "./Context/userContext";
import { BookmarkContext } from "./Context/bookmarkContext";
export { LoginContext };
export { PostContext };
export { UserContext };
export { BookmarkContext };

const SportySnap = () => {
  return (
    <div>
      <h1 style={{ color: "gray" }}>Sporty_Snap..!</h1>

      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={
          <RequiresAuth><Home /></RequiresAuth>
        } />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </div>
  );
};
export default SportySnap;
