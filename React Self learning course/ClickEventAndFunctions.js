function ClickEventAndFunctions()
{
    let data = "Kunika Sharma";
    function ClickFunction()
    {
        data = "Paxcom";
        // alert("Function Called");
        alert(data);
    }
    return(
        <div>
            <h1>{data}</h1>
            {/* <button onClick={ClickFunction}>Click Me</button> */}
            {/* <button onClick={()=>alert("Kunika")}>Click me</button> */}
            <button onClick={()=>ClickFunction()}>Click Me</button>
        </div>
    )
}

export default ClickEventAndFunctions;