
const UpdateBook = () => {
    return (
        <div className=" col-lg-6 col-10 container my-3">
            <h2 className=" text-center fw-bold text-secondary">Update Book</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="booksName" className="form-label fw-bold">Book's Name</label>
                    <input type="text" name="booksName" className="form-control" id="booksName" placeholder=" Enter book's name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label  fw-bold">Author</label>
                    <input type="text" name="author" className="form-control" id="author" placeholder=" Enter author's name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="publisher" className="form-label  fw-bold">Publisher</label>
                    <input type="text" name="publisher" className="form-control" id="publisher" placeholder=" Enter publisher's name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="bookDetails" className="form-label fw-bold">Details</label>
                    <textarea className="form-control" name="bookDetails" id="bookDetails" rows="3" placeholder=" Enter book's details"></textarea>
                </div>

                <div className=" text-center">

                    <button type="submit" className="btn btn-secondary w-25 fw-bold">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateBook;