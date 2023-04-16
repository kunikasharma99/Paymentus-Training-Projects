import React, {Component} from 'react'

export default class ComponentDidMountLifeCycleMethod extends Component{
    constructor()
    {
        super();
        this.state ={
            name:"Kunika"
        }
        console.warn("Constructor");
    }
componentDidMount(preProps,preState,snapshot)
{
    console.warn("componentDidMount");
}
    render()
    {
        console.warn("render");
        return(
            <div>
            <h1>Component Did Mount {this.state.name}</h1>
            <button onClick={()=>{this.setState({name:"Paxcom"})}}>Update Me</button>
            </div>
        )
    }
}