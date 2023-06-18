import { useContext } from "react";
import { UserContext } from "../SportySnap";

const Users = () => {
    const {userData} = useContext(UserContext)
    
  return (
    <div className="user-container-div">
      <div className="user-container container-format">
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

            <div className="follow-user">
              <b>Follow</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
