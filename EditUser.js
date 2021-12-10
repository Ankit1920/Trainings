import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateUser, getUser } from '../../actions/userAction'
import  shortid from 'shortid'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


 const EditUser = () => {
     let { id } = useParams()
    const navigate = useNavigate();
     const dispatch = useDispatch()
     const user = useSelector((state)=> state.user.user)
    // const [id, setID] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [username, setUsername] = useState("")

useEffect(() => {
    if(user != null){
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setUsername(user.username);
    }
    dispatch(getUser(id))
}, [user])

const onUpdateUser = (e)=>{
    e.preventDefault();

    const update_user = Object.assign(user, {name:name,email:email,phone:phone,username:username})
    dispatch(updateUser(update_user));
    navigate('/');
}
      return (
        <div className='card border-0 shadow'>
            <div className='card-head'>Edit a User</div>
            <div className='card-body'>
                <form onSubmit={(e)=> onUpdateUser(e)}>
                    {/* <div className='form-group'>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the ID"
                        value={id}
                        onChange={(e)=> setID(e.target.value)}
                        />
                    </div> */}
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
                    <button className='btn btn-warning my-3' type='submit'>Add User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser ;
