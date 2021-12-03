import react, { useState, useCallback } from 'react';

const UsecallbackHook = ()=>{
    const [nameHome, setName] = useState('Home Page')

    const HomeHeader = useCallback(()=>{
        setName('Home Page Update')
    },[nameHome])

    return(
        <div>
            <h1 type='home' name={nameHome}></h1>
            <button clickHanlder={HomeHeader}>click me</button>
        </div>
    )
}

export default UsecallbackHook;