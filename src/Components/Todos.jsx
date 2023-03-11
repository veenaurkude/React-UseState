import React from 'react'
import { useState } from 'react';
import "./Todos.Module.css";

function Todos() {

    const [arr,setArr] = useState(["Do Some work now !!"]);
    const [todo,setTodo] = useState("");

    function handleClick(){
        setArr([...arr, todo]);
    }

    function captureTodo(e){
        setTodo(e.target.value);
    }


  return (
    <div className='todo'>

        <h4>On clicking Add button will show in below task list</h4>

        <input type="text" value={todo} onChange={captureTodo}/>

        <br /><br />
        <button onClick={handleClick}>Add</button>

        <ul>
            {arr.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    </div>
  )
}

export { Todos };

