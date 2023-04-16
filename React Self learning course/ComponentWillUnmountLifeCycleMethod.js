import React, {Component} from 'react'

export default class ComponentWillUnmountLifeCycleMethod extends Component
{
    componentWillUnmount()
    {
        alert("Component will unmount called");
    }
    render()
    {
        return(
            <h1>ComponentWillUnmountLifeCycleMethod</h1>
        )
    }
}