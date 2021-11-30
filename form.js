import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
const Form =()=>{
    const [input,setinput]=useState({
      email:"",
      pass:""
    })
    const [click,setclick]=useState(false)
    
    const handlechange=(e)=>{
      setinput({
          ...input,
        [e.target.name]:e.target.value
      })
    }
   const handleclick =(e)=>{
       e.preventDefault();
       setclick(!click)
   }
    return(
        <>
        <div className="container">
        <div className="text-center">your email and pass is:{click ? input.email : ""}  {click ? input.pass : ""}</div>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
     onChange={handlechange} value={input.email} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="pass" value={input.pass} className="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={handlechange}/>
  </div>
  <button className="btn btn-primary " style={{marginTop:"12px"}} onClick={handleclick}>submit</button>
  </form>
  </div>
  </>
    );

}
export default Form;