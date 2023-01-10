import "../styles/adduser.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adduser = () => {
    let[name,setname]=useState("")
    let[age,setage]=useState("")
    let[email,setemail]=useState("")
    let[phoneNumber,setphoneNumber]=useState("")
    let navigate=useNavigate()
    let handleadduser=(e)=>{
        e.preventDefault();
        let userdata={name,age,email,phoneNumber}
        fetch("http://localhost:1000/users",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userdata)
        })
        alert("user added successfully")
        navigate("/admin/user-list")
    }



    return ( <div className="adduser">
        <div className="userheader">
        <h1> Add users</h1>
        </div>

      <div className="addusercard">
      <form action="" onSubmit={handleadduser} >
            <div className="usercardlist">
            <div className="name">
                
                <input type="text" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)}/>
            </div>
            <div className="age">
             
                <input type="number" min='1'  placeholder="age" value={age} onChange={(e)=>setage(e.target.value)}/>
            </div>
            <div className="email">
             
                <input type="email" placeholder="emaail id" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="phoneNumber">
               
                <input type="tel" placeholder="phone no" minLength='10' maxLength='10' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} />
            </div>
            </div>
            <button>add user</button>
       </form>
      </div>
    </div> );
}
 
export default Adduser;