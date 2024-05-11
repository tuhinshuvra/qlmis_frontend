import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";

const AllBooks = () => {
    const [allBook, setAllBook] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        fetch("http://localhost:5000/books")
            .then(response => response.json())
            .then(data => {
                // console.log("All Books : ", data);
                if (data) {
                    setAllBook(data)
                    setLoading(false);
                } else {
                    setLoading(false)
                }

            })
    }, []);

    const handleDelete = (id) => {
        console.log("Deleting book with ID:", id);
        // setLoading(true);
        fetch(`http://localhost:5000/books/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    setAllBook(allBook.filter(book => book.id !== id));
                    console.log("Book deleted successfully");
                    toast.success("The Book Deleted Successfully!")
                } else {
                    console.error("Failed to delete book");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error deleting book:", error);
                setLoading(false);
            });
    };


    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div className=" container  my-2">
            <h2>All Books </h2>
            {allBook.length > 0 ?
                <>
                    <table className="table table-striped table-hover table-secondary">
                        <thead>
                            <tr >
                                <th scope="col">SL</th>
                                <th scope="col">Book</th>
                                <th scope="col">Author</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">Price</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allBook.map((book, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <Link className=" text-decoration-none fw-bold" to={`/book/${book?.id}`} >
                                            {book.name}
                                        </Link>
                                    </td>
                                    <td>{book.author.name}</td>
                                    <td>{book.publisher.name}</td>
                                    <td>{book.price}<b>৳</b> </td>
                                    <td className="">
                                        <Link to="/updateBook" className=" text-decoration-none fw-bold">Update</Link>
                                    </td>

                                    <td className="" onClick={() => handleDelete(book.id)}>
                                        <button className=" btn btn-danger btn-sm fw-bolder"> X</button>
                                    </td>
                                    {/* <td>
                                        <Link className='btn btn-outline-secondary   btn-sm w-full' to={`/book/${book?.id}`}>Show Details</Link>
                                    </td> */}
                                </tr>
                            ))

                            }

                        </tbody>
                    </table>

                </>
                :
                <>
                    <h2 className=" text-center fw-bolder">No Book Found</h2>
                </>

            }
        </div>
    );
};

export default AllBooks;