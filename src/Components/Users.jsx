import { useContext } from "react";
import { LoginContext, UserContext } from "../SportySnap";

const Users = () => {
  const { state } = useContext(LoginContext);
  const { userData, followUser, unfollowUser } = useContext(UserContext);

  const followHandler = (user) => {
    console.log(user.followers)
    user.followers.map(({ username }) =>
                  username.includes(state.userLoggedIn.username)
                ).length
                  ? unfollowUser(user)
                  : followUser(user)
  }
  return (
    <div className="user-container-div">
      <div className="user-container container-format">
        <h3 className="user-heading">Suggested Users</h3>
        {userData.map((user) => (
          <div key={user.id} className="userDetails userDetails-margin">
            <div>
              <img src={user.userImage} alt="userImage" className="userImage" />
            </div>

            <div className="userInfo">
              <p>
                <b>
                  {user.firstName} {user.lastName}
                </b>
              </p>
              <p>@{user.username}</p>
            </div>

            <div
              className="follow-user"
              onClick={() =>
                followHandler(user)
              }
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
        ))}
      </div>
    </div>
  );
};
export default Users;
