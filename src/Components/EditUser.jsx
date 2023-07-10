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
      case "portfolioURL":
        return { ...state, portfolioURL: action.payload };
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
    portfolioURL: currUser.portfolioURL,
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
          {/* profile pic */}
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

          <div className="avtaar-container">
            <img
              src="https://img.freepik.com/premium-vector/cute-boy-thinking-cartoon-avatar_138676-2439.jpg"
              alt="Avtaar"
              className="avtaar"
              onClick={() =>
                dispatch({
                  type: "userImage",
                  payload:
                    "https://img.freepik.com/premium-vector/cute-boy-thinking-cartoon-avatar_138676-2439.jpg",
                })
              }
            />
            <img
              src="https://thumbs.dreamstime.com/b/female-avatar-profile-icon-round-woman-face-flat-vector-illustration-female-avatar-profile-icon-round-woman-face-102767948.jpg"
              alt="male-Avtaar"
              className="avtaar"
              onClick={() =>
                dispatch({
                  type: "userImage",
                  payload:
                    "https://thumbs.dreamstime.com/b/female-avatar-profile-icon-round-woman-face-flat-vector-illustration-female-avatar-profile-icon-round-woman-face-102767948.jpg",
                })
              }
            />

            <img
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
              alt="female-Avtaar"
              className="avtaar"
              onClick={() =>
                dispatch({
                  type: "userImage",
                  payload:
                    "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
                })
              }
            />

            <img
              src="https://tse2.mm.bing.net/th?id=OIP.IxeQFIHmWxB4uC8-1H1rXwHaFj&pid=Api&P=0&h=180"
              alt="female-Avtaar"
              className="avtaar"
              onClick={() =>
                dispatch({
                  type: "userImage",
                  payload:
                    "https://tse2.mm.bing.net/th?id=OIP.IxeQFIHmWxB4uC8-1H1rXwHaFj&pid=Api&P=0&h=180",
                })
              }
            />

            <img
              src="https://tse3.mm.bing.net/th?id=OIP.U64OwTZionM0NSNtjIGUqQHaHa&pid=Api&P=0&h=180"
              alt="female-Avtaar"
              className="avtaar"
              onClick={() =>
                dispatch({
                  type: "userImage",
                  payload:
                    "https://tse3.mm.bing.net/th?id=OIP.U64OwTZionM0NSNtjIGUqQHaHa&pid=Api&P=0&h=180",
                })
              }
            />

            <img
              src="https://tse4.mm.bing.net/th?id=OIP.te14DcGDGx0pREICZjuyfgHaHa&pid=Api&P=0&h=180"
              alt="female-Avtaar"
              className="avtaar"
              onClick={() =>
                dispatch({
                  type: "userImage",
                  payload:
                    "https://tse4.mm.bing.net/th?id=OIP.te14DcGDGx0pREICZjuyfgHaHa&pid=Api&P=0&h=180",
                })
              }
            />
          </div>

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

          {/* portfolio url */}
          <div>
            <label className="loginLabels">
              <b>Portfolio URL : </b>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={state.portfolioURL}
              onChange={(e) =>
                dispatch({ type: "portfolioURL", payload: e.target.value })
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
