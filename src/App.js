import React, { useEffect, useState } from "react";
import { GET } from "./fetch.js";

function App() {
  const [users, setUsers] = useState("");
  const BASE_URL = `https://api.github.com/users`;

  useEffect(() => {
    GET(BASE_URL).then((res) => setUsers(res));
  }, []);

  return (
    <ul>
      {users
        ? users.map((user) => <li key={user.id}>{user.login}</li>)
        : "Loading..."}
    </ul>
  );
}

export default App;
