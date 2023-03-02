import { useEffect } from 'react';
import { useState } from 'react';
const AllNotes = () => {
    const [notes,setNotes] = useState("")
    useEffect(() => {
        fetch("http://localhost:3000/notes", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json()).then(res => {
            console.log(res);
            setNotes(res);
        }).catch(err => console.log(err));
    }, [])
    const deleteNote=(noteID)=>{
        fetch(`http://localhost:3000/notes/delete/:${noteID}`,{
           method:'DELETE',
           headers:{
            'Authorization':localStorage.getItem('token')
           }
        })
    }
    return (
        <>
            <h1>Notes</h1>
             {notes ? notes.map((ele)=>{
                return (
                    <>
                     <h2>Title:{ele.title}</h2>
                     <h2>Note:{ele.note}</h2>
                     <h2>Category:{ele.category}</h2>
                     <button onClick={()=>deleteNote(ele._id)}>Delete</button>
                     <hr />
                    </>
                )
             }):<h1>No Notes are there !</h1>}
        </>
    )
}

export default AllNotes