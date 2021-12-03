import react, { useRef } from 'react';

const Useref = ()=>{
    let inputRef = useRef(null)
    const handleInput = ()=>{
        console.warn("Function call")
       inputRef.current.value="1000"
        inputRef.current.focus();
        //  inputRef.current.style.display="none"
    }
    return(
        <div>
            <h1>UseRef in React</h1>
            <input type='text' ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </div>
    );
}

export default Useref;