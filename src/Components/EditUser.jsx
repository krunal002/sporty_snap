import axios from "axios";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [ show, setShow ] = useState(false)
  const token = localStorage.getItem("encodedToken");
  const currUser = JSON.parse(localStorage.getItem("user"));

  const redFunction = (state, action) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.payload };
      case "firstName":
        return { ...state, firstName: action.payload };
      case "lastName":
        return { ...state, lastName: action.payload };
        case "password":
          return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(redFunction, {
    username: currUser.username,
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    password: currUser.password,
  });

  // set edited data
  const postEditedData = async () => {
    try {
      await axios.post(
        `/api/users/edit`,
        { userData: state },
        {
          headers: { authorization: token },
        }
      );
      navigate(`/profile/${currUser._id}`);
      setShow(false)
    } catch (e) {
      setShow(true)
      console.log(e);
    }
  };

  return (
    <div>
      <div className="loginDiv">
        <h1>Edit User</h1>
        <div className="login-input-div">
          {/* username */}
          <div>
            <label className="loginLabels">
              <b>Username : </b>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={state.username}
              onChange={(e) =>
                dispatch({ type: "username", payload: e.target.value })
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

          <button className="loginBtn" onClick={postEditedData}>
            <b>Save</b>
          </button>
          <div 
            style={show?{}:{color:"red", textAlign:"center" ,display:"none"}}
          >Something is wrong</div>
        </div>
      </div>
    </div>
  );
};
export default EditUser;
