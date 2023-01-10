import "../styles/landingPage.css"
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <div className="landing">
            <div className="selectLogin">
                <h1>Library Management System</h1>
                <div className="images">
                <img src="images/icon1.png" alt="" />
                <img src="images/icon3.png" alt="" />
                </div>
                <Link  id="btn1" to='/admin-login' className="login_btn">Admin Login</Link>
                <Link id="btn2" to='/user-login' className="login_btn">User Login</Link>
            </div>
        </div>
    )
}

export default LandingPage;