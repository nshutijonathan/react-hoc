import React, { useState, useEffect } from "react";
import axios from "axios";
function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(result.data);
  };
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
