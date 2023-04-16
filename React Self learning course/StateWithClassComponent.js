import React, {Component} from 'react'
export default class StateWithClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            data:"Kunika"
        }
    }

    updateClick() {
        this.setState({data:"Paxcom"});

    }
    render()
    {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=> this.updateClick()}>Click me</button>
            </div>
        )
    }

} 