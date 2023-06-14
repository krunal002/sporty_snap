import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/HomePage";
import Profile from "./Pages/ProfilePage";

import { Routes, Route } from "react-router-dom";

const SportySnap = () => {
  return (
    <div>
      <h1>Sporty Snap!</h1>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default SportySnap;
