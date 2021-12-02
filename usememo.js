import react, { useState, useMemo } from 'react';

const Usememo = ()=>{
    const [count, setCount] = useState(0);
    const [item, setItem]= useState(10);

    const multiCountMemo = useMemo(function multiCount(){
        console.warn("multiCount")
        return count*10;

    },[count])
    return(
        <div>
            <h1>UseMemo  Hook in React</h1>
            <h2>Count: {count}</h2>
            <h2>Item: {item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={()=> setCount(count + 1)}> Update Count</button>
            <button onClick={()=> setItem(item * 10)}> Update Item</button>
        </div>
    )
}

export default Usememo;