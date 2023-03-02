import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Register from './Components/Register.jsx';
import Login from "./Components/Login.jsx"
import CreateNote from './Components/CreateNote.jsx';
import AllNotes from './Components/Notes.jsx';
function App() {
  return (
    <>
      <div className="App">
        <h1>Notes App</h1>
        <button><Link to="/">Home page</Link></button> <br />
        <button><Link to="/register">Registartion Page</Link></button>
        <button><Link to="/login">Login Page</Link></button>
        <button><Link to="/createNote">Note Page</Link></button>
        <button><Link to="/allnotes">Created Notes</Link></button>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createNote" element={<CreateNote />}></Route>
          <Route path="/allnotes" element={<AllNotes />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
