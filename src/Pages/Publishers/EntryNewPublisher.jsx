import { useState } from "react";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EntryNewPublisher = () => {
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !address.trim()) {
            toast.error("Please fill in all fields.");
            return;
        }
        setLoading(true);

        const authorData = { name, address };
        // console.log("authorData : ", authorData);

        fetch("http://localhost:5000/publishers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authorData)
        })
            .then(response => {
                console.log("Response=>", response);
                if (response.ok) {
                    console.log("Publisher successfully added");
                    toast.success("Successfully added new publication!");
                    navigate("/allPublishers")
                    setLoading(false);

                } else {
                    console.error("Failed to add publication");
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
            <h2 className=" text-center fw-bold text-secondary">New Publication Entry</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Publiation's Name</label>
                    <input
                        onChange={e => (setName(e.target.value))}
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter publiation's name"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label fw-bold">Address</label>
                    <input
                        onChange={e => (setAddress(e.target.value))}
                        className="form-control"
                        type="test"
                        name="address"
                        id="address"
                        placeholder="Enter publication's address"
                        required
                    ></input>
                </div>


                <div className=" text-center">
                    <button type="submit" className="btn btn-secondary w-25 fw-bold">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default EntryNewPublisher;