import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Items from './Items'
import Loading from './Loading';

export default function (props) {
  let [items, setItems] = useState([]);
  let [del, setDel] = useState(false);
  let toggle = () =>{
    setDel(!del);
  }

  useEffect(() =>{
    getData();
  },[props.flag,del]);

  let getData = async () =>{
      try {
        let res = await fetch(`http://localhost:8000/posts`);
        let data = await res.json();
        data.shift();
        props.loading();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
  }

 
  if(props.flag){
    return <Loading />
  }else{
    return (
      <div className="todo_item">
        {
          items.map((ele) =>{
            return <Items key={ele.id} item = {ele.items} complete = {ele.complete} id = {ele.id} toggle = {toggle}/>
          })
        }
      </div>
      )
  }
 
}
