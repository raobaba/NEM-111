import React from 'react'
import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit = () => {
        const payload = {
            name, email, pass, age
        }
        fetch("https://puce-exuberant-ox.cyclic.app/users/register", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
        .then((res) => {
          console.log('Success:', res);
          localStorage.setItem("token",res.token)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    return (
        <div>
            <h1>Registration Page</h1>
            <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Enter Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter Your password' value={pass} onChange={(e) => setPass(e.target.value)} />
            <input type="text" placeholder='Enter Your age' value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
    )
}

export default Register
