import { useNavigate } from "react-router-dom";
import HomeImage from './assets/background-home.jpg';  


function Home() {
    const navigate = useNavigate();

    // Handle appointment booking
    const handleBookAppointment = () => {
        navigate('/appointment');  
    };

    // Handle notification settings
    const handleNotifications = () => {
        navigate('/notifications');  
    };

    return (
        <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">Machubeni Clinic</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link fw-bold hover-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold hover-link" href="/appointments">Appointments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold hover-link" href="/notifications">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold hover-link" href="/profile">Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

            {/* Main Content */}
            <div
                className="d-flex justify-content-center align-items-center vh-100"
                style={{
                    backgroundImage: `url(${HomeImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingTop: "80px",
                }}
            >
                <div
                    className="p-5 rounded w-75"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0)",  
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",  
                        position: "relative",
                        zIndex: 1,  
                        backdropFilter: "blur(10px)",  
                    }}
                >
                    <h2 className="text-center text-primary text-xl">Welcome to Machubeni Clinic!</h2>
                    <p className="text-center text-xl text-black ">"Your health is our Priority"</p>

                    
                    {/* Call to Action buttons */}
                    <div className="text-center mb-4">
                        <button
                            className="btn btn-success"
                            onClick={handleBookAppointment}
                        >
                            Book an Appointment
                        </button>
                    </div>

                    <div className="text-center mb-4">
                        <button
                            className="btn btn-primary"
                            onClick={handleNotifications}
                        >
                            Manage Notifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
