import React from 'react'
import { useState } from 'react'

export default function (props) {
  let [text, setText] = useState("");
  let handleChange = (event) =>{
    setText(event.target.value);
  }
  let add = async (item) =>{
    try {
      let data = {
        items : item ,
        complete : false
      }
      let res = await fetch(`http://localhost:8000/posts`, {
        method : "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="input">
        <input type="text" name="" id="" value={text} placeholder='ToDo' onChange={handleChange}/>
        <button onClick={() =>{add(text);  props.click()}}>Save</button>
    </div>
  )
}
