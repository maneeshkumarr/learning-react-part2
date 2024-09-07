import React, { useEffect, useState } from 'react'

export default function Effect() {

const [count,setCounter]=useState(0);
const [calculation,setCalculation]=useState(0);

const handle=()=>{
    setCounter(count+1)
}

useEffect(()=>{
    setCalculation(count*3)
},[count])
  return (
    <div>
      <center>
        
        
       <h1>counter:{count}</h1>
       <button onClick={handle}> calculate</button>
       <h1>Calculation:{calculation}</h1>
        </center>  
        </div>
  )
}
