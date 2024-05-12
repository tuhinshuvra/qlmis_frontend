import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import useTitle from "../../hooks/useTitle";

const Home = () => {
    const [allBook, setAllBook] = useState([]);
    const [loading, setLoading] = useState(false);
    useTitle("Home");

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

    const latestBooks = allBook.slice(0, 10)

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div>
            <h1 className=" text-center fw-bolder my-3 text-success fst-italic">Welcome to Quantum Library Management Information System</h1>

            <div className=" container  mt-4">
                <h1 className=" text-center fw-bolder my-3 text-primary">QLMIS Latest Books</h1>
                {latestBooks.length > 0 ?
                    <>
                        <table className="table table-striped table-hover table-secondary">
                            <thead className="">
                                <tr className="" >
                                    <th scope="col">SL</th>
                                    <th scope="col">Book</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Pages</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestBooks.map((book, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <Link className=" text-decoration-none fw-bold" to={`/book/${book?.id}`} >
                                                {book.name}
                                            </Link>
                                        </td>
                                        <td>{book.author.name}</td>
                                        <td>{book.publisher.name}</td>
                                        <td>{book.page}</td>
                                        <td>{book.price}<b>৳</b> </td>
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

        </div>
    );
};

export default Home;