import { useState } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  let [flag, setFlag] = useState(false);
  let click = () =>{
    setFlag(true);
  }
  let loading = () =>{
    setFlag(false);
  }
  return (
    <div className="container">
        <Input click = {click}/>
      <Todo flag = {flag} loading = {loading}/>
     
    </div>
  );
}

export default App;
