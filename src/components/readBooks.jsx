import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const ReadBooks = () => {
    let[book,setbook]=useState([])
    let params=useParams()
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(`http://localhost:1000/books/${params.id}`)
            let data= await response.json()
            setbook(data)
        }
        fetchdata()
    },[])
    
    return (  
        <div className="readbooks">
            <h1>Read Book</h1>
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            
        </div>
    );
}
 
export default ReadBooks;