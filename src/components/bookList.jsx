import { useState, useEffect } from "react";
import { useNavigate,useLocation} from "react-router-dom";
import "../styles/bookList.css"
const BookList = () => {

    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch("http://localhost:1000/books")
            let data = await response.json()
            setBooks(data)
        }
        fetchdata()
    }, [books])
    let handledelete=(id,title)=>{

        fetch(`http://localhost:1000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} will be  deleted permanently`)
    }
    let navigate=useNavigate()
    let read=(id)=>{
        if(location.pathname=='/admin/book-list'){
            navigate(`${id}`)
        }
        else{
            navigate(`${id}`)
        }
        
    }
    let location=useLocation()
    return (
        <div className="bookList">
            <h1 id="bklh1">booklist:      {books.length}</h1>
            <div className="books_section">
                {
                    books.map((data) => (
                        
                        <div className="book_card">
                            <div className="bookcardimages">
                                <img src={data.thumbnailUrl} alt="" />
                            </div>

                            <div className="bookcardlist">
                            <h1>Title:{data.title}</h1>
                            <h3>Authors:{data.authors}</h3>
                            <h3>Category:{data.categories}</h3>
                            <h5>pageCount:{data.pageCount}</h5>
                            <button onClick={()=>read(data.id)} >Read More</button><br /><br />
                           {location.pathname=="/admin/book-list" &&  <button onClick={()=>handledelete(data.id,data.title)}>delete</button>}
                            </div>
                        </div>

                    ))
                }
                
            </div>
            

        </div>
    );
}

export default BookList;