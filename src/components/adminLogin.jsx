import { useState } from "react";
import "../styles/adminLogin.css"
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()

    let handleAdminLogin=(e)=>{
        e.preventDefault()
        let data={ email,password }//data from input

    //admin validation
        if (email=="karthik@gmail.com" && password==8296) {
            navigate('/admin/')
            
        } else {
            alert("invalid credentials")
            
        }

    }
    return ( 
        <div className="adminLogin">
            <div className="form">
                <h1>SignIn as Admin</h1>
                <div className="formInput">
                    <form onSubmit={handleAdminLogin}>
                        <div className="email">
                        <input type="email"  className="inpt2" placeholder="Enter email Address" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
                        </div>
                        <div className="password">
                            <input type="text"  className="inpt2"  placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                     <button className="btn2">Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AdminLogin;