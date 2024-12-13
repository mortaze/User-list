import { useState } from "react";
import Swal from "sweetalert2";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    //ارسال درخواست ثبت برای سرور
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
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
            title: "thank you",
            text: "post created successfully",
            icon: "success",
            confirmButtonText: "OK",    
        })




      }).catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return (
    <div className="col-md-6">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            value={title}
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
            rows="3"
            value={body}
          ></textarea>
          <div className="form-text text-danger">
            {body ? "" : "Title is required"}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!title || !body}
        >
          create
          {loading && (
            <div className="spinner-border spinner-border-sm me-2"></div>
          )}
        </button>
        {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
      </form>
    </div>
  );
};

export default CreatePost;

