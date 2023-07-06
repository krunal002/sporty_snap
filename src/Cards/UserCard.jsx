import { useContext, useState } from "react";
import { LoginContext, UserContext } from "../SportySnap";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const { state } = useContext(LoginContext);
  const { userData, followUser, unfollowUser } = useContext(UserContext);

  const followHandler = (user) => {
    user.followers.map(({ username }) =>
      username.includes(state.userLoggedIn.username)
    ).length
      ? unfollowUser(user)
      : followUser(user);
  };

  const [searchUser, setSearchUser] = useState("");
  const showUsers =
    searchUser === ""
      ? userData
      : userData.filter(({ username }) =>
          username.toLowerCase().includes(searchUser.toLowerCase())
        );

  return (
    <div className="primary-userContainer">
      <div className="user-container-div">
        <div className="searchUser container-format">
          <input
            type="text"
            className="input-searchUser"
            placeholder="Search..."
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />{" "}
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>

        <div className="user-container container-format">
          <h3 className="user-heading">Suggested Users</h3>

          {showUsers.length === 0 ? (
            <p style={{padding:"6rem"}}>No user found</p>
          ) : (
            showUsers
              .filter(({ _id }) => _id !== state.userLoggedIn._id)
              .map((user) => (
                <div key={user.id} className="userDetails userDetails-margin">
                  <div onClick={() => navigate(`/profile/${user._id}`)}>
                    <img
                      src={user.userImage}
                      alt="userImage"
                      className="userImage"
                    />
                  </div>

                  <div
                    className="userInfo"
                    onClick={() => navigate(`/profile/${user._id}`)}
                  >
                    <p>
                      <b>
                        {user.firstName} {user.lastName}
                      </b>
                    </p>
                    <p>@{user.username}</p>
                  </div>

                  <div
                    className="follow-user"
                    onClick={() => followHandler(user)}
                  >
                    {user.followers.map(({ username }) =>
                      username.includes(state.userLoggedIn.username)
                    ).length ? (
                      <b>Unfollow</b>
                    ) : (
                      <b>Follow</b>
                    )}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Users;
