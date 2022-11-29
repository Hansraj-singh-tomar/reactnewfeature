// Example - 1 =>  Automatic Batching
// import './App.css';
// import React, {useState} from 'react';
// import { flushSync } from 'react-dom'

// export const fetchSomething = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 100));
// }
// function App() {
//   const [count, setCount] = useState(0);
//   const [flag, setFlag] = useState(false);
   
//   const batchingHandleClick = () => {
//       fetchSomething().then(() => {
//         setCount((count) => count + 1);
//         setFlag(!flag);
//       })
//       // setCount((count) => count + 1);
//       // setCount(count + 1);
//   }
  
//   const withoutBatchingHandleClick = () => {
//     flushSync(() => {
//       setCount((count) => count + 1);
//     });
//     flushSync(() => {
//       setFlag(!flag);
//     });
//   }
  
//   // next button ke click karne par react 17 me console two time chalta tha dono state ke liye alag-alag
//   // but in react 18 ye dono state ke liye ek hi baar render hota hai 
  
//   // ab agar hame withoutBatching button ke click hone par react 18 me two 
//   // time render chahiye to ham flushSync ka use karenge uss button ke function ke andar dono state ke liye alag-alag flushSync function likhenge    
//   console.log("render");

//   return (
//     <div className="App">
//       <h1>
//         {count}
//       </h1>
//       <button onClick={batchingHandleClick}>Next</button>
//       <button onClick={withoutBatchingHandleClick}>WithoutBatching</button>
//     </div>
//   );
// }

// export default App ;

// ----------------------------------------------------

// Example - 2 => useTransition() Hook

import React from 'react'
// import StartTransition from './StartTransition'
import UseDefferedValueHook from './UseDeferredValueHook'


const App = () => {
  return (
    <div>
      {/* <StartTransition/> */}
      <UseDefferedValueHook />
    </div>
  )
}

export default App

// Example - faker api
// import faker from "@faker-js/faker";
// console.log(Array(100).fill(0).map((v,i) => faker.vehical.bicycle));

// Example - to understand include() method
// const largeList = [
//   {id:0,product:"Handling pin"},
//   {id:1,product:"Hand Mixer"},
//   {id:2,product:"furniture"}
// ]
// console.log(largeList.includes("H")); // false 
// console.log(largeList[2].product.includes("H")); // false
// console.log(largeList[0].product.includes("H")); // true   
// console.log(largeList[1].product.includes("H")); // true
// console.log(largeList.filter(item => item.product.includes("H")));  
// // 0 : {id: 1, product: "Handling pin"}
// // 1 : {id: 1, product: 'Hand Mixer'}