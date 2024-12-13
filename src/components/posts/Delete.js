import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const DeletePost = ({ postId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (response.status !== 200) {
        throw new Error("Failed to delete the post.");
      }
      setLoading(false);
      setError(null);
      Swal.fire({
        title: "Thank you!",
        text: `Post ${postId} was deleted successfully.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setLoading(false);
      setError(err.message);
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <button onClick={handleDelete} className="btn btn-sm btn-danger me-4">
        {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
        Delete
      </button>
      {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
    </>
  );
};

export default DeletePost;
