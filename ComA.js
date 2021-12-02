import react, { createContext } from 'react';
import ComB from './ComB';

const FirstName = createContext();

const ComA = ()=>{
    return (
        <>  
        <FirstName.Provider value ={"vinod"}>
      <ComB />
    </FirstName.Provider>
    </>
    )
}

export default ComA;
export { FirstName };