import React, {useId} from 'react';

const UseIdHook = () => {
    const id = useId();

    return(
        <>
            <label htmlFor={id}>Enter Your Name</label>
            <input id={id} type="checkbox" />
        </>
    )
}

export default UseIdHook