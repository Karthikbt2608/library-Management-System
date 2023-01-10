import { Link } from "react-router-dom";
import "../styles/adminnavbar.css"
const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="logo">
                <h1 id="">AdminPortal</h1>
            </div>
            <div className="nav">
                <Link to="/admin/">Dashboard</Link>
                <Link to="/admin/add-book">Add Books</Link>
                <Link to="/admin/add-user">Add User</Link>
                <Link to="/admin/book-list">Books Lists</Link>
                <Link to="/admin/user-list">User Lists</Link>
                
            </div>
            <div className="logout">
                <Link to="/">logout</Link>
            </div>
        </div>
    );
}

export default AdminNavbar;