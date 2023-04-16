import React, {Component} from 'react'

export default class PropswithClassComponent extends Component
{
    render()
    {
        console.log(this.props);
        return(
            
            <>
            <h1>Hello {this.props.name}!!!!</h1>
            {/* <h2>Works at {this.state.work}</h2> */}
            
            </>
        )
    }
}