import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let BASE_URL = `https://api.github.com/users`;
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return <ul>{users && users.map((user) => <li key={user.id}>{user.login}</li>)}</ul>;
}

export default App;
