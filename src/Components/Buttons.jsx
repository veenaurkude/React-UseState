import React from 'react'
import { useState } from 'react';
import "./Button.Module.css";

function Buttons() {

    const [count,setCount] = useState(0);

    function increaseCount(){
        setCount(count + 1)
    }

    function decreaseCount(){
        setCount(count - 1);
    }

  return (
    <div className='button'>
        <h4>Increase button will increase the count by 1 and the other will decrease the count by 1</h4>

        <button onClick={increaseCount}>Increase Count</button>
        &nbsp;
        <button onClick={decreaseCount}>Decrease Count</button>
        <br />
        <strong style={{padding: "5px 140px"}}>
            {count}
        </strong>
    </div>
  )
}

export default Buttons;