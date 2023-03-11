import React from 'react'
import { useState } from 'react';
import "./Names.Module.css";

function Names() {

    const [name,setName]= useState(true)

    function handleName(){
        setName(!name);
    }

  return (
    <div className='name'>
        <h4>On every click name will change from Amit to Rajan and vice versa</h4>

        {name ? <p>My name is <strong style={{color: "#ff0660"}}>Amit</strong></p> : <p>My name is <strong style={{color: "#ff0660"}}>Rajan</strong></p> }
        
        <button onClick={handleName}>Change Name</button>
    </div>
  )
}

export default Names;