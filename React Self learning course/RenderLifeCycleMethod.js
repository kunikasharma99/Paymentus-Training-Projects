import React, {Component} from 'react'
export default class RenderLifeCycleMethod extends Component
{
    constructor()
        {
            super();
            this.state = {
                name:"Paxcom"
            }
        }

        UpdateName()
        {
            this.setState({name:"Paymentus"})
        }
    render()
    {
        console.warn("Render Method");
        console.log(this.props);
        return(
            <>
            <h1>React Render Life Cycle</h1>
            <h2>Hello Kunika {this.state.name}</h2>
            <button onClick={()=>this.UpdateName()}>Click Me</button>
            
            </>
        )
    }
}