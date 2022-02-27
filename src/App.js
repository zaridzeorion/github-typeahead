import React, { useState } from "react";

import GithubTypeahead from "./components/GithubTypeahead";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState("");

  return (
    <div className="Typeahead">
      <GithubTypeahead setData={setUsers} />
      <Users users={users} />
    </div>
  );
}

export default App;
