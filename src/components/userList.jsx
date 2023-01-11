import { useState,useEffect } from "react";
import "../styles/userList.css"
const UserList = () => {
    let[user,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:1000/users")
            let data=await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    let handleUser=(id,name)=>{
        setUser(user.filter((x)=>x.id!=id))
        alert(`${name}has been removed`)

    }
    return ( 
        <div className="userList">
            <h1>UserList</h1>
            <div className="user_card">
                {
                    user.map((data)=>(
                        <div className="user_details">
                            <h1>{data.name}</h1>
                            <h3>{data.age}</h3>
                            <h3>{data.email}</h3>
                            <h3>{data.phoneNumber}</h3>
                            <button onClick={()=>handleUser(data.id,data.name)}>remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default UserList;