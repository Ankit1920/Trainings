import React , { useState }from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../actions/userAction';
import { useDispatch } from 'react-redux';


const Users = () => {
    const [id, setID] = useState('')
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    console.log(users)
    return (
        <div>
            <h1 className='text-center'>CRUD DATABASE</h1>
            <table className="table shadow">
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td className='action'>
                                <Link to='/users/edit/:id'>
                                    <span className='material-icons mr-2'>edit</span>
                                </Link>
                                     <span className='material-icons text-danger' onClick={()=> dispatch(deleteUser(id))}>remove_circle</span>
                               
                            </td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Users;