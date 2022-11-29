// In react rendering is synchronous

// using useDiferedValue hook you can access the previous value of the state 

// Case - 1
// import React, {useDeferredValue, useEffect, useState} from 'react'

// const UseDefferedValueHook = () => {
//     const [counter, setCounter] = useState(0);
//     const deferredCounter = useDeferredValue(counter);

//     useEffect(() => {
//         console.log(`counter value : ${counter}`);
//         console.log(`deferred counter value : ${deferredCounter}`);
//     })

//   return (
//     <div>UseDefferedValueHook</div>
//   )
// }

// export default UseDefferedValueHook
// output - 
//          counter value : 0
//          deferred counter value : 0


// Case - 2

// import React, {useDeferredValue, useEffect, useState} from 'react'

// const UseDefferedValueHook = () => {
//     const [counter, setCounter] = useState(0);
//     const deferredCounter = useDeferredValue(counter);

//     useEffect(() => {
//         console.log(`counter value : ${counter}`);
//         console.log(`deferred counter value : ${deferredCounter}`);
//     })

//   return (
//     <div>
//       <button onClick={() => setCounter(counter+1)}>Increment</button>
//     </div>
//   )
// }

// export default UseDefferedValueHook

// output -
// first time render par useEffect chla  
//          counter value : 0
//          deferred counter value : 0
// ab button ke click par fir se useEffect chla 
//          counter value : 1
//          deferred counter value : 0
//          counter value : 1
//          deferred counter value : 1


// Case - 3

import React, {useDeferredValue, useEffect, useState} from 'react'

const UseDefferedValueHook = () => {
    const [counter, setCounter] = useState(0);
    const deferredCounter = useDeferredValue(counter);

    useEffect(() => {
        console.log(`counter value : ${counter}`);
        console.log(`deferred counter value : ${deferredCounter}`);
    })

  return (
    <div>
      <div>Advanced Component Counter : {deferredCounter}</div>
      <div>Basic Component Counter : {counter}</div>
      <button onClick={() => setCounter(counter+1)}>Increment</button>
    </div>
  )
}
// when i click on this increment button you can't actually see that effect but you can see in the console inside this
// default counter value you have the previous state value and then it's going to update it to the latest value you can
// use this useDifferedValue hook mostly when you want to keep your interface responsive when you have something that
// renders immediately based on the user input and something that needs to be made for the data page so let's suppose
// that you want to fetch your data from the backend but that data it depends on the user input in that case you can use

export default UseDefferedValueHook

// output -
// first time render par useEffect chla  
//          counter value : 0
//          deferred counter value : 0
// ab button ke click par fir se useEffect chla 
//          counter value : 1
//          deferred counter value : 0
//          counter value : 1
//          deferred counter value : 1

