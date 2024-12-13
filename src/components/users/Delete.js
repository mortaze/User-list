import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const DeleteUser = ({ userId }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setLoading(true);
        try{
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if(response.status !== 200){
                throw new Error("Failed to delete the user.");

            }
            setLoading(false);
            setError(null);
            Swal.fire({
                title: "Thank you!",
                text: `User ${userId} was deleted successfully.`,
                icon: "success",
                confirmButtonText: "OK",
            });
        }catch (err) {
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
            <div>
                <button className="btn btn-danger btn-sm me-4" onClick={handleDelete}  disabled={loading}>
                    {loading ? "Deleting..." : "Delete User"}
                </button>
                {error && <p>{error}</p>}
            </div>
        );
    };

    export default DeleteUser;