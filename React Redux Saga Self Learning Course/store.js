import { createStore } from "redux";

// const store = createStore(//pass reducer her ()=>{
//     return 100;
// })
 
//OR

const dummyReducer =()=>
{
    return 100;
}
 const store = createStore(dummyReducer)
export default store;