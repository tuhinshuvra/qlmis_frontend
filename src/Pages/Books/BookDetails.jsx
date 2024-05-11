import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [book, setBook] = useState(null);

    // console.log("Book Details", id);
    // console.log("Book Details", book);
    // const { name, details, author, publisher, page, price } = book;

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/books/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("All Books : ", data);
                if (data) {
                    setBook(data)
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
            <h2 className=" text-center fw-bold text-secondary mb-4">{book?.name} Book's Details</h2>

            <div className="mb-3">
                <p> <b> Author : </b>{book?.author?.name}</p>
            </div>

            <div className="mb-3">
                <p> <b> Publisher : </b>{book?.publisher?.name}</p>
            </div>

            {
                book?.details &&
                <div className="mb-3">
                    <p> <b> About's the book : </b>{book?.details}</p>
                </div>
            }

            <div className="mb-3">
                <p> <b> No of page : </b>{book?.page}</p>
            </div>

            <div className="mb-3">
                <p> <b>Price : </b>{book?.price} <b>৳</b></p>
            </div>

            <div className=" text-center">
                <button className=" btn btn-secondary" >
                    <Link to={`/updateBook/${book?.id}`} className=" text-decoration-none fw-bold text-white">Go to Update</Link>
                </button>
            </div>
        </div>
    );
};

export default BookDetails;