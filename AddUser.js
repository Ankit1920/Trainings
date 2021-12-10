import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../actions/userAction'
import  shortid from 'shortid'
import { useNavigate } from 'react-router-dom';


 const AddUser = () => {
    const navigate = useNavigate();
     const dispatch = useDispatch()
     const [id, setID] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [username, setUsername] = useState("")

const createUser = (e)=>{
   e.preventDefault();
   //console.log(id,name,email,phone,username)
   const new_user = {
       _id: shortid.generate(),
       id: id,
       name:name,
       email:email,
       phone:phone,
       username:username,
   }
   dispatch(addUser(new_user));
   navigate('/');
   console.log(new_user)
}

      return (
        <div className='card border-0 shadow'>
            <div className='card-head'>Add a User</div>
            <div className='card-body'>
                <form onSubmit={(e)=> createUser(e)}>
                    <div className='form-group'>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the ID"
                        value={id}
                        onChange={(e)=> setID(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the Name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the Email Address"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the Phone Number"
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the Username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary my-3' type='submit'>Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
