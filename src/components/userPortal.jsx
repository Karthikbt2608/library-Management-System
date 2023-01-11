import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import UserDashBoard from "./userDashboard";
import UserNavbar from "./userNavbar";
import ReadBooks from "./readBooks";

const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashBoard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBooks/>}/>
            </Routes>
            

        </div>
     );
}
 
export default UserPortal;