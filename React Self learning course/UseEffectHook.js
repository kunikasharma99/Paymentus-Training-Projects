import React, {useEffect, useState} from 'react'

function UseEffectHook ()
{
    const[count,setCount] = useState(0);
    useEffect(()=>{

        console.warn("Use Effect");  //componentDidMount behaviour
    })

    return(
        <>
        <h1>Use Effect Hook {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update Me</button>
        </>
    )
}


export default UseEffectHook;