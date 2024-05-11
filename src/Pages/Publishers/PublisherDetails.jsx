import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { useParams } from "react-router-dom";

const PublisherDetails = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [publication, setPublication] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/publishers/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("All Books : ", data);
                if (data) {
                    setPublication(data)
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
            <h2 className=" text-center fw-bold text-secondary mb-4">{publication?.name}  Details</h2>

            <div className="mb-3">
                <p> <b> Name : </b>{publication?.name}</p>
            </div>

            <div className="mb-3">
                <p> <b> Address : </b>{publication?.address}</p>
            </div>


        </div>
    );
};

export default PublisherDetails;