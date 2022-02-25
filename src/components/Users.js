import React from "react";

const Users = ({ users }) => {
  return (
    <ul>
      {users
        ? users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} />
              <p>{user.login} </p>
            </li>
          ))
        : "Loading..."}

      {users && users.length === 0 && <li>"No suggestions."</li>}
    </ul>
  );
};

export default Users;
