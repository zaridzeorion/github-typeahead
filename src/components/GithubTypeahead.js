import React, { useEffect, useState } from "react";
import { GET } from "../fetch";
import "../styles/typeahead.css";

const GithubTypeahead = ({ setData, user_per_page = 5 }) => {
  const [input, setInput] = useState("");
  const BASE_URL = `https://api.github.com/search/users?q=${input}+in:login,${input}+in:name&per_page=${user_per_page}`;

  useEffect(() => {
    // Debouncing - delaying function
    let timeoutId = setTimeout(() => {
      GET(BASE_URL).then((res) => setData(res.items));
    }, 500);

    return () => {
      setData("");
      clearTimeout(timeoutId);
    };
  }, [input]);

  return (
    <input
      className="Typeahead-input"
      type="text"
      placeholder="Search..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default GithubTypeahead;
