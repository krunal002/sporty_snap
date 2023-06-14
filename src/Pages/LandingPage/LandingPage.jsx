import "./LandingPage.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingDiv">
      <h1 className="heading"><span className="headingSpan">Sporty</span> Snap</h1>
      <Link to="/home">Home</Link>
    </div>
  );
};
export default LandingPage;
