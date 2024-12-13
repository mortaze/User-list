// import { useEffect, useState } from "react";
// import ListUsers from "../../components/users/List";

// const IndexUser = () => {
//   const [users, setUsers] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <h2>Users :</h2>
//       {error && <div>{error}</div>}
//       {loading && <div className="spinner-border"></div>}
//       {users && <ListUsers users={users} />}
//     </>
//   );
// };

// export default IndexUser;

import { useEffect, useState } from "react";
import ListUsers from "../../components/users/List";
import axios from "axios";

const IndexUser = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h2>Users :</h2>
      {error && <div>{error}</div>}
      {loading && <div className="spinner-border"></div>}
      {users && <ListUsers users={users} />}
    </>
  );
};

export default IndexUser;
