import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import medicalImage from './assets/medi-pic.jpg';  // Importing the image

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log("Login result:", result);  
                if (result.data && result.data.status === "Success") {
                    console.log("Redirecting to home...");  
                    navigate('/home');  
                } else {
                    console.log("Login failed:", result.data.message || "Unknown error");
                }
            })
            .catch(err => {
                console.log("Login error:", err);  // Log any errors
            });
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
            <div className="p-3 rounded w-25" style={{
                backgroundColor: "transparent",  
                position: "relative",  
                zIndex: 1,  
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"  
            }}>
                <h2 className="text-black">Login</h2>
                <form onSubmit={handleSubmit}>
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
                    {/* Login Button with Light Blue Color */}
                    <button
                        className="btn btn-primary border w-100 rounded-0"
                        style={{ backgroundColor: "#007fff", borderColor: "#add8e6" }}
                    >
                        Login
                    </button>
                </form>
                <p className="text-center mt-3 text-black">Do not Have An Account?</p>
                <Link to="/register" className="btn btn-light border w-100 rounded-0 text-black">
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Login;
