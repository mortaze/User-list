import { useEffect, useState } from "react";
import ListPosts from "../../components/posts/List";
import { Link } from "react-router-dom";
import axios from "axios";

const IndexPost = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h2>Posts :</h2>
      <div>
        <Link className="btn btn-dark" to="/posts/create">
          Add Post
        </Link>
      </div>

      {error && <div>{error}</div>}
      {loading && <div className="spinner-border"></div>}
      {posts && <ListPosts posts={posts} />}
    </>
  );
};

export default IndexPost;