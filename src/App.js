import React, { useEffect, useState } from "react";
import { GET } from "./fetch.js";

function App() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState("");
  const BASE_URL = `https://api.github.com/search/users?q=${input}+in:login`;

  useEffect(() => {
    GET(BASE_URL).then((res) => setUsers(res.items));
  }, [BASE_URL, input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <ul>
        {users
          ? users.map((user) => <li key={user.id}>{user.login}</li>)
          : "Loading..."}

        {users.length === 0 && <li>"No users found."</li>}
      </ul>
    </div>
  );
}

export default App;
