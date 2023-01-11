import { Link } from "react-router-dom";
import "../styles/usernavbar.css"
const UserNavbar = () => {
    return (
        <div className="usernavbar">

            <div className="logo">
                <h1 id="">UserPortal</h1>
            </div>
            <div className="nav">
                <Link to="/user/">Dashboard</Link>
                <Link to="/user/book-list">Books Lists</Link>
            </div>
            <div className="logout">
                <Link to="/">logout</Link>
            </div>
        </div>

    );
}

export default UserNavbar;