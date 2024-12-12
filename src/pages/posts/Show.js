import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeletePost from "../../components/posts/Delete";

const ShowPost = () => {
  const { postId } = useParams();
  const [post, setpost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setpost(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [postId]);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div className="spinner-border"></div>}
      {post && (
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">{post.title}</div>
            <ul className="card-body">{post.body}</ul>
            <div className="card-footer">
              <DeletePost postId={post.id} />
              <Link
                className="btn btn-sm btn-dark"
                to={`/posts/edit/${postId}`}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowPost;
