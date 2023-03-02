import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = () => {
        const payload = {
            email, pass
        }
        fetch("http://localhost:3000/users/login", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res=>res.json())
        .then(res=>{
            console.log(res);
            localStorage.setItem("token",res.token);
        })
        .catch(err=>console.log(err));
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input type="email" placeholder='Enter Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter Your password' value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleSubmit}>Log In</button>
        </div>
    )
}

export default Login
