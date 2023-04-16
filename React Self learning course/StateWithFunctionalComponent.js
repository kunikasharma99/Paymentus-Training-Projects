import { useState } from "react";

function StateWithFunctionalComponent()
{
    const [data, setData] = useState("Kunika")
    function updateClick()
    {
        setData("Paxcom");
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={updateClick}>Click Me</button>

        </div>
    )
}

export default StateWithFunctionalComponent;