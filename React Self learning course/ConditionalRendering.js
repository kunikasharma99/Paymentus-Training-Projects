import React,{Component} from 'react'

export default class ConditionalRendering extends Component
{
    constructor()
    {
        super();
        this.state={
            data:"Kunika"
        }
    }
    render()
    {
        return(
            <>
    {this.state.data==="Kuniku"?"hi":"hello"};
    </>
        );
    
    }
}