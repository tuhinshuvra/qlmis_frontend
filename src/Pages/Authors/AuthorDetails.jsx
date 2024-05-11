import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { Link, useParams } from "react-router-dom";

const AuthorDetails = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/authors/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("All Books : ", data);
                if (data) {
                    setAuthor(data)
                    setLoading(false);
                } else {
                    setLoading(false)
                }

            })
    }, []);

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div className=" col-lg-6 col-10 container my-5">
            <h2 className=" text-center fw-bold text-secondary mb-4">{author?.name}  Details</h2>

            <div className="mb-3">
                <p> <b> Name : </b>{author?.name}</p>
            </div>

            <div className="mb-3">
                <p> <b> Address : </b>{author?.address}</p>
            </div>


            <div className=" text-center">
                <button className=" btn btn-secondary" >
                    <Link to={`/updateAuthor/${author?.id}`} className=" text-decoration-none fw-bold text-white">Go to Update</Link>
                </button>
            </div>


        </div>
    );
};

export default AuthorDetails;