import React,{Component} from 'react'

export default class PassFunctionsAsProps extends Component
{
    render()
    {
        
        console.log(this.props);
       

        return(
            <>
            <h1>Hello</h1>
            <button onClick={data}>Update</button>
          
            </>
        )
    }

}