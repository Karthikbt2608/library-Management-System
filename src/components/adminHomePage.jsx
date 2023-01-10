import AdminNavbar from "./adminNavbar";
import AdminDashboard from "./adminDashboard";
import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBooks from "./readBooks";
import Adduser from "./adduser";
import AddBook from "./addbook";

const AdminHomePage = () => {
    return ( 
        <div className="adminHomePage">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBooks/>}/>
                <Route path="/add-user" element={<Adduser/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHomePage;