import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeleteUser from "../../components/users/Delete";

const ShowUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div className="spinner-border"></div>}
      {user && (
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">{user.name}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">username : {user.username}</li>
              <li className="list-group-item">email : {user.email}</li>
              <li className="list-group-item">phone : {user.phone}</li>
              <li className="list-group-item">website : {user.website}</li>
            </ul>
          </div>
          <DeleteUser userId={user.id} />
        </div>
      )}
    </>
  );
};

export default ShowUser;
