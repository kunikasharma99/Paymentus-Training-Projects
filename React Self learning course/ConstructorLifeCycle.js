import React, {Component} from 'react'

export default class ConstructorLifeCycle extends Component{
    constructor()
    {
        super();
        this.state = {
            data:"Kunika"
        }
    }
    render()
    {
        return(
            <h1>Hello world!!! {this.state.data}</h1>
        )
    }
}