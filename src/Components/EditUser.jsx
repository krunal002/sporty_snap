import axios from "axios";
import { useContext, useReducer, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PostContext } from "../SportySnap";

const EditUser = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("encodedToken");
  const currUser = JSON.parse(localStorage.getItem("user"));

  const redFunction = (state, action) => {
    switch (action.type) {
      case "userImage":
        return { ...state, userImage: action.payload };
      case "firstName":
        return { ...state, firstName: action.payload };
      case "lastName":
        return { ...state, lastName: action.payload };
      case "bio":
        return { ...state, bio: action.payload };
      case "password":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(redFunction, {
    userImage: currUser.userImage,
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    bio: currUser.bio,
    password: currUser.password,
  });

  // set edited data
  const { getPostData } = useContext(PostContext);
  const userEditedData = async () => {
    try {
      await axios.post(
        `/api/users/edit`,
        { userData: state },
        {
          headers: { authorization: token },
        }
      );
      navigate(`/profile/${currUser._id}`);
      setShow(false);
      getPostData();
    } catch (e) {
      setShow(true);
      console.log(e);
    }
  };

  return (
    <div>
      <div className="editUser-links">
        {/* profilePage.css */}
        <Link to={`/profile/${currUser._id}`}>
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </Link>
        <Link to="/home">
          <i class="fa fa-home" aria-hidden="true">
            _Home
          </i>
        </Link>
      </div>
      <div className="loginDiv">
        <h1>Edit User</h1>
        <div className="login-input-div">
          {/* username */}
          <div>
            <label className="loginLabels">
              <b>Profile picture : </b>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={state.userImage}
              onChange={(e) =>
                dispatch({ type: "userImage", payload: e.target.value })
              }
            />
          </div>
          <img
            src={state.userImage}
            alt="userImage"
            style={{
              display: "block",
              margin: "auto",
              width: "200px",
              height: "200px",
              borderRadius: "100px",
            }}
          />
          {/* first name */}
          <div>
            <label className="loginLabels">
              <b>First Name : </b>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={state.firstName}
              onChange={(e) =>
                dispatch({ type: "firstName", payload: e.target.value })
              }
            />
          </div>

          {/* last name */}
          <div>
            <label className="loginLabels">
              <b>Last Name : </b>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={state.lastName}
              onChange={(e) =>
                dispatch({ type: "lastName", payload: e.target.value })
              }
            />
          </div>

          {/* bio */}
          <div>
            <label className="loginLabels">
              <b>Bio : </b>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={state.bio}
              onChange={(e) =>
                dispatch({ type: "bio", payload: e.target.value })
              }
            />
          </div>

          {/* password */}
          <div>
            <label className="loginLabels">
              <b>Password : </b>
            </label>
            <input
              type="password"
              className="loginInputs"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "password", payload: e.target.value })
              }
            />
          </div>

          <button className="loginBtn" onClick={userEditedData}>
            <b>Save</b>
          </button>
          <div
            style={
              show ? {} : { color: "red", textAlign: "center", display: "none" }
            }
          >
            Something is wrong
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditUser;
