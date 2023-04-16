import React, {useEffect,useState} from 'react'
 //Using State Variables
export default function UseEffectWithConditions ()
{
    const[data, setData] = useState(1);
    const[count, setCount] = useState(100);
    useEffect(()=>{
        alert("UseEffect for data");
    },{data})

    useEffect(()=>{
        alert("UseEffect for count");
    },{count})


    return(
        <>
        <h1>Use Effect {data}</h1>
        <button onClick={()=>setData(data+1)}>Update Data</button>
        <h1>Use Effect {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update count</button>
        </>
    )
}