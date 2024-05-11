import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";

const AllPublisher = () => {
    const [allPublication, setAllPublication] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/publishers")
            .then(response => response.json())
            .then(data => {
                console.log("All Publications : ", data);
                if (data) {
                    setAllPublication(data);
                    setLoading(false);
                } else {
                    setLoading(false);
                }

            });
    }, []);

    const handleDelete = (id) => {
        // console.log("Deleting author with ID:", id);
        const isConfirmed = window.confirm("Are you sure you want to delete this publication?");
        if (isConfirmed) {
            // setLoading(true);
            fetch(`http://localhost:5000/publishers/${id}`, {
                method: "DELETE"
            })
                .then(response => {
                    if (response.ok) {
                        setAllPublication(allPublication.filter(publication => publication.id !== id));
                        console.log("Author deleted successfully");
                        toast.success("The Publication Deleted Successfully!");
                    } else {
                        console.error("Failed to delete publisher");
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error deleting author:", error);
                    setLoading(false);
                });
        }
    };


    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <div className="container my-2">
            <h2>All Publisher </h2>
            {allPublication.length > 0 ?
                <>
                    <table className="table table-striped table-hover table-secondary">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPublication.map((publisher, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <Link className="text-decoration-none fw-bold" to={`/publisher/${publisher?.id}`} >
                                            {publisher.name}
                                        </Link>
                                    </td>
                                    <td>{publisher.address}</td>
                                    <td>
                                        <Link to={`/updatePublisher/${publisher?.id}`} className="text-decoration-none fw-bold">Update</Link>
                                    </td>

                                    <td onClick={() => handleDelete(publisher?.id)}>
                                        <button className="btn btn-danger btn-sm fw-bolder">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
                :
                <>
                    <h2 className="text-center fw-bolder">No Author Found</h2>
                </>
            }
        </div>
    );
};

export default AllPublisher;