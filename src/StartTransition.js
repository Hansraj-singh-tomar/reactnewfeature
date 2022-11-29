// what is concurrency in react js
// what is useTransition Hook
// what is useDefferedValue Hook
// How is useDefferedValue different from debouncing?
// Difference between useDefferedValue and useTransition Hook?

// useTransition Hook Second example 

// Case - 1 
// import React, { useTransition, useState, useEffect } from 'react'

// const StartTransition = () => {
    
//     const [isPending, startTransition] = useTransition();
//     const [count, setCount] = useState(0)
  
//     useEffect(()=>{
//         console.log("useEffect Trigger");
//     },[]) 

//     function handleClick(){
//         startTransition(() => {
//             console.log("useTransition Trigger");
//         })
//     }

//     return (
//     <div>
//         <button onClick={handleClick}>Count Number {count}</button>
//     </div>
//     )
// }

// export default StartTransition

// // output - 
// // sabse pehle useEffect hook ka output milega - useEffect Trigger  // yha useEffect two time isliye render ho rha hai because of React.strictMode ke karan
// //                                               useEffect Trigger        
// // ab button ke click par milega - useTransition Trigger                                


// Case - 2

// import React, { useTransition, useState, useEffect } from 'react'

// const StartTransition = () => {
    
//     const [isPending, startTransition] = useTransition();
//     const [count, setCount] = useState(0)
  
//     useEffect(()=>{
//         console.log("useEffect Trigger");
//     },[count]) 

//     function handleClick(){
//         setCount(count + 1)
//         startTransition(() => {
//             console.log("useTransition Trigger");
//         })
//     }

//     return (
//     <div>
//         <button onClick={handleClick}>Count Number {count}</button>
//     </div>
//     )
// }

// export default StartTransition

// output - 
// sabse pehle useEffect hook ka output milega - useEffect Trigger
//                                             - useEffect Trigger 
// ab button ke click par milega - useTransition Trigger 
//                                 useEffect Trigger



// Case - 3
// so whenever you want to do some extra work before the state updates you 
// can do that inside this startTransition() 

import React, { useTransition, useState } from 'react'

const largeList = [
    {id:1,product:"Hand Mixer"},
    {id:2,product:"furniture"}
]

const StartTransition = () => {
    
    const [isPending, startTransition] = useTransition();
    const [list, setList] = useState(largeList);
    const [name, setName] = useState("");
  
    // console.log(isPending); // false 

    function handleChange(e){
        setName(e.target.value);
        // yha startTransition ke andar setList ka code pehle chalega setName state ke update hone se pehle 
        startTransition(() => {
            // console.log(isPending); // true // startTransition isPending ki value ko false se true me convert kar deta hai
            setList(largeList.filter(item => item.product.includes(e.target.value)));
        });
        // the difference is before we specify the value to this usestate i am going to change
        // the value of list using setList and specify that to using this startTransition() function  
    }

    return (
    <div>
        <input type="text" value={name} onChange={handleChange}/>
        {
            isPending ? 
            <div>Loading...</div> :
            list.map(item => <div key={item.id}>{item.product}</div>)
        }
    </div>
    )
}

export default StartTransition

// the default value of this is pending is false 
// but when you call this start transition it is going to change that value to true
/// because this callback function need to be execute before this used it 
// so useTransition will automatically change that false value to true and you are going to have true inside this bending variable  