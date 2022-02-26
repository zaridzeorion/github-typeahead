import React from "react";
import "../styles/users.css";

const Users = ({ users }) => {
  return (
    <ul className="Users">
      {users ? (
        users.map((user) => (
          <li className="User" key={user.id}>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://github.com/${user.login}`}
            >
              <img alt={`${user.login}'s avatar`} src={user.avatar_url} />
              <p className="Username">
                <span className="asperand">@</span>
                {user.login}
              </p>
            </a>
          </li>
        ))
      ) : (
        <li className="Empty-message">Loading</li>
      )}

      {users && users.length === 0 && (
        <li className="Empty-message">User not found.</li>
      )}
    </ul>
  );
};

export default Users;
