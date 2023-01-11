import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/readBook.css"
const ReadBooks = () => {
    let[book,setbook]=useState([])
    let params=useParams()
    let navigate=useNavigate()
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(`http://localhost:1000/books/${params.id}`)
            let data= await response.json()
            setbook(data)
        }
        fetchdata()
    },[])
    let handlereadless=()=>{
        navigate("/admin/book-list")
    }
    
    return (  
        <div className="readbooks">
            <h1>Read Book</h1>
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            <button onClick={handlereadless}>Readless</button>
            
        </div>
    );
}
 
export default ReadBooks;