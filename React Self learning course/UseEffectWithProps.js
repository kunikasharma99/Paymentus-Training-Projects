import React, {useEffect} from 'react'

export default function UseEffectWithProps (props)
{
    useEffect(()=>{
        console.warn("USE EFFECT");
    })

    return (
        <>
        <h1>USE EFFECT WITH PROPS {props.count}</h1>
        </>
    )

}