import React, { useEffect, useState } from 'react'

const test = () => {
    const [number,setNumber] = useState(0)

    
    //jati bela ni render huda run hunxa, kei ko state change huda run hunxa (1st)
    useEffect(()=>{
        console.log("Hello")
    })

    // //first page mount huda yo vitra ko code run hunxa (2nd)
    // useEffect(()=>{

    // },[])

    // //jaba tyo stateName ko statement change/ render hunxa (3rd)
    // useEffect(()=>{

    // },[])

  return (
    <div>
        <h1>{number}</h1>
      <button onClick={()=> setNumber(number +1)}>Increase</button>

      <h1>{number}</h1>
      <button onClick={()=> setNumber(number -1)}>Decrease</button>
    </div>
  )
}

export default test
