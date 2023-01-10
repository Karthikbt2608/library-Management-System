import { useNavigate } from "react-router-dom";
import "../styles/userLogin.css"
const UserLogin = () => {
  let navigate=useNavigate()
  let handleuser=()=>{
        navigate("/user/")
  }
    return (
        <div className="userLogin">
        <div className="form">
            <h1>SignIn as  User</h1>
            <div className="formInput">
                <form onSubmit={handleuser} >
                    <div className="email">
                    <input className="inpt1" type="email" placeholder="Enter email Address"   required/>
                    </div>
                    <div className="password">
                        <input type="text" className="inpt1" placeholder="Enter password" required/>
                    </div>
                 <button className="btn">Login</button>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default UserLogin;