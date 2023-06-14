import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/HomePage/HomePage";
import Profile from "./Pages/ProfilePage/ProfilePage";
import Login from "./Pages/LoginPage/LoginPage";

import { Routes, Route } from "react-router-dom";

const SportySnap = () => {
  return (
    <div>
      <h1 style={{color:"gray"}}>Sporty_Snap..!</h1>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default SportySnap;
