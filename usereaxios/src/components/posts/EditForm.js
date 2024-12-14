import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const EditForm = ({ post }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
        id: post.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(null);
        Swal.fire({
          title: "Thank you",
          text: "Post updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="form-control"
        />
        <div className="form-text text-danger">
          {title ? "" : "Title is required"}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Body
        </label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={body}
        ></textarea>
        <div className="form-text text-danger">
          {body ? "" : "Body is required"}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!title || !body}
      >
        Edit
        {loading && (
          <div className="spinner-border spinner-border-sm me-2"></div>
        )}
      </button>
      {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
    </form>
  );
};

export default EditForm;
