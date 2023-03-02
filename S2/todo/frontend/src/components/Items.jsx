import React from 'react'

export default function Items(props) {
  let deleteItem = async (id) =>{
    try {
      let res = await fetch(`http://localhost:8000/posts/${id}`,{
        method : "DELETE"
      });


    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="items">
        <p>{props.item}</p>
        <div className="buttons">
            <button className="edit"><i class="fa-solid fa-square-check"></i></button>
            <button className="delete" onClick={() =>{deleteItem(props.id); props.toggle()}}><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}
