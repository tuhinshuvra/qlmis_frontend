import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePublisher = () => {
    const { id } = useParams();
    const [publication, setPublication] = useState(null);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/publishers/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Publication : ", data);
                if (data) {
                    setPublication(data);
                    setName(data?.name);
                    setAddress(data?.address);
                    setLoading(false);
                } else {
                    setLoading(false)
                }
            });
    }, []);



    const handleUpdateSubmit = (e) => {
        setLoading(true);

        e.preventDefault();

        const bookData = {
            name: name,
            address: address,
        };

        console.log("Update Book Data:", bookData);

        fetch(`http://localhost:5000/publishers/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(response => {
                console.log("Response=>", response);
                if (response.ok) {
                    console.log("Publication successfully updated");
                    toast.success("Successfully Updated!");
                    navigate("/allPublishers")
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

        setLoading(false);
    };

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div className=" col-lg-6 col-10 container my-3">
            <h2 className=" text-center fw-bold text-secondary mb-3">Update {publication?.name} Publication</h2>

            <form onSubmit={handleUpdateSubmit}>
                <div className="mb-3">
                    <label htmlFor="name," className="form-label fw-bold">Publication's Name</label>
                    <input
                        onChange={e => (setName(e.target.value))}
                        defaultValue={name}
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter author's name"
                        required
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="details" className="form-label fw-bold">Address</label>
                    <input
                        onChange={e => (setAddress(e.target.value))}
                        defaultValue={address}
                        className="form-control"
                        name="address"
                        id="address"
                        type="test"
                        placeholder="Enter Publication's address"
                        required
                    ></input>
                </div>


                <div className=" text-center">
                    <button onClick={handleUpdateSubmit} type="submit" className="btn btn-secondary w-25 fw-bold">Update</button>
                </div>
            </form>

        </div>
    );
};

export default UpdatePublisher;