
const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="pt-5">


                    <div className="d-md-flex justify-content-center border-top py-2">
                        <p className="text-center my-0">© {new Date().getFullYear()} Quantum Library Management Information System</p>
                        <span className=" mx-3 d-none d-md-block">|</span>
                        <p className=" text-center my-0">
                            Powered by
                            <a className=" text-decoration-none ms-1" href="https://quantummethod.org.bd" target="_blank" rel="noreferrer">QuantumFoundation</a>
                        </p>
                    </div>

                </footer>
            </div>
        </div>
    );
};

export default Footer;