import react from 'react';
import { FirstName } from './ComA';

const ComC = ()=>{
    return (
        <>
        <FirstName.Consumer> {(fname) =>{
            return <h1> My name is vinod </h1>
        }}</FirstName.Consumer>
         
    </>
         )

}

export default ComC;