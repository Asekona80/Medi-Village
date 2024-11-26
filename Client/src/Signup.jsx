import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import medicalImage from './assets/medi-pic.jpg'; 

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div 
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: `url(${medicalImage})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.7  
            }}
        >
            <div className="bg-blue-200 p-3 rounded w-25" style={{
                position: "relative", 
                zIndex: 1,  
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"  
            }}>
                <h2 className="text-black">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="text-black">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0 text-black"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="text-black">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0 text-black"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="text-black">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0 text-black"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* Register Button with Azure Blue Color */}
                    <button
                        className="btn border w-100 rounded-0"
                        style={{ backgroundColor: "#007FFF", color: "#ffffff", borderColor: "#007FFF" }}
                    >
                        Register
                    </button>
                </form>
                <p className="text-center mt-3 text-black">Already have an Account?</p>
                <Link to="/login" className="btn btn-light border w-100 rounded-0 text-black">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
