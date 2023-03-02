import React, { useState } from 'react'

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = () => {
    const payload = {
      title, note, category
    }
    fetch("http://localhost:3000/notes/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    }).then(res => res.json()).then(res => {
      console.log(res)
      localStorage.setItem("token", res.token);
    })
      .catch(error => console.log(error))
  }
  return (
    <div>
      <h1>CreateNote Page</h1>
      <input type="text" placeholder='Enter Your Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder='Enter Your Note' value={note} onChange={(e) => setNote(e.target.value)} />
      <input type="text" placeholder='Enter Your Category' value={category} onChange={(e) => setCategory(e.target.value)} />
      <button onClick={handleSubmit}>CreateNote</button>
    </div>
  )
}

export default CreateNote