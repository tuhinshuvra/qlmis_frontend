import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EntryNewBook = () => {
    const [name, setName] = useState(null);
    const [details, setDetails] = useState(null);
    const [author, setAuthor] = useState(null);
    const [page, setPage] = useState(null);
    const [publisher, setPublisher] = useState(null);
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(false);

    const [allAuthor, setAllAuthor] = useState(false);
    const [allPublisher, setAllPublisher] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/authors")
            .then(response => response.json())
            .then(data => {
                console.log("All Authors: ", data);
                setAllAuthor(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching authors:", error);
                setLoading(false);
            });

        fetch("http://localhost:5000/publishers")
            .then(response => response.json())
            .then(data => {
                console.log("All Publishers: ", data);
                setAllPublisher(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching publishers:", error);
                setLoading(false);
            });
    }, []);



    const handleSubmit = (e) => {
        setLoading(true);

        e.preventDefault();

        // const bookData = { name, details, page, author, publisher, price };
        const bookData = {
            name: name,
            details: details,
            page: parseInt(page),
            price: parseInt(price),
            author: { id: parseInt(author) },
            publisher: { id: parseInt(publisher) }
        };

        console.log("Book Data:", bookData);



        fetch("http://localhost:5000/books", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(response => {
                console.log("Response=>", response);
                if (response.ok) {
                    console.log("Book successfully added");
                    toast.success("Successfully added new book!");
                    navigate("/allBooks")
                    setLoading(false);

                } else {
                    console.error("Failed to add book");
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error("Error:", error);
                setLoading(false);
            });
    };

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div className=" col-lg-6 col-10 container my-3">
            <h2 className=" text-center fw-bold text-secondary">New Book Entry</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name," className="form-label fw-bold">Book's Name</label>
                    <input
                        onChange={e => (setName(e.target.value))}
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter book's name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label fw-bold">Author</label>
                    <select
                        onChange={e => setAuthor(e.target.value)}
                        name="author"
                        className="form-select"
                        aria-label="Author Select"
                        required
                    >
                        <option value="" disabled selected>Please Select</option>
                        {allAuthor &&
                            <>
                                {allAuthor.map(author => (
                                    <option key={author.id} value={author.id}>{author.name}</option>
                                ))}
                            </>
                        }

                    </select>
                </div>



                <div className="mb-3">
                    <label htmlFor="publisher" className="form-label fw-bold">Publisher</label>
                    <select
                        onChange={e => setPublisher(e.target.value)}
                        name="publisher"
                        className="form-select"
                        aria-label="Publisher Select"
                        required
                    >
                        <option value="" disabled selected>Please Select</option>
                        {allPublisher &&
                            <>
                                {allPublisher.map(publisher => (
                                    <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
                                ))}
                            </>
                        }

                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="details" className="form-label fw-bold">Book's Details</label>
                    <textarea
                        onChange={e => (setDetails(e.target.value))}
                        className="form-control"
                        name="details"
                        id="details"
                        rows="3"
                        placeholder="Enter book's details"
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="page" className="form-label fw-bold">Page</label>
                    <input
                        onChange={e => (setPage(e.target.value))}
                        type="number"
                        className="form-control"
                        name="page"
                        id="page"
                        placeholder="Enter book's page number"
                        required
                    ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label fw-bold">Price</label>
                    <input
                        onChange={e => (setPrice(e.target.value))}
                        type="number"
                        className="form-control"
                        name="price"
                        id="price"
                        placeholder="Enter book's price"
                        required
                    ></input>
                </div>

                <div className=" text-center">
                    <button onClick={handleSubmit} type="submit" className="btn btn-secondary w-25 fw-bold">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default EntryNewBook;