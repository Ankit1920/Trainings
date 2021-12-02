import react, {useContext}from 'react';
import { FirstName } from './ComA';
import ComC from './ComC'
const ComB = ()=>{
    const fname = useContext(FirstName)
    return <h1>My name is {fname}</h1>

}

export default ComB;