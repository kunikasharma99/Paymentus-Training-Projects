import React, {Component} from 'react'

export default class ComponentDidUpdateLifeCycleMethod extends Component{
    constructor()
    {
        super();
        this.state ={
            // name:"Kunika"
            count:0
        }
        console.warn("Constructor");
    }
componentDidUpdate(preProps,preState,snapshot)
{
    if(this.state.count<10)
    {
        this.setState({count:this.state.count+1})
    }
    // if(preState.count === this.state.count)
    // {
    //     alert("Hello");
    // }
    console.warn("componentDidUpdate", preState);
}
    render()
    {
        console.warn("render");
        return(
            <div>
            <h1>Component Did Update {this.state.count}</h1>
            {/* <button onClick={()=>{this.setState({name:"Paxcom"})}}>Update Me</button> */}
            <button onClick={()=>{this.setState({count:1})}}>Update Me</button>
            </div>
        )
    }
}