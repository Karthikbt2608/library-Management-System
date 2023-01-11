import "../styles/addbook.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    let [title, settitle] = useState("")
    let [authors, setauthors] = useState("")
    let [categories, setcategories] = useState("")
    let [pageCount, setpageCount] = useState("")
    let [shortDescription, setshortDescription] = useState("")
    let [longDescription, setlongDescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")
    let navigate=useNavigate()
    let handleaddbook = (e) => {
        e.preventDefault();
        //data to be posted
        let bookdata={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        ///posting to server
        fetch("http://localhost:1000/books",
        {
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(bookdata)
        })
       alert("books added successfully")
       navigate("/admin/book-list") 

    }


    return (
        <div className="addBook">
            <h1 id="kh">Add a Book</h1>
            <div className="form1">
                <form action="" onSubmit={handleaddbook}>
                    <div className="title">
                        <input type="text" placeholder="title of the book" required value={title} onChange={(e) => settitle(e.target.value)} />
                    </div>
                    <div className="authors">
                        <input type="text" placeholder="authors of the book" required value={authors} onChange={(e) => setauthors(e.target.value)} />
                    </div>
                    <div className="categories">
                        <input type="text" placeholder="category of the book" required value={categories} onChange={(e) => setcategories(e.target.value)} />
                    </div>
                    <div className="pageCount">
                        <input type="number" placeholder="enter page count" required value={pageCount} onChange={(e) => setpageCount(e.target.value)} />
                    </div>
                    <div className="shortDecription">
                        <textarea placeholder="shortDecription of the book" name="" id="" cols="30" rows="5" value={shortDescription} onChange={(e) => setshortDescription(e.target.value)}></textarea>
                    </div>
                    <div className="longDecription">
                        <textarea placeholder="longDecription of the book" required name="" id="" cols="30" rows="7" value={longDescription} onChange={(e) => setlongDescription(e.target.value)}></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" required value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} placeholder="image url" />
                    </div>
                    <button className="">Add book</button>
                </form>
            </div>
        </div>
    );
}
export default AddBook;