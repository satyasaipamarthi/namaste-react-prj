import React from "react";
import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h2>Contact: @satysai.in</h2>
    </div>
  );
};

export default User;
