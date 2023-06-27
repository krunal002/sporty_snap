import axios from "axios";
import { useReducer } from "react";

const EditUser = () => {
  // const token = JSON.parse(localStorage.getItem("encodedToken"))
  const currUser = JSON.parse(localStorage.getItem("user"));
  console.log(currUser);

  const redFunction = (state, action) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.payload };
      case "firstName":
        return { ...state, firstName: action.payload };
      case "lastName":
        return { ...state, lastName: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(redFunction, {
    username: currUser.username,
    firstName: currUser.firstName,
    lastName: currUser.lastName,
  });

  // set edited data
  const postEditedData = async () => {
    try {
      const res = await axios.post(`/api/users/edit`, state, {
        headers: { authorization: "token" },
      });
      console.log("naya wala", res.data.user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>EditUser</h2>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: "username", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>first name</label>
        <input
          type="text"
          value={state.firstName}
          onChange={(e) =>
            dispatch({ type: "firstName", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>last name</label>
        <input
          type="text"
          value={state.lastName}
          onChange={(e) =>
            dispatch({ type: "lastName", payload: e.target.value })
          }
        />
      </div>
      <button onClick={postEditedData}>Save Changes</button>
    </div>
  );
};
export default EditUser;
