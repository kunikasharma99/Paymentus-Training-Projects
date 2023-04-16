import logo from './logo.svg';
import './App.css';
// import ClassComponent from './ClassComponent';
// import PropswithClassComponent from './PropswithClassComponent';
// import PassFunctionsAsProps from './PassFunctionsAsProps';
// import ConditionalRendering from './ConditionalRendering';
// import ConstructorLifeCycle from './ConstructorLifeCycle';
// import RenderLifeCycleMethod from './RenderLifeCycleMethod';
// import ComponentDidMountLifeCycleMethod from './ComponentDidMountLifeCycleMethod';
// import ComponentDidUpdateLifeCycleMethod from './ComponentDidUpdateLifeCycleMethod';
// import ComponentWillUnmountLifeCycleMethod from './ComponentWillUnmountLifeCycleMethod';
// import PropsWithFunctionalComponent from './PropsWithFunctionalComponent';
// import UseEffectHook from './UseEffectHook'
// import UseEffectWithConditions from './UseEffectWithConditions'
import UseEffectWithProps from './UseEffectWithProps';
import {useState} from 'react'
import React, {Component} from 'react';


// function App()
// {
//   function Child()
//   {
//     return (
//       <h1>Child Component</h1>
//     )
//   }
//   return(
//     <div className = "App">
//     <h1>Parent Component</h1>
//     {/* <ClassComponent /> */}
//     <Child />
//   </div>

//   );
// }

// <App />
// {/* <Child /> */}

export default function App()
{
  // constructor ()
  // {
  //   super();
  //   this.state = {
  //     name :"Kunika"
  //   }
  // }

  // updateName ()
  // {
  //   this.setState({name:"Paxcom"});
  // }
  // render()
  // {
  //   return(
  //     <>
  //     <h1>PROPS WITH CLASS COMPONENT</h1>
  //     <PropswithClassComponent name ={this.state.name} work = "paymentus" />
  //     <button onClick={()=>this.updateName()}>Update me</button>
  //     </>
  //   )
  // }

  // constructor()
  // {
  //   super();
  // }
//    getData()
//   {
//    alert("Kunika");

//   }
// render()
// {
//   return(
//     <>
//   <PassFunctionsAsProps data={getData()} />
//   {/* <button onClick={this.getData}>click Me</button> */}
//   </>
//   )
// }

// constructor()
// {
//   super();
//   this.state={
//     show:true
//   }
// }

// render()
// {

// const [name, setName] = useState("KUnika");
  return(
    <>
{/* <ConditionalRendering /> */}
{/* <ConstructorLifeCycle /> */}
{/* <RenderLifeCycleMethod /> */}
{/* <ComponentDidMountLifeCycleMethod /> */}
{/* <ComponentDidUpdateLifeCycleMethod /> */}
{/* {
  this.state.show ? <ComponentWillUnmountLifeCycleMethod/>:<h1>Component removed</h1>
}
<button onClick={()=>this.setState({show:!this.state.show})}>Toggle Unmount</button> */}

{/* <PropsWithFunctionalComponent  name={name}/>
<button onClick={()=>{setName("Sharma")}}>Update</button> */}
{/* <UseEffectHook /> */}
{/* <UseEffectWithConditions /> */}
<UseEffectWithProps count={100} />
</>
  )
// }
}

// export default App;